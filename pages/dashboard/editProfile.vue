<template>

    <div>

        <div class="page-wrapper toggled">
          <sidebar/>

            <!-- Start Page Content -->
            <main class="page-content bg-light">
                <!-- Top Header -->
               <Topheader/>

                <div class="container-fluid">
                    <div class="layout-specing">
                        <div class="d-md-flex justify-content-between align-items-center">
                            <h5 class="mb-0">Account Setting</h5>

                            <nav aria-label="breadcrumb" class="d-inline-block mt-2 mt-sm-0">
                                <ul class="breadcrumb bg-transparent rounded mb-0 p-0">
                                    <li class="breadcrumb-item text-capitalize"><nuxt-link to="/dashboard">Foxvale</nuxt-link></li>
                                    <li class="breadcrumb-item text-capitalize"><nuxt-link to="/dashboard/profile">Account Details</nuxt-link></li>
                                    <li class="breadcrumb-item text-capitalize active" aria-current="page">Account Settings</li>
                                </ul>
                            </nav>
                        </div>
                    
                        <div class="row">
                            <div class="col-lg-5 mt-4">
                                <div class="card border-0 rounded shadow">
                                    <div class="card-body">
                                        <h5 class="text-md-start text-center mb-0">Personal Detail :</h5>
        
                                        <div class="mt-4 text-md-start text-center d-sm-flex">
                                            <img :src="store.user.image" class="avatar float-md-left avatar-medium rounded-circle shadow me-md-4" alt="">
                                            
                                        </div>
                                        <div class=" mt-2 mb-0">
                                            <button class="btn btn-primary">Edit profile picture
                                                
                                            </button>
                                        </div><!--end col-->
        
                                        <form>
                                            <div class="row mt-4">
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">First Name</label>
                                                        <div class="form-icon position-relative">
                                                            <input name="name" id="first" type="text" class="form-control ps-5" placeholder="First Name :">
                                                        </div>
                                                    </div>
                                                </div><!--end col-->
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Last Name</label>
                                                        <div class="form-icon position-relative">
                                                            <input name="name" id="last" type="text" class="form-control ps-5" placeholder="Last Name :">
                                                        </div>
                                                    </div>
                                                </div><!--en'.d col-->
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Your Email</label>
                                                        <div class="form-icon position-relative">
                                                            <i data-feather="mail" class="fea icon-sm icons"></i>
                                                            <input name="email" id="email" type="email" class="form-control ps-5" placeholder="Your email :">
                                                        </div>
                                                    </div> 
                                                </div><!--end col-->
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Birthday</label>
                                                        <div class="form-icon position-relative">
                                                            <input name="name" id="occupation" type="text" class="form-control ps-5" placeholder="Birthday :">
                                                        </div>
                                                    </div> 
                                                </div><!--end col-->
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Address</label>
                                                        <div class="form-icon position-relative">
                                                            <input name="name" id="address" type="text" class="form-control ps-5" placeholder="Address :">
                                                        </div>
                                                    </div> 
                                                </div><!--en d col-->
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Phone No</label>
                                                        <div class="form-icon position-relative">
                                                            <input name="number" id="number" type="number" class="form-control ps-5" placeholder="Phone No :">
                                                        </div>
                                                    </div> 
                                                </div><!--end col-->
                                                <div class="col-md-12">
                                                    <div class="mb-3">
                                                        <label class="form-label">Upload Document</label>
                                                        <div class="form-icon position-relative">
                                                            <!-- <i data-feather="" class="fea icon-sm icons"></i> -->
                                                            <input name="document" id="document" type="file" class=" form-control"
                                                            placeholder="upload document">
                                                        </div>
                                                    </div> 
                                                </div><!--end col-->
                                               
                                            </div><!--end row-->
                                            <div class="row">
                                                <div class="col-sm-12">
                                                    <input type="submit" id="submit" name="send" class="btn btn-primary" value="Save Changes">
                                                </div><!--end col-->
                                            </div><!--end row-->
                                        </form><!--end form-->
                                    </div>
                                </div>

                               
                            </div><!--end col-->

                           

                        </div><!--end row-->
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

import {useStore}  from "@/stores/index"

import {validateEmail,baseURL} from "@/composables/mixins";

const store = useStore()

const firstname = ref("")
const lastname = ref("")
const birthday = ref("")
const address = ref("")
const phoneNo = ref("")
const document = ref("")




const submitForm = async()=>{
    // validate if the email is valid
    if(!validateEmail(email.value)) return message.value = "Invalid email address";
    
    // validate password
    if(password.value.length < 6) return message.value = "Password must be atleast 6 characters long!";

    const userInfo = {
        name: firstname.value +" "+lastname.value,
        birthday: birthday.value, 
        address: address.value,
        number: phoneNo.value,
        idfile:document.value
    }
    try{

        const data = await fetch("`baseURL/user/update-user/653796ed51b8df43e4f438dd`",{
            method: "UPDATE",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(userInfo)

        }).then(res=>res.json())
    }catch(error){
        console.error("Error:", error);
    }
}


</script>