<template>
  <div id="nav">
    <Navigation />
  </div>
  <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8" style="background: white; min-height:500px;">
        <div>
          <h2 v-show="zonawaktu == 'pagi'">Good Morning Everyone</h2>
          <h1 v-if="zonawaktu == 'pagi'">Hello Selamat Pagi</h1>
          <h1 v-else-if="zonawaktu == 'siang'">Hello Selamat Siang</h1>
          <h1 v-else-if="zonawaktu == 'malam'">Hello Selamat Malam</h1>
          <h1 v-else>Zona Waktu Tidak Diketahui</h1>
        </div>
        <div v-html="header"></div>
        <img v-bind:src="gambar"
          alt=""
          style="width: 100%; height: 300px; object-fit: cover"
        />
        <div>
          <p>{{informasi}}</p>
        </div>

        <!-- START OF TABEL HALAMAN -->
        <div style="margin-top:50px;"><h3>Tabel Blog</h3></div>
        <div>
          <input style="margin-bottom:20px;" type="text" class="form-control" placeholder="Judul" v-model="judul">
          <code>{{judul}}</code>
          <input style="margin-bottom:20px;" type="text" class="form-control" placeholder="Isi" v-model="isi">
          <button class="btn btn-success" v-on:click="addPost()">Add Post</button>
        </div>
        <div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th style="width: 1px">Judul</th>
                <th>Isi</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(post, index) in posts" :key="post.judul">
                <td style="font-weight: bold; width:200px; text-align:left;">{{ post.judul }}</td>
                <td style="text-align: justify">{{ post.isi }}</td>
                <td style="text-align: center">
                  <button class="btn btn-danger" v-on:click="remove(index)">Hapus</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- END OF TABEL HALAMAN -->

        <!-- START OF PRINT ANGKA_PERTAMA & KEDUA -->
        <div style="margin-top:50px;">
          <h3>Coba Fungsi</h3>
          <table class="table table-striped" style="font-weight:bold; text-align:left;">
            <tbody>
              <tr>
                <td style="width:150px;">Angka Pertama</td>
                <td style="width:1px;">:</td>
                <td>{{angka_pertama}}</td>
              </tr>
              <tr>
                <td>Angka Kedua</td>
                <td>:</td>
                <td>{{angka_kedua}}</td>
              </tr>
              <tr>
                <td>Hasil</td>
                <td>:</td>
                <td>{{hasil}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- END OF PRINT ANGKA -->

        <!-- START OF COMPONENT TABEL BLOG -->
        <div style="margin-top:50px;"><h3>Component Blog</h3></div>
        <div class="row">
          <div style="margin: 0" class="col-md-3" v-for="post in posts" :key="post.judul">
            <Blog
              v-bind:judul="post.judul"
              v-bind:isi="post.isi"
            />
          </div>
        </div>
        <!-- END OF COMPONENT TABEL BLOG -->

        <!-- START OF SLOT -->
        <!-- <div style="margin-top:50px;"><h3>Simulasi Modal Detail</h3></div>
        <DetailBlog>
          <template v-slot:judul>
            <h2 class="modal-title">Injeksi Judul</h2>
          </template>
          <template v-slot:gambar>
            <img style="width:100%;" src="https://cdn.drawception.com/drawings/938600/NsNloOPB1M.png"/>
          </template>
          <template v-slot:isi>
            <b>Hallo ini adalah isi yang bersasal dari injeksi parent</b>
          </template>
        </DetailBlog> -->
        <!-- END OF SLOT -->

        <!-- START OF MODAL CONFIRMATION DELETE -->
        <ModalDeleteConfirmation 
          v-show="isModalDeleteVisible" 
          v-on:close="closeModalDeleteConfirmation($event)"
        >
          <template v-slot:body>
            <span><b>Judul</b> : {{selectedPost.data.judul}}</span><br>
            <span><b>Isi</b> : {{selectedPost.data.isi}}</span>
          </template>s
        </ModalDeleteConfirmation>
        <!-- END OF MODAL CONFIRMATION DELETE -->

    <div class="col-md-2"></div>
  </div>
</div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
import Blog from "@/components/Blog.vue";
import DetailBlog from "@/components/slots/DetailBlog.vue";
import ModalDeleteConfirmation from "@/components/modal/ModalDeleteConfirmation.vue"

export default {
  name:"App",
  components: {
    Navigation,
    Blog,
    DetailBlog,
    ModalDeleteConfirmation
  },
  methods:{
    closeModalDeleteConfirmation: function(value){
      console.log(value);
      console.log(this.selectedPost.index);

      if(value === true){
        let selectedIndex = this.selectedPost.index;
        this.posts.splice(selectedIndex, 1);
      }else{
        $("#modalDeleteConfirmation").modal("hide");
      }
    },
    remove: function(INDEX){
      this.selectedPost = {index:INDEX, data:this.posts[INDEX]};
      $("#modalDeleteConfirmation").modal("show");
    },
    penjumlahan: function(){
      this.hasil = (this.angka_pertama + this.angka_kedua);
      console.log(`${this.angka_pertama} + ${this.angka_kedua} = ${this.hasil}`);
    },
    inputJudul: function(event){
      // this.judul = event.target.value;
    },
    inputIsi: function(event){
      // this.isi = event.target.value;
    },
    addPost: function(){
      let data = {};
      data.judul = this.judul;
      data.isi = this.isi;
      this.posts.push(data);
    }
  },  
  data(){
    return {
      selectedPost:{
        data:{
          judul:'',
          isi:''
        }
      },
      isi:"",
      judul:"Judul ini dari dalam data, bukan input form",
      angka_pertama:1,
      angka_kedua:5,
      hasil:0,
      posts:[
        {judul:"Perkenalan Diri", isi:"Lorem Ipsum Dolor Sit Amet"},
        {judul:"Info Makanan Lezat", isi:"Lorem Ipsum Dolor Sit Amet"},
        {judul:"Portofolio Diri Saya", isi:"Lorem Ipsum Dolor Sit Amet"},
        {judul:"Cuaca Saat Ini", isi:"Lorem Ipsum Dolor Sit Amet"},
      ],
      zonawaktu:"siang",
      gambar:"https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg",
      informasi:"Lorem ipsum doSlor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      header:
        "<center><h3>Ini adalah halaman website saya</h3></center>",
    }
  },
  mounted(){}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
@import "~bootstrap3/dist/css/bootstrap.css";
</style>
