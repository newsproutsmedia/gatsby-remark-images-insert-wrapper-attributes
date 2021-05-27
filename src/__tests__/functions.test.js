const pluginFunctions = require('../functions');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { DEFAULT_OPTIONS } = require('../constants');
const { nodeMock, nodeCaptionMock } = require('../__mocks__/ast.mocks');

describe("Functions Tests", () => {

    const clearPluginFunctionsProperties = () => {
        delete pluginFunctions.pluginOptions;
        delete pluginFunctions.setCssInWrapper;
        delete pluginFunctions.alignedImageWidth;
        delete pluginFunctions.files;
    }

    beforeEach(() => {
        clearPluginFunctionsProperties();
    })

    // setPluginOptions
    it("should set plugin options in functions object", () => {
        const options = {setCssInWrapper: true, alignedImageWidth: 300};
        pluginFunctions.setPluginOptions(options);
        expect(pluginFunctions.setCssInWrapper).toBeTruthy();
        expect(pluginFunctions.alignedImageWidth).toBe(300);
    })

    // setFiles
    it("should set files property in functions object", () => {
        const files = {file: "test.jpg"};
        pluginFunctions.setFiles(files);
        expect(pluginFunctions.files).toEqual(
            expect.objectContaining({
                file: "test.jpg"
            })
        )
    })

    // getPluginOption
    it("should return property value of pluginOptions", () => {
        const options = {setCssInWrapper: true, alignedImageWidth: 300};
        pluginFunctions.setPluginOptions(options);
        expect(pluginFunctions.getPluginOption("setCssInWrapper")).toBeTruthy();
    })

    it("should return default value if pluginOption not found", () => {
        const options = {};
        pluginFunctions.setPluginOptions(options);
        expect(pluginFunctions.getPluginOption("setCssInWrapper")).toBeTruthy();
        expect(pluginFunctions.getPluginOption("alignedImageWidth")).toBe(300);
    })

    it("should return null if no pluginOption found", () => {
        const options = {setCssInWrapper: true, alignedImageWidth: 300};
        pluginFunctions.setPluginOptions(options);
        expect(pluginFunctions.getPluginOption("test")).toBeFalsy();
    })

    // hasImage
    it("should return true if value begins with <img", () => {
        const nodeValue = `<img src="test.jpg" title="test" alt="test"/>`;
        expect(pluginFunctions.hasImage(nodeValue)).toBeTruthy();
    })

    it("should return false if value does not begin with <img", () => {
        const nodeValue = `<div>Test</div>`;
        expect(pluginFunctions.hasImage(nodeValue)).toBeFalsy();
    })

    // getWrapper
    it("should return caption element if it exists", () => {
        let {value} = nodeCaptionMock;
        const dom = new JSDOM(value, { contentType: "text/html" });
        const imgCaption = dom.window.document.getElementsByClassName("gatsby-resp-image-figure")[0];
        const wrapper = pluginFunctions.getWrapper(dom);
        expect(wrapper).toBe(imgCaption);
    })

    it("should return wrapper element if caption element does not exist", () => {
        let {value} = nodeMock;
        const dom = new JSDOM(value, { contentType: "text/html" });
        const imgWrapper = dom.window.document.getElementsByClassName("gatsby-resp-image-wrapper")[0];
        const wrapper = pluginFunctions.getWrapper(dom);
        expect(wrapper).toBe(imgWrapper);
    })

    // setAttribute
    it("should set attribute in wrapper", () => {

    })

    // getImgSrc
    it("should return image source", () => {

    })

    // getFilename
    it("should return file name", () => {

    })

    // getImgDimensions
    it("should return object with image width and height", () => {

    })

    // getImageFile
    it("should return absolute path to image file", () => {

    })

    it("should return null if not image file is found", () => {

    })

    // findLocalImg
    it("should return absolute path to local image file", () => {

    })

    it("should return null if no local image file found", () => {

    })

    // findImagePath
    it("should return local image path", () => {

    })

    // setCSS
    it("should set width and height style in wrapper", () => {

    })

    // insertWrapperAttributes
    it("should call setAttribute", () => {

    })

    it("should call setCSS if setCssInWrapper pluginOption is true", () => {

    })

    it("should update AST", () => {

    })
});