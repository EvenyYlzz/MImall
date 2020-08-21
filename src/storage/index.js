const STORAGE_KEY = 'mall'
export default {
    //  存储值
    setItem(key, value, modulename) {
        if (modulename) {
            const val = this.getItem(modulename)
            val[key] = value
            this.setItem(modulename, val)
        } else {
            const val = this.getStorage()
            val[key] = value
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
        }
    },
    //  获取某一个模块下面的属性user下面的userName
    getItem(key, modulename) {
        if (modulename) {
            const val = this.getItem(modulename)
            if (val) {
                return val[key]
            }
        }
        return this.getStorage()[key]
    },
    getStorage () {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
    }, //  获取storage值
    clear(key, modulename) {
        const val = this.getStorage()
        if (modulename) {
            if (!val[modulename]) {
                return
            }
            delete val[modulename][key]
        } else {
            delete val[key]
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
}
