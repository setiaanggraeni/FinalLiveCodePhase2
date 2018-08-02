<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="/">Setia's Blog</a>
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
      </li>
      <!-- <li class="nav-item">
          <a class="nav-link" @click="toTravel">Travel</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" @click="toFoods">Foods</a>
      </li> -->
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        <a @click="login" >Login</a>
        <a @click="register" >Register</a>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'forNavbar',
  props: [],
  methods: {
    login () {
      this.$router.replace('/users/login')
    },
    register () {
        this.$router.replace('/users/register')
    }
  }
}
</script>
