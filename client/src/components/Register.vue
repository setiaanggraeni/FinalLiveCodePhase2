<template>
    <div class="form-group col-md-8" style="margin-left:20%;margin-top:10%">
      <h3>Register</h3>
      <label style="text-align:left">Username</label>
      <input type="text" class="form-control" v-model="username" placeholder="Username">
      <label>Password</label>
      <input type="password" class="form-control" v-model="password" placeholder="Password">
      <br>
      <button @click="register" style="border-radius:5px; background-color:pink">Register</button>
    </div>
</template>

<script>
export default {
  name: 'registerForm',
  props: [],
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    register () {
        axios.post('http://localhost:3000/users/register', {
        username: this.username,
        password: this.password
        })
        .then(user => {
            this.$router.replace('/users/login')
            alert('Thank you for registered, please login to write or read a lot of amazing articles!')
        })
        .catch(err => {
            console.log(err)
        })
    }
  }
}
</script>
