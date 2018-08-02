<template>
  <div class="home">
      <ForNavbar/>
  </div>
</template>

<script>
// @ is an alias to /src
import ForNavbar from '@/components/Navbar.vue'

export default {
  name: 'home',
  components: {
    ForNavbar
  }
}
</script>
