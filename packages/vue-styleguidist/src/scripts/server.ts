import { StyleGuidistConfigObject } from 'types/StyleGuide'
import createServer from './create-server'

export default function server(config: StyleGuidistConfigObject, callback: () => void) {
	const env = 'development'
	const serverInfo = createServer(config, env)

	serverInfo.app.listen(config.serverPort, config.serverHost, callback)

	return serverInfo
}
