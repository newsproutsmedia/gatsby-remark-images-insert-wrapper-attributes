const pluginFunctions = require('../functions');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { nodeMock, nodeCaptionMock, nodeImageAttributesMock, filesMock } = require('../__mocks__/ast.mocks');


describe("Functions Tests", () => {

    const clearPluginFunctionsProperties = () => {
        delete pluginFunctions.pluginOptions;
        delete pluginFunctions.setCssInWrapper;
        delete pluginFunctions.alignedImageWidth;
        delete pluginFunctions.files;
        pluginFunctions.errorMessages = {};
    };

    beforeEach(() => {
        clearPluginFunctionsProperties();
        jest.clearAllMocks();
    });

    // setPluginOptions
    it("should set plugin options in functions object", done => {
        const options = {setCssInWrapper: false, alignedImageWidth: 500};
        pluginFunctions.setPluginOptions(options);
        expect(pluginFunctions.setCssInWrapper).toBeFalsy();
        expect(pluginFunctions.alignedImageWidth).toBe(500);
        done();
    });

    it("should set default plugin options if none are passed", done => {
        const options = {};
        pluginFunctions.setPluginOptions(options);
        expect(pluginFunctions.setCssInWrapper).toBeTruthy();
        expect(pluginFunctions.alignedImageWidth).toBe(300);
        done();
    });

    // setFiles
    it("should set files property in functions object", done => {
        const files = {file: "test.jpg"};
        pluginFunctions.setFiles(files);
        expect(pluginFunctions.files).toEqual(
            expect.objectContaining({
                file: "test.jpg"
            })
        )
        done();
    });

    // getPluginOption
    it("should return property value of pluginOptions", done => {
        const options = {setCssInWrapper: true, alignedImageWidth: 300};
        pluginFunctions.setPluginOptions(options);
        expect(pluginFunctions.getPluginOption("setCssInWrapper")).toBeTruthy();
        done();
    });

    it("should return default value if pluginOption not found", done => {
        const options = {};
        pluginFunctions.setPluginOptions(options);
        expect(pluginFunctions.getPluginOption("setCssInWrapper")).toBeTruthy();
        expect(pluginFunctions.getPluginOption("alignedImageWidth")).toBe(300);
        done();
    });

    it("should return null if no pluginOption found", done => {
        const options = {setCssInWrapper: true, alignedImageWidth: 300};
        pluginFunctions.setPluginOptions(options);
        expect(pluginFunctions.getPluginOption("test")).toBeFalsy();
        done();
    });

    // hasImage
    it("should return true if value begins with <img", done => {
        const nodeValue = `<img src="test.jpg" title="test" alt="test"/>`;
        expect(pluginFunctions.hasImage(nodeValue)).toBeTruthy();
        done();
    });

    it("should return false if value does not begin with <img", done => {
        const nodeValue = `<div>Test</div>`;
        expect(pluginFunctions.hasImage(nodeValue)).toBeFalsy();
        done();
    });

    // getWrapper
    it("should return caption element if it exists", done => {
        let {value} = nodeCaptionMock;
        const dom = new JSDOM(value, { contentType: "text/html" });
        const imgCaption = dom.window.document.getElementsByClassName("gatsby-resp-image-figure")[0];
        const wrapper = pluginFunctions.getWrapper(dom);
        expect(wrapper).toBe(imgCaption);
        done();
    });

    it("should return wrapper element if caption element does not exist", done => {
        let {value} = nodeMock;
        const dom = new JSDOM(value, { contentType: "text/html" });
        const imgWrapper = dom.window.document.getElementsByClassName("gatsby-resp-image-wrapper")[0];
        const wrapper = pluginFunctions.getWrapper(dom);
        expect(wrapper).toBe(imgWrapper);
        done();
    });

    // setAttribute
    it("should set attribute in wrapper", done => {
        let {value} = nodeMock;
        let testKey = "testKey";
        let testValue = "testValue"
        const dom = new JSDOM(value, { contentType: "text/html" });
        const wrapper = dom.window.document.getElementsByClassName("gatsby-resp-image-wrapper")[0];
        pluginFunctions.setAttribute(wrapper, testKey, testValue);
        expect(wrapper.dataset.testKey).toBe("testValue");
        done();
    });

    // getImgSrc
    it("should return image source", done => {
        let {value} = nodeMock;
        const dom = new JSDOM(value, { contentType: "text/html" });
        const source = pluginFunctions.getImgSrc(dom);
        expect(source).toBe("/static/568c5d417f7ef32ba3bb5b95bdf0f42d/80e3c/test.jpg");
        done();
    });

    it("should return null if no image source is found", done => {
        let value = `<div id="test">No Image Test</div>`;
        const dom = new JSDOM(value, { contentType: "text/html" });
        const imgSrc = pluginFunctions.getImgSrc(dom);
        expect(imgSrc).toBe(null);
        done();
    });

    // getFilename
    it("should return file name", done => {
        const source = "/static/568c5d417f7ef32ba3bb5b95bdf0f42d/80e3c/test.jpg";
        const filename = pluginFunctions.getFilename(source);
        expect(filename).toBe("test.jpg");
        done();
    });

    it("should return null if no src is passed to function", done => {
        const src = null;
        const filename = pluginFunctions.getFilename(src);
        expect(filename).toBe(null);
        done();
    });

    // getSizeOf
    it("should return image dimensions", done => {
        const image = __dirname + "/images/test.jpg";
        const imageSize = pluginFunctions.getSizeOf(image);
        expect(imageSize.width).toBe(600);
        expect(imageSize.height).toBe(400);
        done();
    });

    // getImgDimensions
    it("should return object with image width and height", done => {
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
        imgSrcSpy.mockRestore();
        done();
    });

    it("should return empty object if no image is found", done => {
        let value = `<div id="test">No Image Test</div>`;
        const dom = new JSDOM(value, { contentType: "text/html" });
        const imgDimensions = pluginFunctions.getImgDimensions(dom);
        expect(imgDimensions).toEqual(
            expect.objectContaining({})
        );
        done();
    })

    // getImageByFilename
    it("should return absolute path to image file", done => {
        pluginFunctions.setFiles(filesMock);
        const filename = "test.jpg";
        const file = pluginFunctions.getImageByFilename(filename);
        expect(file).toBeTruthy();
        expect(file.base).toBe("test.jpg");
        done();
    });

    it("should return empty array if no image file is found", done => {
        pluginFunctions.setFiles(filesMock);
        const filename = "failedTest.jpg"
        const file = pluginFunctions.getImageByFilename(filename);
        expect(file).toEqual(
            expect.arrayContaining([])
        );
        done();
    });

    it("should return empty array if files array is empty", done => {
    pluginFunctions.setFiles([]);
    const filename = "failedTest.jpg"
    const file = pluginFunctions.getImageByFilename(filename);
        expect(file).toEqual(
            expect.arrayContaining([])
        );
        done();
    });

    // findLocalImg
    it("should return absolute path to local image file", done => {
        pluginFunctions.setFiles(filesMock);
        const source = "/images/test.jpg";
        const filePath = pluginFunctions.findLocalImage(source);
        expect(filePath).toBe('/images/test.jpg');
        done();
    });

    it("should return null if no local image file found", done => {
        pluginFunctions.setFiles(filesMock);
        const source = "/images/failedTest.jpg"
        const filePath = pluginFunctions.findLocalImage(source);
        expect(filePath).toBeFalsy();
        done();
    });

    // setCSS
    it("should use ast attribute dimensions to set width and height style in wrapper", done => {
        pluginFunctions.setFiles(filesMock);
        pluginFunctions.files[0].absolutePath = __dirname + "/images/test.jpg";
        let {type, value, position, ...attributes} = nodeMock;
        const dom = new JSDOM(value, { contentType: "text/html" });
        const imgWrapper = dom.window.document.getElementsByClassName("gatsby-resp-image-wrapper")[0];
        const imgDimensionsSpy = jest.spyOn(pluginFunctions, "getImgDimensions").mockReturnValue({width: 300, height: 200});
        pluginFunctions.setCSS(imgWrapper, dom, attributes);
        expect(imgWrapper.style.width).toBe("600px");
        expect(imgWrapper.style.height).toBe("400px");
        imgDimensionsSpy.mockRestore();
        done();
    });

    it("should calculate and set width and height in wrapper if ast attributes aren't set", done => {
        pluginFunctions.setFiles(filesMock);
        pluginFunctions.files[0].absolutePath = __dirname + "/images/test.jpg";
        let {type, value, position, ...attributes} = nodeImageAttributesMock;
        const dom = new JSDOM(value, { contentType: "text/html" });
        const imgWrapper = dom.window.document.getElementsByClassName("gatsby-resp-image-wrapper")[0];
        const imgDimensionsSpy = jest.spyOn(pluginFunctions, "getImgDimensions").mockReturnValue({width: 600, height: 400});
        pluginFunctions.setCSS(imgWrapper, dom, attributes);
        expect(imgDimensionsSpy).toHaveBeenCalledTimes(1);
        expect(imgWrapper.style.width).toBe("600px");
        expect(imgWrapper.style.height).toBe("400px");
        imgDimensionsSpy.mockRestore();
        done();
    });

    it("should set error message if width/height not found", done => {
        pluginFunctions.setFiles(filesMock);
        pluginFunctions.files[0].absolutePath = __dirname + "/images/test.jpg";
        let {type, value, position, ...attributes} = nodeImageAttributesMock;
        const dom = new JSDOM(value, { contentType: "text/html" });
        const imgWrapper = dom.window.document.getElementsByClassName("gatsby-resp-image-wrapper")[0];
        const imgDimensionsSpy = jest.spyOn(pluginFunctions, "getImgDimensions").mockReturnValue({});
        pluginFunctions.setCSS(imgWrapper, dom, attributes);
        expect(pluginFunctions.errorMessages.setCSS).toBe("No width or height found");
        imgDimensionsSpy.mockRestore();
        done();
    })

    // insertWrapperAttributes
    it("should call setAttribute", done => {
        const options = {setCssInWrapper: true, alignedImageWidth: 300};
        pluginFunctions.setPluginOptions(options);
        pluginFunctions.setFiles(filesMock);
        pluginFunctions.files[0].absolutePath = __dirname + "/images/test.jpg";
        const setAttributeSpy = jest.spyOn(pluginFunctions, "setAttribute");
        pluginFunctions.insertWrapperAttributes(nodeMock);
        expect(setAttributeSpy).toHaveBeenCalled();
        setAttributeSpy.mockRestore();
        done();
    });

    it("should call setCSS if setCssInWrapper pluginOption is true", done => {
        const options = {setCssInWrapper: true, alignedImageWidth: 300};
        pluginFunctions.setPluginOptions(options);
        pluginFunctions.setFiles(filesMock);
        pluginFunctions.files[0].absolutePath = __dirname + "/images/test.jpg";
        const setCssSpy = jest.spyOn(pluginFunctions, "setCSS");
        pluginFunctions.insertWrapperAttributes(nodeMock);
        expect(setCssSpy).toHaveBeenCalled();
        setCssSpy.mockRestore();
        done();
    });

    it("should add setCss property to errorMessages if setCssInWrapper is falsy", done => {
        const options = {setCssInWrapper: false, alignedImageWidth: 300};
        pluginFunctions.setPluginOptions(options);
        pluginFunctions.setFiles(filesMock);
        pluginFunctions.files[0].absolutePath = __dirname + "/images/test.jpg";
        pluginFunctions.insertWrapperAttributes(nodeMock);
        expect(pluginFunctions.errorMessages.setCss).toBe("setCssInWrapper set to false");
        done();
    });

    it("should add wrapper property to errorMessages if wrapper not found", done => {
        const options = {setCssInWrapper: false, alignedImageWidth: 300};
        pluginFunctions.setPluginOptions(options);
        pluginFunctions.setFiles(filesMock);
        pluginFunctions.files[0].absolutePath = __dirname + "/images/test.jpg";
        jest.spyOn(pluginFunctions, "getWrapper").mockReturnValue(false);
        pluginFunctions.insertWrapperAttributes(nodeMock);
        expect(pluginFunctions.errorMessages.wrapper).toBe("No wrapper found");
        done();
    });
});