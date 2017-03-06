/**
 * 检测元素是否在可视区
 */
export default function (el, option) {
  // 元素伸出的距离
  const setting = Object.assign({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  }, option)

  // 取得元素在可视区的位置
  const bcr = el.getBoundingClientRect()

  // 元素自身的宽高
  const mw = el.offsetWidth
  const mh = el.offsetHeight

  // 视窗宽高
  const w = window.innerWidth
  const h = window.innerHeight

  // 上下符合条件
  const boolX = (!((bcr.right - setting.left) <= 0 && ((bcr.left + mw) - setting.left) <= 0)
                && !((bcr.left + setting.right) >= w
                && (bcr.right + setting.right) >= (mw + w)))

  // 左右符合条件
  const boolY = (!((bcr.bottom - setting.top) <= 0 && ((bcr.top + mh) - setting.top) <= 0)
                && !((bcr.top + setting.bottom) >= h
                && (bcr.bottom + setting.bottom) >= (mh + h)))

  return el.width !== 0 && el.height !== 0 && boolX && boolY
}
