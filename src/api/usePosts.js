import {ref} from 'vue'
import axios from 'axios'

export default function usePosts() {
    const posts = ref([])

    const fetchPosts = async () => {
        let response = await axios.get('/entries')
        posts.value = response.data.entries
    }

    return {
        posts,
        fetchPosts
    }

}
