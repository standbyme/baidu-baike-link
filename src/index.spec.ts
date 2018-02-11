import * as assert from 'assert'

import index from './index'

describe('One or Many', function () {
    it('should return None when it does not exist', async function () {
        const result = await index('表格存储')
        assert(result.isEmpty())
    })
    it('should return Some Left when it exists and has many links', async function () {
        const result__opt = await index('韩庚')
        assert(result__opt.nonEmpty())
        const result = result__opt.get()
        assert(result.isLeft())
        // @ts-ignore
        const left: string[] = result.swap().get()
        assert.equal(left.length, 2)
        assert.equal(left[0], 'https://baike.baidu.com/item/%E9%9F%A9%E5%BA%9A/5909')
    })
    it('should return Some Right when it exists and has one link', async function () {
        //
        const result__opt = await index('百度百科')
        assert(result__opt.nonEmpty())
        const result = result__opt.get()
        assert(result.isRight())
        const right = result.get()
        assert.equal(right, 'https://baike.baidu.com/item/%E7%99%BE%E5%BA%A6%E7%99%BE%E7%A7%91?force=1')
    })
})
