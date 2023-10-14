<template>

    <!-- Footer Start -->
    <footer class="footer">    
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="footer-py-60">
                        <div class="row">
                            <div class="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                                <a href="#" class="logo-footer  ">
                                    <img class="logo-footer2" src="/images/alog/logo_1-removebg.png" height="60" alt="">
                                </a>
                                <p class="mx-auto mb-0">Start working with 
                                Foxvale
                                that can provide everything you need to generate 
                                massive profitable investment</p>
                                <ul class="list-unstyled social-icon  foot-social-icon mb-0 mt-4">
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="facebook" class="fea icon-sm fea-social"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="instagram" class="fea icon-sm fea-social"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="twitter" class="fea icon-sm fea-social"></i></a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="linkedin" class="fea icon-sm fea-social"></i></a></li>
                                </ul><!--end icon-->
                            </div><!--end col-->
                            
                            <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h5 class="footer-head">Company</h5>
                                <ul class="list-unstyled footer-list mt-4">
                                    <li><a href="javascript:void(0)" class="text-foot"><i class="uil uil-angle-right-b me-1"></i> About us</a></li>
                                    <li><a href="javascript:void(0)" class="text-foot"><i class="uil uil-angle-right-b me-1"></i> Services</a></li>
                                    <li><a href="javascript:void(0)" class="text-foot"><i class="uil uil-angle-right-b me-1"></i> Pricing</a></li>
                                    <li><a href="javascript:void(0)" class="text-foot"><i class="uil uil-angle-right-b me-1"></i> Login</a></li>
                                </ul>
                            </div><!--end col-->
                            
                            <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h5 class="footer-head">Usefull Links</h5>
                                <ul class="list-unstyled footer-list mt-4">
                                    <li><a href="javascript:void(0)" class="text-foot"><i class="uil uil-angle-right-b me-1"></i> Terms of Services</a></li>
                                    <li><nuxt-link to="/privacy" class="text-foot"><i class="uil uil-angle-right-b me-1"></i> Privacy Policy</nuxt-link></li>
                                    <li><a href="javascript:void(0)" class="text-foot"><i class="uil uil-angle-right-b me-1"></i> Documentation</a></li>
                                </ul>
                            </div><!--end col-->
        
                            <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h5 class="footer-head">Newsletter</h5>
                                <p class="mt-4">Sign up and receive the latest tips via email.</p>
                                <form>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="foot-subscribe mb-3">
                                                <label class="form-label">Write your email <span class="text-danger">*</span></label>
                                                <div class="form-icon position-relative">
                                                    <i data-feather="mail" class="fea icon-sm icons"></i>
                                                    <input type="email" name="email" id="emailsubscribe" class="form-control ps-5 rounded" placeholder="Your email : " required>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="d-grid">
                                                <input type="submit" id="submitsubscribe" name="send" class="btn btn-soft-primary" value="Subscribe">
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div><!--end col-->
                        </div><!--end row-->
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->

        <div class="footer-py-30 footer-bar">
            <div class="container text-center">
                <div class="row align-items-center">
                    <div class="col-sm-6">
                        <div class="text-sm-start">
                            <p class="mb-0">© 
                                Foxvale. Design with <i class="mdi mdi-heart text-danger">
                                </i> by <a href="#" target="_blank" 
                                class="text-reset">Amazing</a>.</p>
                        </div>
                    </div><!--end col-->

                    <div class="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <ul class="list-unstyled text-sm-end mb-0">
                            <li class="list-inline-item"><a href="javascript:void(0)"><img src="/images/payments/american-ex.png" class="avatar avatar-ex-sm" title="American Express" alt=""></a></li>
                            <li class="list-inline-item"><a href="javascript:void(0)"><img src="/images/payments/discover.png" class="avatar avatar-ex-sm" title="Discover" alt=""></a></li>
                            <li class="list-inline-item"><a href="javascript:void(0)"><img src="/images/payments/master-card.png" class="avatar avatar-ex-sm" title="Master Card" alt=""></a></li>
                            <li class="list-inline-item"><a href="javascript:void(0)"><img src="/images/payments/paypal.png" class="avatar avatar-ex-sm" title="Paypal" alt=""></a></li>
                            <li class="list-inline-item"><a href="javascript:void(0)"><img src="/images/payments/visa.png" class="avatar avatar-ex-sm" title="Visa" alt=""></a></li>
                        </ul>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </div>
    </footer><!--end footer-->
    <!-- Footer End -->   
    
</template>

<style scoped>
.logo-footer{
    background:#fff;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 9999px;
}

.footer{
    color: #adb5bd !important;
    background: #202942 !important;
    position: relative;
    height: 100%;
}
.container{
    color: #adb5bd !important;
    background: #202942 !important;
    position: relative;
}

</style>