import webpack from 'webpack'
import { StyleGuidistConfigObject } from 'types/StyleGuide'
import makeWebpackConfig from './make-webpack-config'

export default function build(config: StyleGuidistConfigObject, handler: webpack.Compiler.Handler) {
	return webpack(makeWebpackConfig(config, 'production'), (err, stats) => {
		// require('fs').writeFileSync('stats.json', JSON.stringify(stats.toJson()));
		handler(err, stats)
	})
}
