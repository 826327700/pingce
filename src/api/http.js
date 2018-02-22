const http=(url='',data={})=>{
    let baseUrl='https://www.easy-mock.com/mock/5a869945ebe94f250bc0f872/api/services/wx'//'https://域名/api/services/wx'
    return new Promise((resolve, reject)=>{
        wx.request({
            url: baseUrl+url, 
            data: data,
            method:'POST',
            header: {
                'Content-Type': 'json', // 默认值
                'Authentication':wx.getStorageSync('token')?wx.getStorageSync('token'):''
            },
            success: (res)=> {
                resolve(res)
                if(!res.data.success){
                    wx.showToast({
                        title: res.data.error||"网络错误",
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