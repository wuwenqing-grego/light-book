import createId from '@/lib/createId.ts'
import store from '.'

type Tag = {
    id: string;
    name: string;
}

type TagStore = {
    tagList: Tag[];
    currTag: Tag;
}

type TagMutations = {
    fetch: (state: TagStore) => void;
    setCurrTag: (state: TagStore, id: string) => void;
    create: (state: TagStore, name: string) => 'duplicated' | 'success';
    update: (state: TagStore, payload: { id: string; name: string }) => 'duplicated' | 'success' | 'not found';
    remove: (state: TagStore, id: string) => boolean;
    save: (state: TagStore) => void;
}

export default {
    namespaced: true,

    state: {
        tagList: [],
        currTag: undefined
    },

    mutations: {
        fetch(state) {
            state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]')
        },

        setCurrTag(state, id) {
            state.currTag = state.tagList.filter(item => item.id === id)[0]
        },
    
        create(state, name) {
            const names = state.tagList.map(item => item.name)
            if (names.includes(name)) {
                window.alert('标签名已被使用！')
                return 'duplicated'
            }
    
            const id = createId().toString()
            state.tagList.push({id, name})
            store.commit('tag/save')
            window.alert('标签添加成功！')
            return 'success'
        },
    
        update(state, payload) {
            const {id, name} = payload
            const ids = state.tagList.map(item => item.id)
            if (!ids.includes(id)) {
                window.alert('标签不存在！')
                return 'not found'
            }
    
            const names = state.tagList.map(item => item.name)
            if (names.includes(name)) {
                window.alert('标签名已被使用！')
                return 'duplicated'
            } else {
                const tag = state.tagList.filter(item => item.id === id)[0]
                tag.name = name
                store.commit('tag/save')
                window.alert('标签修改成功！')
                return 'success'
            }
        },
    
        remove(state, id) {
            const index = state.tagList.findIndex(item => item.id === id)
            if (index >= 0) {
                state.tagList.splice(index, 1)
                store.commit('tag/save')
                window.alert('删除成功！')
                return true
            } else {
                window.alert('删除失败！')
                return false
            }
        },
    
        save(state) {
            window.localStorage.setItem('tagList', JSON.stringify(state.tagList))
        }
    } as TagMutations
}