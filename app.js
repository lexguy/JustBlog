/**
 created by Lex. 2019/9/24

 入口文件
 **/


let express = require('express');
let swig = require('swig');


//创建app应用   NodeJS   Http.createServer()
let app = express();

//配置模板

//定义当前应用所使用的模板引擎

//engine()
//参数1 模板引擎的名称，模板引擎的后缀
//参数2 解析处理模板内容的方法
app.engine('html', swig.renderFile);

//设置模板文件的存放目录，第一个参数是 views ,第二个参数是目录
app.set('views', './views')

//注册所使用的模板引擎
//第一个参数固定 ，第二个必须和app.engine中的名称一致
app.set('view engine', 'html');


//开发过程取消模板缓存
swig.setDefaults({
  //cache 默认是true ，已经加载过的模板文件不会重新解析，设置为false则不会缓存，每次重新解析
  cache: false
})

/**
 * 首页
 *
 * req   request对象
 * res   response对象
 * next  函数
 * */
app.get('/', function (erq, res, next) {

  // res.send('<h1>My first blog</h1>')

  //读取views下的指定文件，解析并返回给客户端
  //param1   模板的文件，相对于views目录
  //param2   传递给模板使用的数据
  res.render('index');

})


//监听请求
app.listen(8181);

