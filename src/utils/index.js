import UTILS from './utils.js'

const UtilPlugin = {}

UtilPlugin.install = function (Vue) {
    Vue.prototype.$utils = UTILS
}
export default UtilPlugin


export function isPhone(phone) {
    let reg = /^[1][34578]\d{9}$/;
    return reg.test(phone)
}

export function isCode(code) {
    return code.length === 4;
}
