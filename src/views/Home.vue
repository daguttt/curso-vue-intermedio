<template>
  <div class="home">
    <BaseForm />
    <Tasks />
  </div>
</template>

<script>
// @ is an alias to /src
import Tasks from "@/components/Tasks.vue";
// import BaseForm from "@/components/BaseForm.vue";
export default {
  name: "Home",
  components: {
    Tasks,
    // BaseForm,
  },
};
</script>
