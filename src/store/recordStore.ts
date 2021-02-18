import clone from '@/lib/clone'
import store from '.'

type recordState = {
    recordList: RecordItem[];
}

export default {
    state: {
        recordList: []
    },

    mutations: {
        fetch(state: recordState) {
            state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[]
        },
    
        create(state: recordState, record: RecordItem) {
            const copyRecord: RecordItem = clone(record)
            copyRecord.createdAt = new Date()
            state.recordList.push(copyRecord)
            store.commit('save')
        },
    
        save(state: recordState) {
            window.localStorage.setItem('recordList', JSON.stringify(state.recordList))
        }
    }
}