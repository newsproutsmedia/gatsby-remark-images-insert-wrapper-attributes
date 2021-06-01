const jsdom = require("jsdom");
const sizeOf = require("image-size");
const path = require('path');
const { JSDOM } = jsdom;
const { find } = require('lodash');
const { DEFAULT_OPTIONS } = require('./constants');

const pluginFunctions = {
    errorMessages: {},

    /** 
     * Set plugin options properties for functions
     * @param {object} options
    */
    setPluginOptions: function(options) {
        this.pluginOptions = options.hasOwnProperty("setCssInWrapper") ? options : DEFAULT_OPTIONS;
        this.setCssInWrapper = this.getPluginOption("setCssInWrapper");
        this.alignedImageWidth = this.getPluginOption("alignedImageWidth");
        return {setCssInWrapper: this.setCssInWrapper, alignedImageWidth: this.alignedImageWidth};
    },

    /**
     * Set files property for functions
     * @param {object||Array} files 
     */
    setFiles: function(files) {
        this.files = files;
        return this.files;
    },
    
    /**
     * Check if pluginOptions contains property and return it or default value
     * @param {string} property 
     * @returns {any}
     */
    getPluginOption: function(property) {
        return property in this.pluginOptions ? this.pluginOptions[property] : DEFAULT_OPTIONS[property];
    },
    
    /**
     * Check if node value begins with <img
     * @param {string} value
     * @returns {Boolean}
     */
    hasImage: function(value) {
        const reg = /<img/gim;
        return reg.test(value);
    },
    
    /**
     * Select which remark-image wrapper will be used (caption or wrapper)
     * @param {JSDOM} dom
     * @returns {Element}
     */
    getWrapper: function(dom) {
        const imgWrapper = dom.window.document.getElementsByClassName("gatsby-resp-image-wrapper")[0];
        const imgCaption = dom.window.document.getElementsByClassName("gatsby-resp-image-figure")[0];
        if(imgCaption) {
            return imgCaption;
        } else {
            return imgWrapper;
        }
    },
    
    /**
     * Sets data attribute on wrapper Element
     * @param {Element} wrapper
     * @param {string} key
     * @param {string} value
     */
    setAttribute: function(wrapper, key, value) {
        wrapper.dataset[key] = value;
    },
    
    /**
     * Returns src of img Element
     * @param {JSDOM} dom
     * @returns {string}
     */
    getImgSrc: function(dom) {
        const img = dom.window.document.querySelector("img");
        if(img && img.src) {
            return img.src;
        }
        return null;
    },
    
    /**
     * Get image filename from src
     * @param {string} file
     * @returns {string}
     */
    getFilename: function(src) {
        if(!src) return null;
        let filename = path.basename(src);
        return filename;
    },

    /**
     * Uses image-size package to calculate dimensions
     * @param {string} image 
     * @returns {object || undefined}
     */
    getSizeOf: function(image) {
        return sizeOf(image);
    },
    
    /**
     * Get image dimensions from
     * @param {JSDOM} dom
     * @return {Object || null}
     */
    getImgDimensions: function(dom) {
        const image = this.findLocalImage(this.getImgSrc(dom));
        if(!image) return {};
        const imgDimensions = this.getSizeOf(image);
        const ratio = imgDimensions['width'] / imgDimensions['height'];
        const width = Math.min(this.alignedImageWidth, imgDimensions['width']);
        const height = Math.round(width * (1 / ratio));
        return { width, height };
    },
    
    /**
     * Check image filename against files and return match
     * @param {string} imagePath
     * @returns {Object || null}
     */
     getImageByFilename: function(filename) {
        return find(this.files, file => file.base === filename)
    },
    
    /**
     * Check possible locations for the source image file
     * @param {string} src
     * @returns {string || null}
     */
    findLocalImage: function(src) {
        let filename = this.getFilename(src);
        let file = this.getImageByFilename(filename);
        if(file) {
            return file.absolutePath;
        }

        return null;
    },

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
    setCSS: function(wrapper, dom, attributes) {
        // get width and height from attributes
        // if not available, try and get them from
        // the source file
        let imgDimensions = this.getImgDimensions(dom);
        let width = attributes.width || imgDimensions.width || null;
        let height = attributes.height || imgDimensions.height || null;
        if (width && height) {
            wrapper.style.cssText += `width:${width}px;height:${height}px`;
            return {width: wrapper.style.width, height: wrapper.style.height};
        } else {
            this.errorMessages.setCSS = "No width or height found";
        }
    },
    
    /**
     * Add attributes to wrapper
     * @param {object} node 
     */
    insertWrapperAttributes: function(node) {
        let {type, value, position, ...attributes} = node;
        const dom = new JSDOM(value, { contentType: "text/html" });

        let wrapper = this.getWrapper(dom);
        if (wrapper) {
            // set dataset attributes on wrapper
            for (const [key, value] of Object.entries(attributes)) {
                value && this.setAttribute(wrapper, key, value);
            }

            // set CSS styles on wrapper
            if(this.setCssInWrapper) {
                this.setCSS(wrapper, dom, attributes);
            } else {
                this.errorMessages.setCss = "setCssInWrapper set to false";
            }

            // update AST node
            node.value = wrapper.outerHTML;
        } else {
            this.errorMessages.wrapper = "No wrapper found";
        }
    }

}

module.exports = pluginFunctions;