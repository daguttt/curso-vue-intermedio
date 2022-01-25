<template>
  <div class="about">
    <Logo />
    <h1>This is an about page</h1>
    <BaseForm />
    <ul>
      <li v-for="item in items" :key="item.id" @click="showPost(item.id)">
        {{ item.title }}
      </li>
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
    postsService.getAll().then((res) => (this.items = res.data));
  },
  mixins: [crudItemsMixin],
  methods: {
    showPost(postId) {
      this.$router.push({
        name: "post",
        params: {
          post: postId,
        },
      });
    },
  },
  components: {
    Logo,
    // BaseForm,
  },
};
</script>

<style lang="scss" scoped>
li {
  cursor: pointer;
}
</style>