const http=(url='',data={})=>{
    let baseUrl='https://api-survey.ibaizhi.com/api/services/wx'//'https://域名/api/services/wx'
    return new Promise((resolve, reject)=>{
        console.log(wx.getStorageSync('token'))
        wx.request({
            url: baseUrl+url, 
            data: data,
            method:'POST',
            header: {
                'Content-Type': 'application/json', // 默认值
                'Authorization':wx.getStorageSync('token')?wx.getStorageSync('token'):''
            },
            success: (res)=> {
                resolve(res)
                if(res.statusCode==200&&!res.data.success){
                    wx.showToast({
                        title: res.data.error.message,
                        icon: 'none',
                        duration: 2000
                    })
                }
                if(res.statusCode!=200){
                    wx.showToast({
                        title: '服务器错误：'+res.statusCode,
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