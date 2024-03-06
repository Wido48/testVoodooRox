import axios from "axios";

export const getUsersFromRequest = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    if (response.status === 200) {
        return response.data
    }
    return undefined
}