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
    <div class="col-md-2"></div>
    <div class="col-md-8" style="text-align: right; margin-bottom: 30px">
      <button class="btn btn-success" v-on:click="insertPost">
        Simpan Artikel
      </button>
    </div>
    <div class="col-md-2"></div>
  </div>
</template>
<script>
// import Alert from "@/components/Alert.vue";
// import UserPost from "../../post.json";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      form: {
        judul: "",
        isi: "",
        gambar: "",
      },
    };
  },
  methods: {
    submitPost: function () {
      alert("WKKWW");
    },
    insertPost: async function () {
      try {
        axios
          .post("http://localhost:8080/api/insertpost", this.form)
          .then((response) => {
            console.log(response);
          });
        alert("Data Berhasil Dimasukkan");
        this.$router.push("/admin");
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>