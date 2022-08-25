const puppeteer = require('puppeteer');
const path = require('path')

exports.getScreenshot = async (url, width = 800, height = 600, fileName) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  //设置可视区域大小,默认的页面大小为800x600分辨率
  await page.setViewport({width, height})
  await page.goto(url)
  //对整个页面截图
  await page.screenshot({
      path: path.resolve(`./public/${fileName}.png`),  //图片保存路径
      type: 'png',
      fullPage: false //边滚动边截图
  })
  
  //执行cos 或 oss 脚本，把图片上传到cdn环境，此处由于调试，暂时省略

  await page.close()
  await browser.close()

  return `${fileName}.png`
}