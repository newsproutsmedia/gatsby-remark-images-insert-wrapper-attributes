const visit = require("unist-util-visit");
const jsdom = require("jsdom");
const sizeOf = require("image-size");
const path = require('path');
const { JSDOM } = jsdom;
const { find } = require('lodash');
const { DEFAULT_OPTIONS } = require('./constants');

module.exports = ({ files, markdownAST }, pluginOptions) => {

  // TODO: Add override option for captions

  /**
 * Check if pluginOptions contains property and return it or default value
 * @param {string} property 
 * @returns {any}
 */
  const getPluginOption = (property) => {
    return property in pluginOptions ? pluginOptions[property] : DEFAULT_OPTIONS[property];
  }

  const setCssInWrapper = getPluginOption("setCssInWrapper");
  const alignedImageWidth = getPluginOption("alignedImageWidth");

  /**
   * Check if node value begins with <img
   * @param {string} value
   * @returns {Boolean}
   */
  const hasImage = value => {
    const reg = /<img/gim;
    return reg.test(value);
  }

  /**
   * Select which remark-image wrapper will be used (caption or wrapper)
   * @param {JSDOM} dom
   * @returns {Element}
   */
  const getWrapper = (dom) => {
    const imgWrapper = dom.window.document.getElementsByClassName("gatsby-resp-image-wrapper")[0];
    const imgCaption = dom.window.document.getElementsByClassName("gatsby-resp-image-figure")[0];
    if(imgCaption) {
      return imgCaption;
    } else {
      return imgWrapper;
    }
  }

  /**
   * Sets data attribute on wrapper Element
   * @param {Element} wrapper
   * @param {string} key
   * @param {string} value
   */
  const setAttribute = (wrapper, key, value) => {
    wrapper.dataset[key] = value;
  }

  /**
   * Returns src of img Element
   * @param {JSDOM} dom
   * @returns {string}
   */
  const getImgSrc = (dom) => {
    const img = dom.window.document.querySelector("img");
    return img.src;
  }

  /**
   * Get image filename from src
   * @param {string} file
   * @returns {string}
   */
  const getFilename = (file) => {
    return path.basename(file);
  }

  /**
   * Get image dimensions from
   * @param {JSDOM} dom
   * @return {Object || null}
   */
  const getImgDimensions = (dom) => {
    const image = findImagePath(getImgSrc(dom));
    const imgDimensions = sizeOf(image);
    const ratio = imgDimensions['width'] / imgDimensions['height'];
    const width = Math.min(alignedImageWidth, imgDimensions['width']);
    const height = width * (1 / ratio);
    return { width, height };
  }

  /**
   * Check image against files and return match
   * @param {string} imagePath
   * @returns {Object || null}
   */
  const getImageFile = (imagePath) => {
    return find(files, file => {
      const fullPath = path.join(file.dir, imagePath);
      if(file && file.absolutePath) {
        return file.absolutePath === fullPath;
      }
      return null;
    })
  }

  /**
   * Check possible locations for the source image file
   * @param {string} src
   * return {string || null}
   */
  const findLocalImg = src => {
    const filename = getFilename(src);
    const pathOptions = ["./", "/images/", "../images/"];

    for (const path of pathOptions) {
      let absoluteImgPath = path.endsWith('/') ? path : path + "/";
      absoluteImgPath += filename;
      const file = getImageFile(absoluteImgPath);
      if(file) {
        return file.absolutePath;
      }
    }
    return null;
  }

  /**
   * Attempts to find source file locally
   * @param {string} src
   * @returns {string || null}
   */
  const findImagePath = (src) => {
    // try the image src first

    // if node.originalSrc is set, use that
    let pathToImage = findLocalImg(src);
    // if remote, getRemoteImg(path)

    return pathToImage;
  }

  /**
   * Temporary solution until CSS attr() is supported
   * beyond just the content property.
   * To implement on the front end:
   * Create a CSS @media rule to "unset" these values
   * below a designated (i.e. mobile) breakpoint.
   * @param {Element} wrapper
   * @param {JSDOM} dom
   * @param {Object} attributes
   */
  const setCSS = (wrapper, dom, attributes) => {
    // get width and height from attributes
    // if not available, try and get them from
    // the source file
    let width = attributes.width || getImgDimensions(dom).width;
    let height = attributes.height || getImgDimensions(dom).height;
    if (width && height) {
      wrapper.style.cssText += `width:${width}px;height:${height}px`;
    }
  }

  // Get and process the image wrapper
  const insertWrapperAttributes = node => {
    let {type, value, position, ...attributes} = node;
    const dom = new JSDOM(value, { contentType: "text/html" });

    let wrapper = getWrapper(dom);
    if (wrapper) {
      // set dataset attributes on wrapper
      for (const [key, value] of Object.entries(attributes)) {
        value && setAttribute(wrapper, key, value);
      }

      // set CSS styles on wrapper
      if(setCssInWrapper) {
        setCSS(wrapper, dom, attributes);
      }

      // update AST node
      node.value = wrapper.outerHTML;
    }
  }

  // Check that the html node has an image element
  visit(markdownAST, "html", node => {
    let remarkImgHtml = node.value.toString();
    hasImage(remarkImgHtml) && insertWrapperAttributes(node);
  })


  return markdownAST;
}