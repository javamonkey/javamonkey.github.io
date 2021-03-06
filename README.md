###Beetl官网改版计划（长期）
---
- [ ] 重新设计整体风格，加入适当CSS3动画提升用户体验
- [x] 支持响应式，适应不同屏幕以及手机等移动设备访问
- [x] 改造文档页面，直接动态加载md渲染，重写样式和代码着色
- [x] 改造文档页支持浮动导航和页面滚动导航监听
- [x] 改造在线体验页面，可做弹层
- [ ] 官网主页i18n（vuejs前端实现i18n）
- [ ] 其他改进，如动态加载github issue，加入多说等社会化评论？

---

####更新历史记录

-   2016年12月13日

    【在线体验】全新的在线体验页面（网页样式提取自[Primer](https://github.com/primer/primer-css)），以标签形式显示运行结果

    >   临时屏蔽[新的在线体验页面](https://javamonkey.github.io/online.html)
    >
    >   因为Github默认域名为HTTPS，在线演示提交结果页面为HTTP，导致无法直接加载
    >
    >   后续绑定自定义CNAME转为HTTP协议或者演示页面上HTTPS协议后再启用新的在线演示

-   2016年12月08日

    【文档页】提升部分浏览器的兼容性，优化iPad浏览器横屏时侧边栏的滚动效果

    【文档页】添加手机等窄屏设备的顶部导航banner

    【文档页】添加IE8及以下浏览器访问时的消息提示

-   2016年12月07日

    【文档页】页面重新改造，以后仅需维护**guide/beetl.md**文件和**guide/beetlsql.md**文件，无需再手动生成HTML文件了。