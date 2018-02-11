import axios from 'axios'
import * as Cheerio from 'cheerio'
import { Option } from 'funfix-core'

export function URL_constructor(name: string): string {
    const result = `https://baike.baidu.com/item/${encodeURIComponent(name)}?force=1`
    return result
}

export async function get_html(url: string): Promise<Option<CheerioStatic>> {
    const { data, request } = await axios.get(url)
    const item_url = request.res.responseUrl
    if (item_url !== 'https://baike.baidu.com/error.html') {
        const $ = Cheerio.load(data)
        return Option.of($)
    } else {
        return Option.none()
    }
}
