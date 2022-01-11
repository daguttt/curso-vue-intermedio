<template>
  <div class="about">
    <Logo />
    <h1>This is an about page</h1>
    <BaseForm />
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>
<script>
import Logo from "@/components/Logo";
// import BaseForm from "@/components/BaseForm.vue";
import postsService from "../services/postsService";
export default {
  created() {
    postsService.get().then((res) => (this.posts = res.data));
  },
  data() {
    return {
      posts: [],
    };
  },
  components: {
    Logo,
    // BaseForm,
  },
};
</script>
