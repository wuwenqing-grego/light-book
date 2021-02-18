import clone from '@/lib/clone'
import store from '.'

type recordState = {
    recordList: RecordItem[];
}

export default {
    namespaced: true,

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
            store.commit('record/save')
        },
    
        save(state: recordState) {
            window.localStorage.setItem('recordList', JSON.stringify(state.recordList))
        }
    }
}