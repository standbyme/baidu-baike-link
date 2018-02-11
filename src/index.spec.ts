import * as assert from 'assert'

import index from './index'

describe('Index', function () {
    it('should return [] when it does not exist', async function () {
        const result = await index('表格存储')
        assert(result.length === 0)
    })
    it('has many links', async function () {
        const result = await index('韩庚')
        assert.equal(result.length, 2)
        assert.equal(result[0], 'https://baike.baidu.com/item/%E9%9F%A9%E5%BA%9A/5909')
    })
    it('should return Some Right when it exists and has one link', async function () {
        //
        const result = await index('百度百科')
        assert(result.length === 1)
        assert.equal(result[0], 'https://baike.baidu.com/item/%E7%99%BE%E5%BA%A6%E7%99%BE%E7%A7%91?force=1')
    })
})
