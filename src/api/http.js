const http=(url='',data={})=>{
    let baseUrl='https://test-api-survey.ibaizhi.com/api/services/wx'//'https://域名/api/services/wx'
    return new Promise((resolve, reject)=>{
        wx.request({
            url: baseUrl+url, 
            data: data,
            method:'POST',
            header: {
                'Content-Type': 'application/json', // 默认值
                'Authentication':wx.getStorageSync('token')?wx.getStorageSync('token'):''
            },
            success: (res)=> {
                resolve(res)
                if(!res.data.success){
                    wx.showToast({
                        title: res.data.error.message||"网络错误",
                        icon: 'none',
                        duration: 2000
                    })
                }
            },
            fail:(error)=>{
                wx.showToast({
                    title: error.errMsg,
                    icon: 'none',
                    duration: 2000
                })
                reject(error)
                wx.hideLoading()
            }
        })
    })
}
export default http