<template>
      
    <div>
       
        
        <div class="back-to-home">
            <a href="" class="back-button btn btn-icon btn-primary"><i data-feather="arrow-left" class="icons"></i></a>
        </div>

        <!-- Hero Start -->
        <section class="bg-home d-flex align-items-center">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7 col-md-6">
                        <div class="me-lg-5">   
                            <img src="/images/user/recovery.svg" class="img-fluid d-block mx-auto" alt="">
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-6">
                        <div class="card shadow rounded border-0">
                            <div class="card-body">
                                <h4 class="card-title text-center">Recover Account</h4>  

                                <form class="login-form mt-4">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <p class="text-muted">Please enter your email address. You will receive a link to create a new password via email.</p>
                                            <div class="mb-3">
                                                <label class="form-label">Email address <span class="text-danger">*</span></label>
                                                <div class="form-icon position-relative">
                                                    <i data-feather="mail" class="fea icon-sm icons"></i>
                                                    <input type="email" class="form-control ps-5" placeholder="Enter Your Email Address" name="email" required>
                                                </div>
                                            </div>
                                        </div><!--end col-->
                                        <div class="col-lg-12">
                                            <div class="d-grid">
                                                <button class="btn btn-primary">Send</button>
                                            </div>
                                        </div><!--end col-->
                                        <div class="mx-auto">
                                            <p class="mb-0 mt-3">
                                                <small class="text-dark me-2">
                                                    Remember your password ?</small> 
                                                    <nuxt-link to="/login"  class="text-dark fw-bold">
                                                        Sign in</nuxt-link>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> <!--end col-->
                </div><!--end row-->
            </div> <!--end container-->
        </section><!--end section-->
        <!-- Hero End -->
        
    </div>
</template>