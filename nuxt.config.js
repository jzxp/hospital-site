module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'yyt-site',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '一约通' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins:[
    { src: '~/plugins/plugin.js', ssr: false }
  ],
  axios: {
    prefix: '/api',
    proxy: true,
  },
  proxy: { //配置代理服务器来解决跨域问题
    "/api" : {
        target: 'http://localhost:7610/', //配置要替换的后台接口地址
        ws: true,
        changOrigin: true, //配置允许改变Origin
        pathRewrite: {
            "^/api": " "
        }
    }
}
}

