# 小程序服务类目数据

## 安装

`npm i mini-program-categories -D`



## 文件结构

`data/map.json` ID => 服务类目的映射。

`data/struct` 用 ID 表示层级结构，目前就两层，用来生成联动下拉框。

`scripts/createOptions.js` 根据 map 和 struct 来生成二级联动数据，目前的格式是 element-ui 的下拉框用的。

`scripts/parseCategories.js`该脚本是用来解析微信原始数据的，原始数据过大就不放上来了。

## 说明

收集这些数据是用来做第三方平台小程序自动审核，所以需要服务类目的名称和类目对应的ID，该数据是从微信端获取的 json 格式的数据解析来的，有变动的话会尽量更新。

