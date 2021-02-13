import clone from '@/lib/clone.ts'

const KEY = 'recordList'

const recordListModel = {
    data: [] as RecordItem[],

    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(KEY) || '[]') as RecordItem[]
        return this.data
    },

    create(record: RecordItem) {
        const newRecord: RecordItem = clone(record)
        newRecord.createdAt = new Date()
        this.data.push(newRecord)
    },

    save() {
        window.localStorage.setItem(KEY, JSON.stringify(this.data))
    }
}

export default recordListModel