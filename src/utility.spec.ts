import * as assert from 'assert'
import { URL_constructor } from './utility'

describe('URL_constructor', function () {
    it('basic test', async function () {
        const mock = '李克强'
        const result = URL_constructor(mock)
        assert.equal('https://baike.baidu.com/item/%E6%9D%8E%E5%85%8B%E5%BC%BA?force=1', result)
    })
})
