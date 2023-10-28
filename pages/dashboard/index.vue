<template>

    <div>
       

        <div class="page-wrapper toggled">
            <!-- @@include("partials/sidebar-dark.html") -->
            <Sidebar/>

            <!-- Start Page Content -->
            <main class="page-content bg-light">
                <!-- @@include("partials/top-header.html") -->
                <Topheader/>

                <div class="container-fluid">
                    <div class="layout-specing">
                        <div class="d-flex align-items-center justify-content-between">
                            <div>
                                <h6 class="mb-1">Hello {{ store.user.name }},</h6>
                                <h6 class="text-muted mb-0">Welcome!!! Let's keep winning with Foxvale Broker Inc.</h6>
                            </div>

                        </div>
                    
                       
                        <div class="row  align-items-center">
                           
                            
                            <div  class=" mt-4 align-items-center">
                                <a class=" row align-items-center  rounded shadow mx-2 p-3">
                                    <div v-for="item in btnLinkItems" :key="item" class="d-flex align-items-center justify-content-center col">
                                      
                                        <nuxt-link :to="`/dashboard/${item.link}`" class=" d-flex flex-column  align-items-center justify-content-center">
                                            <div class="icon text-center text-white bg-warning dim  rounded-pill">
                                                <i :class="item.icon"></i>
                                            </div>
                                            <h6 class=" text-dark  mb-0 ">{{ item.title }}</h6>
                                        </nuxt-link>
                                    </div>
                                   
                                </a>
                            </div><!--end col-->
                         
                           
                        </div><!--end row-->


                    </div>


                </div><!--end container-->

                <!-- @@include("partials/footer.html") -->
            </main>
            <!--End page-content" -->
        </div>
        <!-- page-wrapper -->


    </div>
</template>





<script setup>

definePageMeta({
    layout:"custom",
})

import {useStore}  from "@/stores/index"

const store = useStore()

// const isAdmin = computed(() => {
//       return  store.user.isAdmin =  true
//     })
const btnLinkItems = [
    {id:1,title:"deposit",icon:"uil uil-usd-circle fs-4 mb-0",link:"deposit"},
    {id:2,title:"withdraw",icon:"uil uil-shopping-bag fs-4 mb-0",link:""},
    {id:3,title:"invest",icon:"uil uil-chart fs-4 mb-0",link:"subscription"},
   ]



</script>


<style scoped>
.dim{
    height:40px;
    width:40px;
    display: inline-flex;
    justify-content:center;
    align-items:center;
}
</style>

