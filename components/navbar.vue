<template>
    <!-- Navbar Start -->
    <header id="topnav" class="defaultscroll sticky">
        <div class="container">
            <!-- Logo container-->
            <a class="logo" href="index.html">
                <img src="/images/alog/logo_1-removebg.png" height="60" class="logo-light-mode" alt="">
                <img src="/images/alog/logo_1-removebg.png" height="60" class="logo-dark-mode" alt="">
            </a>                
            <!-- Logo End -->

            <!-- End Logo container-->
            <div class="menu-extras">
                <div class="menu-item">
                    <!-- Mobile menu toggle-->
                    <a class="navbar-toggle" id="isToggle" onclick="toggleMenu()">
                        <div class="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </a>
                    <!-- End mobile menu toggle-->
                </div>
            </div>

            <!--Login button Start-->
            <ul class="buy-button list-inline mb-0">
                <li class="list-inline-item mb-0">
                    <a href="javascript:void(0)" data-bs-toggle="offcanvas" 
                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <div class="btn btn-icon btn-pills btn-soft-primary">
                            <i data-feather="settings" class="fea icon-sm"></i></div>
                    </a>
                </li>
                
                <li class="list-inline-item ps-1 mb-0">
                    <a href="#" target="_blank">
                        <div class="btn btn-icon btn-pills btn-primary"><i data-feather="shopping-cart" 
                            class="fea icon-sm"></i></div>
                    </a>
                </li>
            </ul>
            <!--Login button End-->

            <div id="navigation">
                <!-- Navigation Menu-->   
                <ul class="navigation-menu">
                    <li><nuxt-link to="/"  class="sub-menu-item">Home</nuxt-link></li>
                    <li><nuxt-link to="about"  class="sub-menu-item">About</nuxt-link></li>
                    <li><nuxt-link to="/login" class="sub-menu-item">Login</nuxt-link></li>
                    <li><nuxt-link to="/signup" class="sub-menu-item">Register</nuxt-link></li>
               
                </ul><!--end navigation menu-->
            </div><!--end navigation-->
        </div><!--end container-->
    </header><!--end header-->
    <!-- Navbar End -->
</template>



<style scoped>
#topnav{
    background-color: #fff;
}
.sub-menu-item{
    color: black !important;
}
</style>