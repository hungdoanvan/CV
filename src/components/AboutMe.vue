<template>
  <!-- About-->
  <section data-aos="fade-right" class="resume-section" id="about">
    <div class="resume-section-content d-block">
      <div class="d-block d-lg-none col-sm-8 col-md-6 mx-auto">
        <img class="img-fluid img-profile rounded-circle mb-3" :src="avatar_link" alt="Avatar" />
        <h2 class="mb-4 text-center">{{first_name}} <span class="text-primary">{{last_name}}</span></h2>
      </div>
      <h1 class="mb-4 d-none d-lg-block">{{first_name}} <span class="text-primary">{{last_name}}</span></h1>
      <div class="subheading mb-5"><span class="font-weight-bold">Address:</span> {{ address }}
        <div class="d-block"><span class="font-weight-bold">Mobile Phone:</span> <a href="tel:+84775400703">{{ phone }}</a></div>
        <div class="d-block"><span class="font-weight-bold">Email:</span> <a :href="'mailto:' + email">{{ email }}</a></div>
      </div>
      <p class="lead mb-5 text-justify">{{ about_me }}</p>
      <div class="social-icons">
        <a class="social-icon a-no-move" v-bind:href="github_link" target="_blank"><i class="fab fa-github"></i></a>
        <a class="social-icon a-no-move" v-bind:href="linkedIn_link" target="_blank"><i class="fab fa-linkedin-in"></i></a>
      </div>
      <button class="btn btn-primary d-block mt-3" @click="takeShowUpdate()">edit</button>
      <!-- Modal update-->
          <div class="modal fade" id="editAboutMe" tabindex="-1" aria-labelledby="editLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">

                  <!-- full name -->
                  <div class="input-group mb-1">
                    <span class="input-group-text" id="basic-addon3">Full Name</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="dataChange.first_name">
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="dataChange.last_name">
                  </div>

                  <!-- address -->
                  <div class="input-group mb-1">
                    <span class="input-group-text" id="basic-addon3">Address:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="dataChange.address">
                  </div>

                  <!-- phone -->
                  <div class="input-group mb-1">
                    <span class="input-group-text" id="basic-addon3">Mobiel phone:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="dataChange.phone">
                  </div>

                  <!-- Email -->
                  <div class="input-group mb-1">
                    <span class="input-group-text" id="basic-addon3">Email:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="dataChange.email">
                  </div>

                  <!-- Introduce -->
                  <div class="input-group mb-1">
                    <span class="input-group-text" id="basic-addon3">Introduce:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="dataChange.about_me">
                  </div>
                  
                  <!-- GitHub Link -->
                  <div class="input-group mb-1">
                    <span class="input-group-text" id="basic-addon3">GitHub Link:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="dataChange.github_link">
                  </div>

                  <!-- In Link -->
                  <div class="input-group mb-1">
                    <span class="input-group-text" id="basic-addon3">In Link:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="dataChange.linkedIn_link">
                  </div>


                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="takeShowUpdate()">Close</button>
                  <button type="button" class="btn btn-primary" @click=" updateBasicInfor()" >Save changes</button>
                </div>
              </div>
            </div>
          </div>
    </div>

    
    
  </section>
</template>

<script>
import { get as getInformation } from '../firebase/information'
import { update as updateIformation } from "../firebase/information";
import { takeShow as takeShowAboutMe } from "../firebase/information"


export default {
  name: "AboutMe",
  props: {
    userId: String
  },
  data() {
    return {
      address: "",
      avatar_link: "",
      email: "",
      github_link: "",
      linkedIn_link: "",
      phone: "",
      first_name:"",
      last_name:"",
      about_me: "",
      dataChange:{
        address: "",
        avatar_link: "",
        email: "",
        github_link: "",
        linkedIn_link: "",
        phone: "",
        first_name:"",
        last_name:"",
        about_me:""
      }
    };
  },
  methods: {
    async fetchBasicInfo(){
      await getInformation(this.userId, 'basic_info').then(snap => {
        snap.forEach(doc => {
          this.address = doc.data().address
          this.avatar_link = doc.data().avatar_link
          this.email = doc.data().email
          this.full_name = doc.data().full_name
          this.github_link = doc.data().github_link
          this.linkedIn_link = doc.data().linkedIn_link
          this.phone = doc.data().phone
          this.first_name = doc.data().first_name
          this.last_name = doc.data().last_name
          this.about_me = doc.data().about_me
        })
      })
    },
    takeShowUpdate(){
      this.dataChange.address = this.address
      this.dataChange.avatar_link = this.avatar_link
      this.dataChange.email = this.email
      this.dataChange.github_link = this.github_link
      this.dataChange.linkedIn_link = this.linkedIn_link
      this.dataChange.phone = this.phone
      this.dataChange.first_name = this.first_name
      this.dataChange.last_name = this.last_name
      this.dataChange.about_me = this.about_me
      takeShowAboutMe('editAboutMe')
    },
    
    updateBasicInfor(){
      updateIformation(this.userId, 'basic_info', '0', this.dataChange)
      takeShowAboutMe('editAboutMe')
    }
  },
  async created(){
    this.fetchBasicInfo();
  },
  watch: {
    userId(val){
      this.userId = val;
    }
  }
};
</script>

<style></style>
