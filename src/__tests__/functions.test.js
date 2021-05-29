const pluginFunctions = require('../functions');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { DEFAULT_OPTIONS } = require('../constants');
const { nodeMock, nodeCaptionMock, nodeImageAttributesMock, filesMock } = require('../__mocks__/ast.mocks');
const { setAttribute } = require('../functions');

describe("Functions Tests", () => {

    const clearPluginFunctionsProperties = () => {
        delete pluginFunctions.pluginOptions;
        delete pluginFunctions.setCssInWrapper;
        delete pluginFunctions.alignedImageWidth;
        delete pluginFunctions.files;
    };

    beforeEach(() => {
        clearPluginFunctionsProperties();
    });

    // setPluginOptions
    it("should set plugin options in functions object", () => {
        const options = {setCssInWrapper: true, alignedImageWidth: 300};
        pluginFunctions.setPluginOptions(options);
        expect(pluginFunctions.setCssInWrapper).toBeTruthy();
        expect(pluginFunctions.alignedImageWidth).toBe(300);
    });

    // setFiles
    it("should set files property in functions object", () => {
        const files = {file: "test.jpg"};
        pluginFunctions.setFiles(files);
        expect(pluginFunctions.files).toEqual(
            expect.objectContaining({
                file: "test.jpg"
            })
        )
    });

    // getPluginOption
    it("should return property value of pluginOptions", () => {
        const options = {setCssInWrapper: true, alignedImageWidth: 300};
        pluginFunctions.setPluginOptions(options);
        expect(pluginFunctions.getPluginOption("setCssInWrapper")).toBeTruthy();
    });

    it("should return default value if pluginOption not found", () => {
        const options = {};
        pluginFunctions.setPluginOptions(options);
        expect(pluginFunctions.getPluginOption("setCssInWrapper")).toBeTruthy();
        expect(pluginFunctions.getPluginOption("alignedImageWidth")).toBe(300);
    });

    it("should return null if no pluginOption found", () => {
        const options = {setCssInWrapper: true, alignedImageWidth: 300};
        pluginFunctions.setPluginOptions(options);
        expect(pluginFunctions.getPluginOption("test")).toBeFalsy();
    });

    // hasImage
    it("should return true if value begins with <img", () => {
        const nodeValue = `<img src="test.jpg" title="test" alt="test"/>`;
        expect(pluginFunctions.hasImage(nodeValue)).toBeTruthy();
    });

    it("should return false if value does not begin with <img", () => {
        const nodeValue = `<div>Test</div>`;
        expect(pluginFunctions.hasImage(nodeValue)).toBeFalsy();
    });

    // getWrapper
    it("should return caption element if it exists", () => {
        let {value} = nodeCaptionMock;
        const dom = new JSDOM(value, { contentType: "text/html" });
        const imgCaption = dom.window.document.getElementsByClassName("gatsby-resp-image-figure")[0];
        const wrapper = pluginFunctions.getWrapper(dom);
        expect(wrapper).toBe(imgCaption);
    });

    it("should return wrapper element if caption element does not exist", () => {
        let {value} = nodeMock;
        const dom = new JSDOM(value, { contentType: "text/html" });
        const imgWrapper = dom.window.document.getElementsByClassName("gatsby-resp-image-wrapper")[0];
        const wrapper = pluginFunctions.getWrapper(dom);
        expect(wrapper).toBe(imgWrapper);
    });

    // setAttribute
    it("should set attribute in wrapper", () => {
        let {value} = nodeMock;
        let testKey = "testKey";
        let testValue = "testValue"
        const dom = new JSDOM(value, { contentType: "text/html" });
        const wrapper = dom.window.document.getElementsByClassName("gatsby-resp-image-wrapper")[0];
        pluginFunctions.setAttribute(wrapper, testKey, testValue);
        expect(wrapper.dataset.testKey).toBe("testValue");
    });

    // getImgSrc
    it("should return image source", () => {
        let {value} = nodeMock;
        const dom = new JSDOM(value, { contentType: "text/html" });
        const source = pluginFunctions.getImgSrc(dom);
        expect(source).toBe("/static/568c5d417f7ef32ba3bb5b95bdf0f42d/80e3c/test.jpg");
    });

    // getFilename
    it("should return file name", () => {
        const source = "/static/568c5d417f7ef32ba3bb5b95bdf0f42d/80e3c/test.jpg";
        const filename = pluginFunctions.getFilename(source);
        expect(filename).toBe("test.jpg");
    });

    // getSizeOf
    it("should return image dimensions", () => {
        const image = __dirname + "/images/test.jpg";
        const imageSize = pluginFunctions.getSizeOf(image);
        expect(imageSize.width).toBe(600);
        expect(imageSize.height).toBe(400);
    });

    // getImgDimensions
    it("should return object with image width and height", () => {
        let {value} = nodeMock;
        const dom = new JSDOM(value, { contentType: "text/html" });
        const imageSizeSpy = jest.spyOn(pluginFunctions, "getSizeOf").mockImplementation(() => {return {width:600, height:400}});
        const imgSrcSpy = jest.spyOn(pluginFunctions, "getImgSrc");
        const findImagePathSpy = jest.spyOn(pluginFunctions, "findLocalImage").mockReturnValue("../images/test.jpg");
        const options = {setCssInWrapper: true, alignedImageWidth: 300};
        pluginFunctions.setPluginOptions(options);
        const dimensions = pluginFunctions.getImgDimensions(dom);
        expect(imageSizeSpy).toHaveBeenCalled();
        expect(imgSrcSpy).toHaveBeenCalled();
        expect(findImagePathSpy).toHaveBeenCalled();
        expect(dimensions).toEqual(
            expect.objectContaining({width: 300, height: 200 })
        );
        findImagePathSpy.mockRestore();
        imageSizeSpy.mockRestore();
    });

    // getImageByFilename
    it("should return absolute path to image file", () => {
        pluginFunctions.setFiles(filesMock);
        const filename = "test.jpg";
        const file = pluginFunctions.getImageByFilename(filename);
        expect(file).toBeTruthy();
        expect(file.base).toBe("test.jpg");
    });

    it("should return null if no image file is found", () => {
        pluginFunctions.setFiles(filesMock);
        const filename = "failedTest.jpg"
        const file = pluginFunctions.getImageByFilename(filename);
        expect(file).toEqual(
            expect.arrayContaining([])
        );
    });

    // findLocalImg
    it("should return absolute path to local image file", () => {
        pluginFunctions.setFiles(filesMock);
        const source = "/images/test.jpg";
        const filePath = pluginFunctions.findLocalImage(source);
        expect(filePath).toBe('/images/test.jpg');
    });

    it("should return null if no local image file found", () => {
        pluginFunctions.setFiles(filesMock);
        const source = "/images/failedTest.jpg"
        const filePath = pluginFunctions.findLocalImage(source);
        expect(filePath).toBeFalsy();
    });

    // setCSS
    it("should use ast attribute dimensions to set width and height style in wrapper", () => {
        let {type, value, position, ...attributes} = nodeMock;
        const dom = new JSDOM(value, { contentType: "text/html" });
        const imgWrapper = dom.window.document.getElementsByClassName("gatsby-resp-image-wrapper")[0];
        const imgDimensionsSpy = jest.spyOn(pluginFunctions, "getImgDimensions");
        pluginFunctions.setCSS(imgWrapper, dom, attributes);
        expect(imgWrapper.style.width).toBe("600px");
        expect(imgWrapper.style.height).toBe("400px");
        expect(imgDimensionsSpy).not.toHaveBeenCalled();
        imgDimensionsSpy.mockRestore();
    });

    it("should calculate and set width and height in wrapper if ast attributes aren't set", () => {
        let {type, value, position, ...attributes} = nodeImageAttributesMock;
        const dom = new JSDOM(value, { contentType: "text/html" });
        const imgWrapper = dom.window.document.getElementsByClassName("gatsby-resp-image-wrapper")[0];
        const imgDimensionsSpy = jest.spyOn(pluginFunctions, "getImgDimensions");
        pluginFunctions.setCSS(imgWrapper, dom, attributes);
        expect(imgDimensionsSpy).toHaveBeenCalledTimes(2);
        expect(imgWrapper.style.width).toBe("600px");
        expect(imgWrapper.style.height).toBe("400px");
        imgDimensionsSpy.mockRestore();
    });

    // insertWrapperAttributes
    it("should call setAttribute", () => {

    });

    it("should call setCSS if setCssInWrapper pluginOption is true", () => {

    });

    it("should update AST", () => {

    });
});