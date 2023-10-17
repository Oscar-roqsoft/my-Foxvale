
import { defineStore } from 'pinia'

export const useStore = defineStore('user',()=> {
    // other options...
    const user = {}
   
    // const isAdmin = computed(()=>{
    //     user.status = "admin"
    // })

    const storeUser = (payload)=>{
        user = payload;
    }

    const signOut = ()=>{
        user = {};
        window.location = "/login";
    }

    return {
        user,
        storeUser,
        signOut
    }
})
  

