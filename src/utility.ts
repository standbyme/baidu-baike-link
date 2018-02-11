export function URL_constructor(name: string): string {
    const result = `https://baike.baidu.com/item/${encodeURIComponent(name)}?force=1`
    return result
}