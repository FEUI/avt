import Koa from 'koa'
import webpack from 'webpack'
import convert from 'koa-convert'
import { webpackDevMiddleware } from 'koa-webpack-middleware'
import WebpackConfig from './webpack.config'

const compiler = webpack(WebpackConfig)
const app = new Koa()

app.use(convert(webpackDevMiddleware(compiler, {
  publicPath: '/__build__/',
  stats: {
    colors: true
  }
})))

app.listen(3000, function () {
  console.log('Example app listening on http://localhost:3300, Ctrl+C to stop!\n');
})
