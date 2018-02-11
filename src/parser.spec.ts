import * as assert from 'assert'

import { is_one } from './parser'
import { get_html } from './utility'

describe('One or Many', function () {
    it('basic test', async function () {
        const html = (await get_html('https://baike.baidu.com/item/%E6%9D%8E%E5%85%8B%E5%BC%BA?force=1')).get()
        assert(!is_one('李克强', html))
    })
    it('basic test', async function () {
        const html = (await get_html('https://baike.baidu.com/item/%E9%99%86%E5%8A%B1%E6%88%90?force=1')).get()
        assert(is_one('陆励成', html))
    })
})
