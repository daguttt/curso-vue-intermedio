<template>
  <div>
    <!-- ! This gives an error while fetching data -->
    <h2>{{ this.post[0].title }}</h2>
    <p>{{ this.post[0].body }}</p>
  </div>
</template>

<script>
import postsService from "@/services/postsService.js";
export default {
  name: "Post",
  data() {
    return {
      post: [],
    };
  },
  created() {
    postsService
      .getItem({ params: { id: this.postId } })
      .then((res) => (this.post = res.data));
  },
  computed: {
    postId() {
      return this.$route.params.post;
    },
  },
};
</script>
