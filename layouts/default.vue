<template>
    <div>
         <Navbar/>
         <slot/>
         <footerMenu/>
    </div>
</template>




<script setup>
    import {useStore}  from "@/stores/index";
    const user = useStore()
  // check if the user is logged in
  watchEffect((user)=>{
    if(user.status===true){
      console.log("yes")
    }else{
      console.log('no')
    }
  })

  // if the user is logged in, and they are on the authentication, take them to the dashboard

  // if the user is not logged in, and they are on the dashboard page, take back to the auth/login page

  const router = useRouter();
  console.log("this is from default layout",router.currentRoute.value)
</script>