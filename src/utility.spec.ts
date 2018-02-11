import * as assert from 'assert'

import { get_html, URL_constructor } from './utility'

describe('URL_constructor', function () {
    it('basic test', async function () {
        const mock = '李克强'
        const result = URL_constructor(mock)
        assert.equal('https://baike.baidu.com/item/%E6%9D%8E%E5%85%8B%E5%BC%BA?force=1', result)
    })
})

describe('Get HTML', function () {
    this.slow(5000)
    this.timeout(10000)
    it('should return None if url is not of baike content', async function () {
        const mock_url = 'https://baike.baidu.com/item/%e6%9b%b2%e7%9a%84%e6%ad%8c?force=1'
        const html = await get_html(mock_url)
        assert(html.isEmpty())
    })
    it('should return Some if url is of baike content', async function () {
        const mock_url = 'https://baike.baidu.com/item/%E6%9D%8E%E5%85%8B%E5%BC%BA?force=1'
        const html = await get_html(mock_url)
        assert(html.nonEmpty())
    })
})
