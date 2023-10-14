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
                                <h6 class="text-muted mb-1">Welcome back, {{ user.name }}!</h6>
                                <h5 class="mb-0">Dashboard</h5>
                            </div>

                            <div class="mb-0 position-relative">
                                <select class="form-select form-control" id="dailychart">
                                    <option selected="">This Month</option>
                                    <option value="aug">August</option>
                                    <option value="jul">July</option>
                                    <option value="jun">June</option>
                                </select>
                            </div>
                        </div>
                    
                       


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

import {useStore}  from "@/stores/mystore"

const user = useStore()

// const isAdmin = computed(() => {
//       return  user.status == "user"
//     })

</script>



<!-- <style scoped>
@import url( '/css/style.min.css');
</style> -->