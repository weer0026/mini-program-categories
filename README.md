# mini-program-categroies

### 小程序服务类目数据

####结构

`data/map.json`  ID => 服务类目的映射。

`data/struct`  用ID表示层级结构，目前就两层，用来生成联动下拉框。

`scripts/createOptions.js` 根据map和struct来生成二级联动数据，目前的格式是element-ui的下拉框用的。

`scripts/parseCategories.js`该脚本是用来解析微信原始数据的，原始数据过大就不放上来了。







#### 说明

收集这些数据是用来做第三方平台小程序自动审核，所以需要服务类目的名称和类目，该数据是从微信端获取的json格式的数据解析来的，有变动的话会尽量更新。













