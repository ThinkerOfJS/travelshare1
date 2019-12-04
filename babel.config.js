module.exports = {
  presets: [
    '@vue/app'
  ],
    // 懒加载
    plugins: [
        ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
        }, 'vant']
    ]
};
