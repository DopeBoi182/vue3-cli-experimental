<template>
  <div class="row" style="margin-top: 15px">
    <div class="col-md-3">
      <router-link to="/blog/insert" class="btn btn-info" style="float: left">
        Buat Postingan Baru
      </router-link>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12" style="text-align: left">
      <table class="table table-striped">
        <thead>
          <tr>
            <th style="width: 1px">Judul</th>
            <th>Isi</th>
            <th style="width: 160px">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.judul">
            <td style="font-weight: bold">{{ post.judul }}</td>
            <td style="text-align: justify">{{ post.isi }}</td>
            <td>
              <router-link :to="'/edit/' + post.id" style="color: white">
                <button class="btn btn-success">Edit</button>
              </router-link>
              <button
                class="btn btn-danger"
                style="margin-left: 10px"
                v-on:click="remove(post.id)"
              >
                Del
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  methods: {
    remove: function (id) {
      alert(id);
      axios.get("http://localhost:8080/api/delete/" + id).then((response) => {
        axios.get("http://localhost:8080/api/getpost").then((response) => {
          this.posts = response.data.data;
        });
      });
    },
  },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    axios.get("http://localhost:8080/api/getpost").then((response) => {
      this.posts = response.data.data;
    });
  },
};
</script>
