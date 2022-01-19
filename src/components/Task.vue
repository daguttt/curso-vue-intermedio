<template>
  <li>
    {{ task.title }}
    <button @click="sendDetails(task.title)">Eliminar</button>
  </li>
</template>

<script>
// import EventBus from "@/EventBus.js";
import state from "@/state.js";
export default {
  props: {
    task: Object,
  },
  methods: {
    sendDetails(title) {
      // EventBus.$emit("send-details", this.task.title);
      state.changeCurrentTaskTitle(title);
    },
  },
};
</script>

<style lang="scss">
button {
  color: $primary;
}
</style>