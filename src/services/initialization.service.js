import {usePostsStore} from "../stores/posts.store.js";
import {useUsersStore} from "../stores/users.store.js";

export async function initializeApp(){
    await usePostsStore().updatePostsLists()
    await useUsersStore().updateUsersLists()

    compareUsersAndPostsLists()
}


const compareUsersAndPostsLists = () => {

    const users = useUsersStore().users
    const posts = usePostsStore().posts

    for (let i = 0; i < posts?.length; i++) {
        for (let j = 0; j < users?.length; j++) {
            if (users[j]?.id === posts[i]?.userId) {
                console.log(posts[i])
                console.log(users[j])
                posts[i].userInfo = users[j]
            }

        }
    }

}