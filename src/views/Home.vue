<template>
  <Profile />
  <div class="row" style="margin-top: 20px">
    <div
      style="margin: 0"
      class="col-md-3 col-xs-3 col-sm-3 col-lg-3"
      v-for="post in blogs"
      :key="post.id"
    >
      <Blog
        v-bind:judul="post.judul"
        v-bind:id="post.id"
        v-bind:isi="post.isi"
        v-bind:gambar="post.gambar"
      />
    </div>
  </div>
</template>
<script>
import Profile from "@/components/Front/Profile.vue";
import Blog from "@/components/Blog.vue";

export default {
  name: "Home",
  components: {
    Profile,
    Blog,
  },
  data() {
    return {
      blogs: [],
    };
  },
  mounted() {
    axios.get("http://localhost:8080/api/getpost").then((response) => {
      this.blogs = response.data.data;
    });
  },
};
</script>
