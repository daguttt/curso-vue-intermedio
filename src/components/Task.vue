<template>
  <li>
    {{ task.title }}
    <button @click="$emit('task-removed')">Eliminar</button>
  </li>
</template>
<script>
export default {
  props: {
    task: Object,
  },
};
</script>
  