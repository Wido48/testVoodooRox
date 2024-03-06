import axios from "axios";

export const getPostsFromRequest = async () => {
    const response = await axios.get('http://jsonplaceholder.typicode.com/posts')
    if (response.status === 200) {
        return response.data
    }
    return undefined
}