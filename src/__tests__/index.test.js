const { iteratee } = require('lodash');
const plugin = require('../index');
const {mockAst, filesMock} = require('../__mocks__/ast.mocks');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe("AST visit test", () => {

    it("should insert attributes into wrapper", done => {
        const pluginOptions = {setCssInWrapper: true, alignedImageWidth: 300};
        const files = filesMock;
        files[0].absolutePath = __dirname + "/images/test.jpg";
        const ast = {markdownAST: mockAst, files: files};
        const newAst = plugin(ast, pluginOptions);
        console.log(newAst);
        const {type, value, position, ...attributes} = newAst.children[0];
        const dom = new JSDOM(value, { contentType: "text/html" });
        const imgWrapper = dom.window.document.getElementsByClassName("gatsby-resp-image-wrapper")[0];
        expect(imgWrapper.style.width).toBe("300px");
        expect(imgWrapper.style.height).toBe("200px");
        expect(imgWrapper.dataset.width).toBe("300");
        expect(imgWrapper.dataset.height).toBe("200");
        expect(imgWrapper.dataset.align).toBe("left");
        done();
    })

})