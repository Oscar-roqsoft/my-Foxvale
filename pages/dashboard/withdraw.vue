
<template>
   
    <div>
      

        <div class="page-wrapper toggled">
            <!-- sidebar-wrapper -->
           <sidebar/>
            <!-- sidebar-wrapper  -->

            <!-- Start Page Content -->
            <main class="page-content bg-light">
                <!-- Top Header -->
               <topheader/>
                <!-- Top Header -->

                <div class="container-fluid">
                    <div class="layout-specing">
                        <div class="d-md-flex justify-content-between align-items-center">
                            <h5 class="mb-0">Withdraw Funds</h5>

                            <nav aria-label="breadcrumb" class="d-inline-block mt-2 mt-sm-0">
                                <ul class="breadcrumb bg-transparent rounded mb-0 p-0">
                                    <li class="breadcrumb-item text-capitalize"><nuxt-link to="/dashboard" href="index.html">Foxvale</nuxt-link></li>
                                    <li class="breadcrumb-item text-capitalize active" aria-current="page">Withdrawal</li>
                                </ul>
                            </nav>
                        </div>
                    
                        
                        <form class="rounded shadow p-3 mt-4 bg-color text-white">
                            <div class="d-flex justify-content-end">
                                <span class="h6 fs-bold text-muted">Mini Withdrawal :</span>
                                <span class="ms-1 h6 text-muted fs-bold">$1.00</span>
                            </div>
                            <div class="row mt-4 align-items-center">
                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <div class="form-icon position-relative">
                                            <span>Payment Method</span>
                                            <input type="select" class="form-control ps-4">
                                        </div>

                                    </div>
                                </div><!--end col-->

                                <div class="col-lg-12">
                                    <div class="mb-3">

                                        <div class="form-icon position-relative">
                                            <span>Amount</span>
                                            <input type="number" class="form-control ps-4" required>
                                        </div>
                                    </div>
                                </div><!--end col-->

                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <div class="form-icon position-relative">
                                            <span>Wallet Address</span>
                                            <input type="select" class="form-control ps-4">
                                        </div>

                                    </div>
                                </div><!--end col-->

                                <div class="col-lg-12 mt-2 mb-2 d-flex" style="width: 100%;">
                                    <button @click="navigateTo('/dashbord')" class="btn  btn-danger">Cancel</button>
                                    <button class="btn btn-warning ms-2">Proceed</button>
                                </div><!--end col-->
                            </div><!--end row-->
                        </form>
                        

                    </div>
                </div><!--end container-->

                <!-- <footer2/> -->
                <!-- End -->
            </main>
            <!--End page-content" -->
        </div>
        <!-- page-wrapper -->
        
       
    </div>
    
</template>


<script setup>
definePageMeta({
    layout:"custom"
})

</script>


<style scoped>

.bg-color{
    background: #101038;
}

</style>