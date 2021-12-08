module.exports = {
    devServer: {
      proxy: {
        '/':{
        //   "target":'http://openapi.molit.go.kr:8081',
          "pathRewrite":{'^/':''},
          "changeOrigin":true,
          "secure":false
        }
      }
    }
  }