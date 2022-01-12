<template>
  <div class="about">
    <Logo />
    <h1>This is an about page</h1>
    <BaseForm />
    <ul>
      <li v-for="post in items" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>
<script>
import Logo from "@/components/Logo";
// import BaseForm from "@/components/BaseForm.vue";
import postsService from "../services/postsService";
import { crudItemsMixin } from "../mixins/crudItems";
export default {
  created() {
    postsService.get().then((res) => (this.items = res.data));
  },
  mixins: [crudItemsMixin],
  components: {
    Logo,
    // BaseForm,
  },
};
</script>
