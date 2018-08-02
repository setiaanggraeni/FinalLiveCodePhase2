<template>
    <div class="form-group col-md-8" style="margin-left:20%;margin-top:10%">
      <h3>Login</h3>
      <label style="text-align:left">Username</label>
      <input type="text" class="form-control" v-model="username" placeholder="Username">
      <label>Password</label>
      <input type="password" class="form-control" v-model="password" placeholder="Password">
      <br>
      <button @click="login" style="border-radius:5px; background-color:pink">Login</button>
    </div>
</template>

<script>
export default {
  name: 'loginForm',
  props: [],
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
        axios.post('http://localhost:3000/users/login', {
        username: this.username,
        password: this.password
        })
        .then(user => {
            // console.log("user client ---------",user)
            localStorage.setItem('token', user.data.token)
            this.$router.replace('/') 
        })
        .catch(err => {
            console.log(err)
        })
    }
  }
}
</script>
