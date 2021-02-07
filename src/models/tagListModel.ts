const KEY = 'tagList'

type Tag = {
    id: string;
    name: string;
}

type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => 'duplicated' | 'success';
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

        const id = this.data.length + ''
        this.data.push({id, name})
        this.save()
        return 'success'
    },

    save() {
        window.localStorage.setItem(KEY, JSON.stringify(this.data))
    }
}

export default tagListModel