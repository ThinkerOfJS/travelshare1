let host = 'http://localhost:8081'; // 写死域名，方便后期更换域名
module.exports = {
    runtimeCompiler: true,
    devServer: {
        proxy: {
            '/api': {
                target: host,
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''  //通过pathRewrite重写地址，将前缀/api转为/
                }
            }
        }
    }
};
