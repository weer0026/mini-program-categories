const fs = require("fs");
const path = require("path");
const getPath = function(dir) {
  return path.join(__dirname, "../data/", dir);
};
var categories = JSON.parse(fs.readFileSync(getPath("categories.json")))
  .categories;
var formatCategories = {};
var categoriesMap = {};
categories.forEach(element => {
  if (element.id && element.name) {
    categoriesMap[element.id] = element.name;
  }
  if (element.level && element.level === 1) {
    formatCategories[element.id] = element.children;
  }
});
fs.writeFileSync(getPath("map.json"), JSON.stringify(categoriesMap, null, 2));
fs.writeFileSync(
  getPath("struct.json"),
  JSON.stringify(formatCategories, null, 2)
);
