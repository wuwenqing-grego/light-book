import { Component, Vue } from 'vue-property-decorator'

@Component
export default class RecordHelper extends Vue {
    get recordList() {
        return this.$store.state.record.recordList
    }

    created() {
        this.$store.commit('record/fetch')
    }
}