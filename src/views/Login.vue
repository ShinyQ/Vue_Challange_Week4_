<template>
    <div class="login">
  <div class="wrapper">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
     
      <div class="form-signin">     
        
        <h2 class="form-signin-heading"><center>Halaman Login</center></h2>
        <center><font color="red"><b>{{ error }}</b></font> </center>
        <center><font color="green"><b>{{ success }}</b></font> </center> 
        <input type="text" class="form-control" v-model="email" placeholder="email">
        <br>
        <input type="password" v-model="password" class="form-control" name="password" placeholder="Password" required=""/>   
        <button @click="login()" class="btn btn-lg btn-primary btn-block" type="submit">Login</button>   
         
      </div>

      
  </div>
    </div>
</template>

<script>
import checkLogin from '@/mixins/checkLogin.js'

export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    computed: {
        user() {
            return this.$store.state.login.data.user
        },
        error() {
            return this.$store.state.login.data.error
        },
        success() {
            return this.$store.state.login.data.success
        }
    },
    methods: {
        login() {
            const payload = {
                email: this.email,
                password: this.password
            }
            this.$store.dispatch('login/doLogin', payload);
        }
    },
    mixins: [checkLogin]
}
</script>
<style>

.wrapper {
  margin-top: 150px;
  margin-bottom: 80px;
}

.form-signin {
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 20px;
  margin-top: 20px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  font-size: 12px;
  height: auto;
  padding: 10px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="text"] {
  margin-bottom: -1px;
  margin-top: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>