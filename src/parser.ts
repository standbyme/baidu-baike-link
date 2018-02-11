function isContains(str: string, substr: string): boolean {
    return str.indexOf(substr) >= 0
}

export function is_one(name: string, original_html: CheerioStatic): boolean {
    return !isContains(original_html('title').text(), `${name}（${name}）`)
}
