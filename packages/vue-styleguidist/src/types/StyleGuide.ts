import { Configuration } from 'webpack'
import { ProcessedSection } from './Section'
import { EXPAND_MODE } from './enums'

export interface StyleGuidistConfigObject {
	title?: string
	pagePerSection?: boolean
	locallyRegisterComponents?: boolean
	ignore?: string | string[]
	configDir: string
	usageMode: EXPAND_MODE
	exampleMode: EXPAND_MODE
	serverPort: number
	serverHost: string
	assetsDir: string
	styleguideComponents?: { [name: string]: string }
	simpleEditor?: boolean
	copyCodeButton?: boolean
	codeSplit?: boolean
	styleguidePublicPath?: string
	styleguideDir?: string
	verbose?: boolean
	minimize?: boolean
	require: string[]
	webpackConfig: Configuration
	editorConfig: {
		theme: string
	}
	mountPointId: string
	template: string
	dangerouslyUpdateWebpackConfig?: (
		config: Configuration,
		env: 'development' | 'production' | 'none'
	) => Configuration
}

export interface StyleGuideObject {
	sections: ProcessedSection[]
	config: StyleGuidistConfigObject
	renderRootJsx: any
	welcomeScreen: any
	patterns: any
}
