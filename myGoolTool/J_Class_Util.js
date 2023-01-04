/**
 * URLにアクセスしたときに表示するhtmlファイル名
 */

function doGet() {
  var htmlOutput = HtmlService.createTemplateFromFile("index").evaluate();
  htmlOutput
    .setTitle('DashBoard')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  return htmlOutput;
}


function ViewComponent(pathName) {
  return HtmlService.createHtmlOutputFromFile(pathName).getContent();
}