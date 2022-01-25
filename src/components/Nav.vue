<template>
  <div>
    <Logo />
    <div id="nav">
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink :to="{ name: 'posts' }">Posts</RouterLink>
    </div>
  </div>
</template>
<script>
import Logo from "@/components/Logo";
export default {
  components: {
    Logo,
  },
};
</script>
<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
