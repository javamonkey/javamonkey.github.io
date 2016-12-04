//beetl、beetlsql 性能参数对比chartjs图表绘制
Chart.defaults.global.defaultFontFamily = 'PingFang SC,Microsoft YaHei';
Chart.defaults.global.tooltips.displayColors = false;
Chart.defaults.global.title.display = true;
Chart.defaults.global.title.fontSize = 18;
Chart.defaults.global.title.padding = 20;
Chart.defaults.global.title.fontStyle = 'normal';
Chart.defaults.global.legend.position = 'bottom';
Chart.defaults.global.legend.labels.usePointStyle = true;
new Chart('beetl', {type: 'bar',data: {labels: ['Beetl v2.7','Freemarker v2.3','Handlebars v4.0','Mustache v0.9','Rocker v0.1','Thymeleaf v3.0'],datasets: [{label: '每秒处理量',backgroundColor:'rgba(0,0,0,0.3)',data:  [42125.112914,13099.139808,15808.044125,17961.391809,33631.370722,4625.981276]}]},options: {title:{text: 'Beetl和国内外知名模板性能对比'},scales:{xAxes:[{gridLines:{display:false}}],yAxes:[{ticks:{stepSize:1e4,callback:function(val){return val>0?val/1e4+'W':val;}}}]}}});
new Chart('beetlsql', {type: 'line',data: {labels: ['开发效率','跨多数据库','维护性','系统启动耗时','错误提示','模型支持','学习曲线','对DBA友好','其他工具友好','性能','数据库主从','ORMapping'],datasets: [{label: 'beetlsql',borderColor:'#f6c12d',data:  [5,4.5,4.5,5,4,5,5,4.5,4,4,5,4]},{label: 'hibernate',borderColor:'#bcad7c',data:   [4,4,4,2,4,4,2,3,3,4,3,5]},{label: 'mybatis',borderColor:'#d20915',data:  [3.5,3,4.5,4,3,4.5,4,4,4,4,4,4]}]},options: {title:{text: 'BeetlSQL、Hibernate、MyBatis 12项综合性能对比'},scales:{yAxes:[{ticks:{min:1,callback:function(val){return val%1==0?val+'分':'';}}}]}}});
var rep = function(t,c){c=c||1;return new Array(~~c+1).join({b:'2b',e:'\\',t:'/',l:'_',s:'\n',q:' '}[t.substr(0,1)])}
console.log('q3l2q17l2q4l2sq2tqtlq3l3q3l3q3tqtq3tqtsqtql2qeqtqlqeqtqlqeqtql2eqtqtqstqtltqt2ql3t2ql3t2qtl2qtqtl2sel4tqel3tqel3tqel3tqel3tsq3l2q17l2q4l2q17l2sq2tqtlq3l3q3l3q3tqtq3tqtq3l5ql3q4tqtsqtql2qeqtqlqeqtqlqeqtql2eqtqtq3tql3t2ql2qeqtqtstqtltqt2ql3t2ql3t2qtl2qtqtl2qtl2q2t2qtltqt2qtl2sel4tqel3tqel3tqel3tqel3t2l4tqel2q2tqel3tsq39tlt'.replace(/b(\d*)/g,rep).replace(/e(\d*)/g,rep).replace(/t(\d*)/g,rep).replace(/l(\d*)/g,rep).replace(/s(\d*)/g,rep).replace(/q(\d*)/g,rep))