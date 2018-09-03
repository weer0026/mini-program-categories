const fs = require("fs");
const path = require("path");
const getPath = function(dir) {
  return path.join(__dirname, "../data/", dir);
};
var map = JSON.parse(fs.readFileSync(getPath("map.json")));
var struct = JSON.parse(fs.readFileSync(getPath("struct.json")));
var options = [];

for (index in struct) {
  var tem = {};
  tem = {
    value: index,
    label: map[index],
    children: []
  };
  for (id in struct[index]) {
    tem["children"].push({
      value: struct[index][id],
      label: map[struct[index][id]]
    });
  }
  options.push(tem);
}
fs.writeFileSync(
  getPath("element-options.json"),
  JSON.stringify(options, null, 2)
);
fs.writeFileSync(
  path.join(__dirname, "../index.js"),
  "module.exports = " + JSON.stringify(options, null, 2)
);
