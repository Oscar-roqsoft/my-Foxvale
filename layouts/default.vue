<template>
    <div>
         <Navbar/>
         <slot/>
         <footerMenu/>
    </div>
</template>




<script setup>
  // check if the user is logged in

  // if the user is logged in, and they are on the authentication, take them to the dashboard

  // if the user is not logged in, and they are on the dashboard page, take back to the auth/login page

  const router = useRouter();
  console.log("this is from default layout",router.currentRoute.value)
</script>