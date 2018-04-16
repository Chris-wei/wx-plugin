Component({
    properties : {
        region : {
            type : Array ,
            value: ['北京市', '北京市', '东城区']
        }
    },
    data: {
        
    },
    methods : {
        bindRegionChange(e){
            this.setData({
                region: e.detail.value 
            })
            // 触发回调
            this.triggerEvent("changeEvent", { region: this.data.region})
        }
    }
})
