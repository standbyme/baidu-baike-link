import { Either, Option } from 'funfix-core'

import { get_html, URL_constructor } from './utility'

function isContains(str: string, substr: string): boolean {
    return str.indexOf(substr) >= 0
}

export function is_one(name: string, original_html: CheerioStatic): boolean {
    return !isContains(original_html('title').text(), `${name}（${name}）`)
}

export function get_links(original_html: CheerioStatic): string[] {
    const result = original_html('.para-list').find('a').map(function () {
        return original_html(this).attr('href')
    }).get().map(l => `https://baike.baidu.com${l}`)
    return result
}
