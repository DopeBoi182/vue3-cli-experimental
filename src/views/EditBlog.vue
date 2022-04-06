<template>
  <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
      <h3>Tambahkan Artikel Baru</h3>
      <form @submit.prevent="insertPost">
        <div class="form-group">
          <label>Judul:</label>
          <input type="text" class="form-control" v-model="form.judul" />
        </div>
        <div class="form-group">
          <label>Isi Artikel</label>
          <textarea
            type="text"
            class="form-control"
            style="min-height: 300px"
            v-model="form.isi"
          />
        </div>
        <div class="form-group">
          <label>URL Gambar</label>
          <input type="text" class="form-control" v-model="form.gambar" />
        </div>
      </form>
    </div>
    <div class="col-md-2"></div>
  </div>
  <div class="row">
    <div class="col-md-12" style="text-align: right; margin-bottom: 30px">
      <button class="btn btn-success" v-on:click="updatePost">
        Simpan Artikel
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "EditBlog",
  components: {},
  data() {
    return {
      id: this.$route.params.id,
      form: {
        id: "",
        judul: "",
        isi: "",
        gambar: "",
      },
    };
  },
  methods: {
    updatePost: function () {
      this.form.id = parseInt(this.$route.params.id);
      try {
        axios
          .post("http://localhost:8080/api/editpost", this.form)
          .then((response) => {
            alert("Data Berhasil Diperbarui");
            this.$router.push("/admin");
          });
      } catch (e) {
        console.log(e);
      }
    },
  },
  created() {
    axios
      .get("http://localhost:8080/api/getpost/" + this.id)
      .then((response) => {
        this.form = response.data;
      });
  },
};
</script>