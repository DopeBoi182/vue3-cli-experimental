<template>
  <div class="row">
    <div class="col-md-3">
      <router-link
        to="/blog/insert"
        class="btn btn-info"
        style="float: left; margin-left: 20px"
      >
        Buat Postingan Baru
      </router-link>
    </div>
  </div>
  <div class="row" style="margin-top: 20px">
    <div class="col-md-3" v-for="post in blogs" :key="post.id">
      <Blog v-bind:judul="post.judul" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Blog from "@/components/Blog.vue";

export default {
  name: "BlogParent",
  components: {
    Blog,
  },
  data() {
    return {
      blogs: [
        { id: 0, judul: "STMJ Enak Loh" },
        { id: 0, judul: "STMJ Biasa Aja" },
        { id: 1, judul: "STMJ Gak Enak Sekarang" },
        { id: 1, judul: "STMJ Gak Enak Sekarang" },
      ],
    };
  },
};
</script>
