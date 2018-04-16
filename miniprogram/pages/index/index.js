var plugin = requirePlugin("myPlugin")
Page({
    data: {
        region: ['广东省', '广州市', '海珠区']
    },
    submit(){
        console.log(this.data.region)
    },
    changeEvent(e){
        console.log(e)
        this.setData({
            region : e.detail.region
        })
    },
    onLoad(){
        console.log(plugin.getPluginInfo())
        console.log(plugin.getSystemInfo())
    }
})