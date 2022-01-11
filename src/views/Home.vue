<template>
  <div class="home">
    <Logo />
    <Tasks />
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from "@/components/Logo";
import Tasks from "@/components/Tasks.vue";
export default {
  name: "Home",
  components: {
    Logo,
    Tasks,
  },
};
</script>
