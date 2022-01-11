<template>
  <div class="home">
    <Logo />
    <BaseForm />
    <Tasks />
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from "@/components/Logo";
import Tasks from "@/components/Tasks.vue";
// import BaseForm from "@/components/BaseForm.vue";
export default {
  name: "Home",
  components: {
    Logo,
    Tasks,
    // BaseForm,
  },
};
</script>
