// 获取当前位置信息的方法
let getCurrentCityName = function () {
    return new Promise(function (resolve, reject) {
        let myCity = new BMap.LocalCity();
        console.log(myCity);
        // let myProvince = new BMap.LocalProvince;
        myCity.get(function (result) {
            resolve(result.name)
        });
        // myProvince.get(function (result) {
        //     console.log(result);
        //     resolve(result.name)
        // });
    })
};
export default getCurrentCityName;