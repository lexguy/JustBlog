/**
 created by Lex. 2019/9/24

 入口文件
 **/


let express = require('express');
let swig = require('swig');


//创建app应用   NodeJS   Http.createServer()
let app = express();

//设置静态文件托管

//当用户url以/public开始，直接返回dirname+'/public'下的文件
// app.use('/public', express.static(__dirname + '/public'));


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
// app.get('/', function (erq, res, next) {
//
//   // res.send('<h1>My first blog</h1>')
//
//   //读取views下的指定文件，解析并返回给客户端
//   //param1   模板的文件，相对于views目录
//   //param2   传递给模板使用的数据
//   res.render('index');
//
// })


//设置CSS文件
// app.get('/main.css', function (req, res, next) {
//   res.setHeader('content-type', 'text/css');
//   res.send("body {background:red;}")
// })


//根据不通功能划分模块

app.use('/admin', require('./routers/admin'));
app.use('/api', require('./routers/api'));
// app.use('/', require('./routers/main'))


//监听请求
app.listen(8181);


/**
 * 用户发送http请求 ->  url  -> 解析路由  ->  找到匹配规则  ->  执行指定的绑定函数，返回对应内容至用户
 *
 * /public 静态  直接读取指定目录下的文件，返回给用户
 *
 * 动态  ->  处理业务逻辑，加载模板，解析模板并返回数据到用户
 *
 *
 *
 * 使用 use 进行模块划分
 * */
