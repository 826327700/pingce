import http from './http.js'

//登录
export const wxlogin=(data,cb)=>{
    http('/auth/wxlogin',data)
    .then((res)=>{
        wx.setStorageSync('token', res.data.result.token)
        cb(res)
    })
    .catch((error)=>{

    })
}

//初始化问卷
export const getactivetest=(cb)=>{
    http('/test/getactivetest',{})
    .then((res)=>{
        cb(res)
    })
    .catch((error)=>{

    })
}

//开始问卷
export const starttest=(data,cb)=>{
    http('/test/starttest',data)
    .then((res)=>{
        cb(res)
    })
    .catch((error)=>{

    })
}

//提交问卷
export const committest=(data,cb)=>{
    http('/test/committest',data)
    .then((res)=>{
        cb(res)
    })
    .catch((error)=>{

    })
}

//提交姓名
export const saveuserinfo=(data,cb)=>{
    http('/test/saveuserinfo',data)
    .then((res)=>{
        cb(res)
    })
    .catch((error)=>{

    })
}