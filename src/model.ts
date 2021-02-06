const KEY = 'recordList'

const model = {
    fetch() {
        return JSON.parse(window.localStorage.getItem(KEY) || '[]') as RecordItem[]
    },

    clone(data: RecordItem) {
        return JSON.parse(JSON.stringify(data))
    },

    save(data: RecordItem[]) {
        window.localStorage.setItem(KEY, JSON.stringify(data))
    }
}

export default model