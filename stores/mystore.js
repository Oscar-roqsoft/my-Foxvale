
import { defineStore } from 'pinia'

export const useStore = defineStore('user',()=> {
    // other options...
    const user = {
        name: "Johnson Akpabio",
        image: "/images/client/05.jpg",
        username: "akpabio222",
        status: "admin" // "user"
    }
   
    const isAdmin = computed(()=>{
        user.status = "admin"
    })

    return user

})
  

