const visit = require("unist-util-visit");
const pluginFunctions = require('./functions');

module.exports = ({ files, markdownAST }, pluginOptions) => {

  // Set up constants
  pluginFunctions.setFiles(files);
  pluginFunctions.setPluginOptions(pluginOptions);

  // Check that the html node has an image element
  visit(markdownAST, "html", node => {
    let remarkImgHtml = node.value.toString();
    pluginFunctions.hasImage(remarkImgHtml) && pluginFunctions.insertWrapperAttributes(node);
  })


  return markdownAST;
}