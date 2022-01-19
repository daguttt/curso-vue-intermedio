<template>
  <li>
    {{ task.title }}
    <button @click="sendDetails(task.title)">Eliminar</button>
  </li>
</template>

<script>
import EventBus from "@/EventBus.js";
export default {
  props: {
    task: Object,
  },
  methods: {
    sendDetails() {
      EventBus.$emit("send-details", this.task.title);
    },
  },
};
</script>

<style lang="scss">
button {
  color: $primary;
}
</style>