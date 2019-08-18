declare module 'glogg' {
	interface GloggLogger {
		debug(msg: string): void
		info(msg: string): void
		warn(msg: string): void
		error(msg: string): void
		on(event: string | symbol, listener: (...args: any[]) => void): void
	}
	function getLogger(namespace: string): GloggLogger
	export = getLogger
}

declare module 'lru-cache' {
	class LRUCache {
		constructor(num: number)
		get(key: string): any
		set(key: string, obj: any): void
	}
	export = LRUCache
}

declare module 'hash-sum' {
	function makehash(key: any): string
	export = makehash
}
