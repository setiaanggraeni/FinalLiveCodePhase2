<template>
  <div class="home">
    <ForNavbar/>
    <FormPost/>
    <br>
    <div class="row" style="margin-left:20%">
      <div class="col-md-6" v-for="article in articles" v-bind:key="article['.key']">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">{{article.title}}</h5>
            <p class="card-text">{{article.category}} by {{article.author.username}}</p>
            <p class="card-text">{{article.content}}</p>
            <button @click="edit(article._id)" style="border-radius:5px; background-color:pink">Edit</button>
            <button @click="deleteArticle(article._id)" style="border-radius:5px; background-color:pink">Delete</button>
          </div>
        </div>
      </div>
     </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ForNavbar from '@/components/Navbar.vue'
import FormPost from '@/components/PostArticle.vue'

export default {
  name: 'home',
  data () {
    return {
      articles: ''
    }
  },
  mounted () {
    this.getAllPost()
  },
  methods: {
    getAllPost () {
      let token = localStorage.getItem('token')
      if(token){
          axios.get('http://localhost:3000/articles', {
              headers: {
                  token : localStorage.getItem("token")
              }
          })
          .then(response => {
              // console.log("========",response.data)
              this.articles = response.data
          })
          .catch(err => {
            console.log(err)
          })
      } else{
          alert('Please login to read articles!')
          this.$routes.replace('/users/login')
      }
    },
    edit (articleId) {
      axios.put(`http://localhost:3000/articles/${articleId}`, {

      }, {
        headers: {
          token : localStorage.getItem('token')
        }
      })
    },
    deleteArticle (articleId) {
      axios.delete(`http://localhost:3000/articles/${articleId}`, {
        headers: {
          token : localStorage.getItem('token')
        }
      })
      .then(delArticle => {
        this.$routes.replace('/')
        alert(`Successfully delete article ${articleId}`)
      })
      .catch(err => {
        console.log(err)
        alert('Failed to delete article')
      })
    }
  },
  components: {
    ForNavbar, FormPost
  }
}
</script>
