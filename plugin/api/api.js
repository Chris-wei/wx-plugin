
let systemInfo = null;

// 获取插件信息
function getPluginInfo() {
    return {
        name : 'regionPicker' ,
        version : '1.0.0' ,
        date : '2018-04-14'
    }
}

//设置设备信息
function setSystemInfo(value){
    systemInfo = value;
}

//获取设备信息
function getSystemInfo(){
    return systemInfo;
}

module.exports = {
    getPluginInfo ,
    getSystemInfo ,
    setSystemInfo
}