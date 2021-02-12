import createId from '@/lib/createId.ts'

const KEY = 'tagList'

type Tag = {
    id: string;
    name: string;
}

type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => 'duplicated' | 'success';
    update: (id: string, name: string) => 'duplicated' | 'success' | 'not found';
    remove: (id: string) => boolean;
    save: () => void;
}

const tagListModel: TagListModel = {
    data: [],

    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(KEY) || '[]')
        return this.data
    },

    create(name) {
        const names = this.data.map(item => item.name)
        if (names.includes(name)) {return 'duplicated'}

        const id = createId().toString()
        this.data.push({id, name})
        this.save()
        return 'success'
    },

    update(id, name) {
        const ids = this.data.map(item => item.id)
        if (!ids.includes(id)) {return 'not found'}

        const names = this.data.map(item => item.name)
        if (names.includes(name)) {
            return 'duplicated'
        } else {
            const tag = this.data.filter(item => item.id === id)[0]
            tag.name = name
            this.save()
            return 'success'
        }
    },

    remove(id) {
        const index = this.data.findIndex(item => item.id === id)
        this.data.splice(index, 1)
        this.save()
        return true
    },

    save() {
        window.localStorage.setItem(KEY, JSON.stringify(this.data))
    }
}

export default tagListModel