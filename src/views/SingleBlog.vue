<template>
  <div class="row">
    <div class="col-md-12">
      <h3 style="text-transform: uppercase">{{ this.blog.judul }}</h3>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <img
        style="width: 400px; margin-top: 30px"
        v-bind:src="this.blog.gambar"
      />
    </div>
  </div>
  <div style="margin-top: 50px; min-height: 500px">
    <center>
      <p style="width: 800px; text-align: justify">{{ this.blog.isi }}</p>
    </center>
  </div>
</template>
<script>
export default {
  name: "SingleBlog",
  components: {},
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    };
  },
  created() {
    axios
      .get("http://localhost:8080/api/getpost/" + this.id)
      .then((response) => {
        console.log(response.data);
        this.blog = response.data;
      });
  },
  mounted() {},
};
</script>
