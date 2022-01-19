<template>
  <div>
    <h1>Detalles de la tarea</h1>
    <p>{{ state.currentTaskTitle }}</p>
  </div>
</template>
<script>
// import EventBus from "@/EventBus.js";
import state from "@/state.js";
export default {
  name: "TaskDetails",
  data() {
    return {
      state: {},
    };
  },
  mounted() {
    // EventBus.$on("send-details", (details) => (this.details = details));
    this.state = state.state;
  },
};
</script>
<style lang="scss" scoped>
div {
  position: fixed;
  left: 0;
  top: 0;
  width: 500px;
  height: 200px;
  background-color: rgba($light-color, 0.5);
  border: 1px solid $dark-color;
}
</style>