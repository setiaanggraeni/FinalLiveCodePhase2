<template>
    <div style="margin-top:100px;width:80%;margin-left:10%">
        <label style="text-align:left">Title</label>
        <input type="text" class="form-control" v-model="title" placeholder="Title...">
        <label>Category</label>
        <input type="text" class="form-control" v-model="category" placeholder="Category...">
        <label>Content</label>
        <wysiwyg v-model="content" />
        <br>
        <button @click="btnPost" style="width:30%;border-radius:5px;background-color:pink">Post</button>
    </div>
</template>

<script>
export default {
    name: 'formPost',
    data () {
        return {
            postForm: '',
            title: '',
            category: '',
            content: ''
        }
    },
    methods: {
        btnPost () {
            axios.post('http://localhost:3000/articles/create', {
                title: this.title,
                category: this.category,
                content: this.content
            }, {
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            .then(newPost => {
                alert('Successfully posted new article, yeeyy!')
            })
            .catch(err => {
                alert('Failed to post an article!')
            })
        }
    }
}
</script>


<style>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";
</style>
