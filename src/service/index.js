const { getScreenshot } = require('../puppeteer/index')
exports.api = {
    screenshot: async (ctx) => {
        const { width, height, url, tid} = ctx.request.body
        const res = await getScreenshot(url, width, height, tid)
        console.log(res)
        if (res) {
            ctx.body = {
                code: 200,
                message: '成功',
                data: res
            }
        }
    }
}