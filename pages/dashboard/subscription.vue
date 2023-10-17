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
                            <h5 class="mb-0">Pricing</h5>

                            <nav aria-label="breadcrumb" class="d-inline-block mt-2 mt-sm-0">
                                <ul class="breadcrumb bg-transparent rounded mb-0 p-0">
                                    <li class="breadcrumb-item text-capitalize"><nuxt-link to="/dashboard" href="index.html">Foxvale</nuxt-link></li>
                                    <li class="breadcrumb-item text-capitalize active" aria-current="page">Pricing</li>
                                </ul>
                            </nav>
                        </div>
                    
                        
                        <!-- Price start -->
                        <section class="section">
                            <div class="container place-items-center">
                               

                                <div class="row ">
                   
                    
                                    <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                                        <div class="card pricing pricing-primary business-rate shadow border-0 rounded">
                                            <div class="ribbon ribbon-right ribbon-warning overflow-hidden"><span class="text-center d-block shadow small h6">Best</span></div>
                                            <div class="card-body">
                                                <h6 class="title name  text-uppercase mb-4">Premium</h6>
                                                <div class="d-flex mb-4">
                                                    <span class="h1 mb-0 text-warning"><i data-feather="star" class="icons"></i></span>
                                                    <span class=" h1 mb-0 text-warning"><i data-feather="star" class="icons"></i></span>
                                                    <span class="h1 mb-0 text-warning"><i data-feather="star" class="icons"></i></span>
                                                    <span class="h1 mb-0 text-warning"><i data-feather="star" class="icons"></i></span>
                                                    <span class=" h1 mb-0 text-warning"><i data-feather="star" class="icons"></i></span>
                                                </div>
                
                                                <ul class="list-unstyled d-flex mb-0 ps-0">
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                        </span>$50,000</li>
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                        </span>-</li>
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                        </span>$100,000</li>
                                                </ul>
                
                                                <ul class="list-unstyled d-flex mb-0 ps-0">
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                        </span>10%</li>
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                        </span>ROI</li>
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                        </span>(weekly)</li>
                                                </ul>
                
                
                                               
                                                <a href="javascript:void(0)" class="btn btn-primary mt-4">Try It Now</a>
                                            </div>
                                        </div>
                                    </div><!--end col-->
                                    
                                    
                                    <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                                        <div class="card pricing pricing-primary business-rate shadow bg-light border-0 rounded">
                                            <div class="card-body">
                                                <h6 class="title name fw-bold text-uppercase mb-4">Deluxe</h6>
                                                <div class="d-flex mb-4">
                                                    <span class="h1 mb-0 text-warning"><i data-feather="star" class="icons"></i></span>
                                                    <span class=" h1 mb-0 text-warning"><i data-feather="star" class="icons"></i></span>
                                                    <span class="h1 mb-0 text-warning"><i data-feather="star" class="icons"></i></span>
                                                </div>
                                                
                                                <ul class="list-unstyled d-flex mb-0 ps-0">
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                    </span>$10,000</li>
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                    </span>-</li>
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                    </span>$49,999</li>
                                                </ul>
                                                
                                                <ul class="list-unstyled d-flex mb-0 ps-0">
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                    </span>7.5%</li>
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                    </span>ROI</li>
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                    </span>(weekly)</li>
                                                </ul>
                                                
                                                <a href="javascript:void(0)" class="btn btn-primary mt-4">Get Started</a>
                                            </div>
                                        </div>
                                    </div><!--end col-->
                
                                    <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                                        <div class="card pricing pricing-primary business-rate shadow border-0 rounded">
                                            <!-- <div class="ribbon ribbon-right ribbon-warning overflow-hidden"><span class="text-center d-block shadow small h6">Best</span></div> -->
                                            <div class="card-body">
                                                <h6 class="title name  text-uppercase mb-4">Standard</h6>
                                                <div class="d-flex mb-4">
                                                    <span class="h1 mb-0 text-warning"><i data-feather="star" class="icons"></i></span>
                                                    <span class=" h1 mb-0 text-warning"><i data-feather="star" class="icons"></i></span>
                                                </div>
                    
                                                <ul class="list-unstyled d-flex mb-0 ps-0">
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                        </span>$1,000</li>
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                        </span>-</li>
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                        </span>$9,999</li>
                                                </ul>
                    
                                                <ul class="list-unstyled d-flex mb-0 ps-0">
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                        </span>5%</li>
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                        </span>ROI</li>
                                                    <li class="h6 text-muted mb-0"><span class="icon h5 me-2">
                                                        </span>(weekly)</li>
                                                </ul>
                    
                    
                                               
                                                <a href="javascript:void(0)" class="btn btn-primary mt-4">Get Started</a>
                                            </div>
                                        </div>
                                    </div><!--end col-->
                                </div><!--end row-->
                            </div><!--end container-->

                          

                        </section><!--end section-->
                        <!-- Price End -->

                    </div>
                </div><!--end container-->

                <footer2/>
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