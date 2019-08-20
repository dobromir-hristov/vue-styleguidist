import WebpackDevServer from 'webpack-dev-server'
import { ComponentDoc, PropDescriptor } from 'vue-docgen-api'
import { Configuration } from 'webpack'
import { ProcessedSection, Section } from './Section'
import { EXPAND_MODE } from './enums'

export interface StyleGuidistConfigObject {
	sections?: Section[]
	renderRootJsx?: string
	skipComponentsWithoutExample?: boolean
	updateDocs?(doc: ComponentDoc, file: string): ComponentDoc
	defaultExample: string
	getExampleFilename?(file: string): string
	sortProps?(props: PropDescriptor[]): { [key: string]: PropDescriptor }
	propsParser?(file: string): ComponentDoc
	jsxInComponents?: boolean
	contextDependencies?: string[]
	printBuildInstructions?(config: StyleGuidistConfigObject): void
	printServerInstructions?(config: StyleGuidistConfigObject, options: { isHttps: boolean }): void
	showUsage?: boolean
	components?: string
	highlightTheme?: { theme: string }
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
	showCode?: boolean
	verbose?: boolean
	minimize?: boolean
	require: string[]
	webpackConfig: Configuration
	editorConfig: {
		theme: string
	}
	mountPointId: string
	template: string
	styleguidistDir?: string
	configureServer?: (server: WebpackDevServer, env: string) => string
	dangerouslyUpdateWebpackConfig?(
		config: Configuration,
		env: 'development' | 'production' | 'none'
	): Configuration
	logger?: {
		info(message: string): void
		warn(message: string): void
		debug(message: string): void
	}
}

export interface StyleGuideObject {
	sections: ProcessedSection[]
	config: StyleGuidistConfigObject
	renderRootJsx: any
	welcomeScreen: any
	patterns: any
}
