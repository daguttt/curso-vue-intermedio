<template>
  <div class="home">
    <Logo />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Logo from "@/components/Logo";
export default {
  name: "Home",
  components: {
    HelloWorld,
    Logo,
  },
};
</script>
