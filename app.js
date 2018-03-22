import Koa from 'koa';
import KoaStatic from 'koa-static';
import Router from 'koa-router';
import Pug from 'koa-pug';
import bodyparser from 'koa-bodyparser';
import path from 'path';

let app = new Koa();
let router = new Router();
let pug = new Pug({
 	viewPath: path.resolve(__dirname, 'views'),
	noCache: true
});

pug.use(app);

if(!process.env.NODE_ENV || process.env.NODE_ENV === 'local') {
    const webpack = require('webpack');
    const webpackConfig = require('./webpack/webpack.dev.js');
    const {devMiddleware, hotMiddleware} = require('koa-webpack-middleware');
    const compiler = webpack(webpackConfig);
    app.use(devMiddleware(compiler, {noInfo: true, publicPath: '/'}));
    app.use(hotMiddleware(compiler, {}));
}

app.
  use(KoaStatic(path.resolve(__dirname, './static'))).
  use(router.routes());

router.get('/', async (ctx) => {
	ctx.render('index', {title: 'my title'});
});
app.listen(7766);
