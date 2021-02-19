import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TagHelper extends Vue {
    get tags() {
        return this.$store.state.tag.tagList
    }

    created() {
        this.$store.commit('tag/fetch')
    }
    
    createTag() {
        const name = window.prompt('请输入标签名：')
        if (name === '') {
            window.alert('标签名不能为空！')
        } else if (name) {
            this.$store.commit('tag/create', name)
        }
    }
}