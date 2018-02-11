import { Either, Option } from 'funfix-core'

import { get_links, is_one } from './parser'
import { get_html, URL_constructor } from './utility'

function helper(name: string, url: string, html: CheerioStatic): Either<string[], string> {
    if (is_one(name, html)) return Either.right(url)
    else return Either.left(get_links(html))
}

export default async function (name: string): Promise<Option<Either<string[], string>>> {
    const url = URL_constructor(name)
    const html__opt = await get_html(url)
    return html__opt.map(html => helper(name, url, html))
}
