import Koa from 'koa';
import koaStatic from 'koa-static';
import Router from 'koa-router';
import Pug from 'koa-pug';
import bodyparser from 'koa-bodyparser';
import path from 'path';

let app = new Koa();
let router = new Router();
let pug = new Pug({viewPath: path.resolve(__dirname, 'views'), noCache: true});

pug.use(app);

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'local') {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack/webpack.dev.js');
  const {devMiddleware, hotMiddleware} = require('koa-webpack-middleware');
  const compiler = webpack(webpackConfig);
  app.use(devMiddleware(compiler, {noInfo: true, publicPath: '/'}));
  app.use(hotMiddleware(compiler, {}));
}

app.use(koaStatic(path.resolve(__dirname, './static'))).use(router.routes());

router.get('/', async (ctx) => {
	ctx.render('index', {title: 'my title'});
});

router.get('/api/data', async (ctx) => {
	ctx.status = 200;
  ctx.type = 'application/json';
  ctx.body = {name: 'zhangsan', age: 22, count: 888888888};
});

app.listen(7766);
