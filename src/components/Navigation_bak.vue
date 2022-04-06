<template>
  <div class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-collapse collapse">
        <ul class="nav navbar-nav" style="width: 100%">
          <li>
            <a href="#"><router-link to="/">Profile</router-link></a>
          </li>
          <li v-if="isAuthenticated">
            <a href="#"><router-link to="/admin">Admin</router-link></a>
          </li>
          <li style="float: right" v-if="!isAuthenticated">
            <router-link to="/login">Login</router-link>
          </li>
          <li style="float: right" v-if="isAuthenticated">
            <a v-on:click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "Navigation",
    props: {},
    data() {
      return {
        isAuthenticated: false,
      };
    },
    methods: {
      logout: function () {
        localStorage.setItem("auth", false);
        this.$router.push("/login");
        window.location.reload();
      },
    },
    mounted() {
      const isAuthenticated = JSON.parse(localStorage.getItem("auth"));
      this.isAuthenticated = isAuthenticated;
      console.log(isAuthenticated);
    }
  }
</script>