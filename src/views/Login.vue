<template>
  <link
    href="http://fonts.googleapis.com/css?family=Montserrat:400,700"
    rel="stylesheet"
    type="text/css"
  />
  <div class="login-block" style="padding-top: 50px; padding-bottom: 80px">
    <h1>Login</h1>
    <input type="text" placeholder="Username" v-model="user.username" />
    <input type="password" placeholder="Password" v-model="user.password" />
    <button v-on:click="login">Submit</button>
  </div>
</template>
<style scoped>
body {
  font-family: Montserrat;
}

.login-block {
  width: 320px;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  margin: 0 auto;
}

.login-block h1 {
  text-align: center;
  color: #000;
  font-size: 18px;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 20px;
}

.login-block input {
  width: 100%;
  height: 42px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  font-size: 14px;
  font-family: Montserrat;
  padding: 0 20px 0 50px;
  outline: none;
}

.login-block input#username {
  background: #fff url("http://i.imgur.com/u0XmBmv.png") 20px top no-repeat;
  background-size: 16px 80px;
}

.login-block input#username:focus {
  background: #fff url("http://i.imgur.com/u0XmBmv.png") 20px bottom no-repeat;
  background-size: 16px 80px;
}

.login-block input#password {
  background: #fff url("http://i.imgur.com/Qf83FTt.png") 20px top no-repeat;
  background-size: 16px 80px;
}

.login-block input#password:focus {
  background: #fff url("http://i.imgur.com/Qf83FTt.png") 20px bottom no-repeat;
  background-size: 16px 80px;
}

.login-block input:active,
.login-block input:focus {
  border: 1px solid #5bc0de;
}

.login-block button {
  width: 100%;
  height: 40px;
  background: #5bc0de;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #5bc0de;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  font-family: Montserrat;
  outline: none;
  cursor: pointer;
}

.login-block button:hover {
  background: #5bc0de;
}
</style>
<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login: function () {
      try {
        axios
          .post("http://localhost:8080/api/login", this.user)
          .then((response) => {
            if (response.data) {
              localStorage.setItem("auth", true);
              this.$router.push("/");
              window.location.reload();
            } else {
              alert("USERNAME / PASSWORD SALAH");
            }
          });
      } catch (e) {}
    },
  },
};
</script>