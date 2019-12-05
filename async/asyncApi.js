// request get 请求
const getData = (url, param) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: 'GET',
      data: param,
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}

// request post 请求
const postData = (url, param) => {
  return new Promise((resolve, reject) => {
    wx.request({
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      url: url,
      method: 'POST',
      data: param,
      success(res) {
        console.log(res)
        resolve(res)
      },
      fail(err) {
        console.log(err)
        reject(err)
      }
    })
  })
}
//选择图片
//count:最多可以选择的图片张数
//seizeType：orignal-》原图 compressed -》压缩图
//sourceType: 图片的来源  album->相册  camera照相机
const chooseImg = (count) => {
  return new Promise((resolve, reject) => {
    wx.chooseImage({
      count,
      seizeType: ['orignal', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        resolve(res.tempFilePaths);
      },
      fail(err) {
        console.log(err)
        reject(err)
      }
    })
  })
}
//上传文件
const uploadFile = (url, filePath, name, formData) => {
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url,
      filePath,
      name: 'file',
      formData,
      success(res) {
        var url = JSON.parse(res.data);
        resolve(url.data.url)//服务器返回真实路径
      }
    })
  })
}

// loading加载提示
const showLoading = () => {
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: '加载中...',
      mask: true,
      success(res) {
        console.log('显示loading')
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}

// 关闭loading
const hideLoading = () => {
  return new Promise((resolve) => {
    wx.hideLoading()
    console.log('隐藏loading')
    resolve()
  })
}

module.exports = {
  getData,
  postData,
  showLoading,
  hideLoading,
  uploadFile,
}