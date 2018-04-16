var api = require('./api/api.js')

// 获取设备信息
wx.getSystemInfo({
    success: function(res) {
        api.setSystemInfo(
            {
                model: res.model ,
                system: res.system
            }
        )
    },
})


module.exports = {
    getPluginInfo: api.getPluginInfo ,
    getSystemInfo: api.getSystemInfo
}