export default {
    state: {
        currentTaskTitle: "",
    },
    changeCurrentTaskTitle(title) {
        this.state.currentTaskTitle = title
    }
}