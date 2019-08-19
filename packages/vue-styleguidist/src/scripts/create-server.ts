import webpack, { Configuration } from 'webpack'
import WebpackDevServer, { Configuration as ServerConfiguration } from 'webpack-dev-server'
import merge from 'webpack-merge'
import { StyleGuidistConfigObject } from 'types/StyleGuide'
import makeWebpackConfig from './make-webpack-config'

export default function createServer(
	config: StyleGuidistConfigObject,
	env: 'development' | 'production' | 'none'
) {
	const webpackConfig: Configuration = makeWebpackConfig(config, env)
	const webpackDevServerConfig: ServerConfiguration = merge(
		{
			noInfo: true,
			compress: true,
			clientLogLevel: 'none',
			hot: true,
			quiet: true,
			watchOptions: {
				ignored: /node_modules/
			},
			watchContentBase: config.assetsDir !== undefined,
			stats: webpackConfig.stats || {}
		},
		webpackConfig.devServer,
		{
			contentBase: config.assetsDir
		}
	)

	const compiler = webpack(webpackConfig)
	const devServer = new WebpackDevServer(compiler, webpackDevServerConfig)

	// User defined customizations
	if (config.configureServer) {
		config.configureServer(devServer.app, env)
	}

	return { app: devServer, compiler }
}
