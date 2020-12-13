const {
    override,
    fixBabelImports,
    addWebpackResolve,
    addWebpackAlias
} = require('customize-cra')

const path = require('path')

module.exports = override(
    //按需加载
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),

    //resolve
    addWebpackResolve({
        extensions: [".js", ".json", ".jsx"]
    }),

    //给文件夹取别名
    addWebpackAlias({
        "@": path.resolve(__dirname, 'src'),
        "assets": path.resolve(__dirname, 'src/assets')
    })
)
