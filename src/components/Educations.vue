<template>
  <!-- Education & Training-->
  <section data-aos="fade-right" class="resume-section" id="education">
    <div class="resume-section-content">
      <h2 class="mb-5 text-primary">Education and Training</h2>
      <div 
        class="d-flex flex-column flex-md-row justify-content-between mb-5"
        v-for="(education, idx) in educations" :key="idx"
      >
        <div class="flex-grow-1">
          <h3 class="mb-0">{{ education.data().major }}</h3>
          <div class="subheading mb-3">{{ education.data().school }}</div>
          <p v-if="education.data().gpa !== ''">GPA: <a href="**/score">{{ education.data().gpa }}</a></p>
        </div>
        <div class="flex-shrink-0">
          <span class="text-primary d-block">{{education.data().start}} - {{education.data().end}}</span>
          <div class="d-block mt-3 float-right">
            <button class="btn btn-primary ml-2 " @click="takeShowUpdate(education)">Edit</button>
            <button class="btn btn-primary ml-2" @click="deleteData(education.id)" >Delete</button>
          </div>
        </div>
      </div>
      <!-- Modal update-->
          <div class="modal fade" id="editEducations" tabindex="-1" aria-labelledby="editLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">

                  <!-- Major -->
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon3">Major:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="educationsChange.major">
                  </div>

                  <!-- School -->
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon3">School:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"
                    v-model="educationsChange.school">
                  </div>

                <!-- start-end -->
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon3">start-end:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"
                    v-model="educationsChange.start">
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"
                    v-model="educationsChange.end">
                  </div>

                  <!-- GPA -->
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon3">GPA:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="educationsChange.gpa">
                  </div>

                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                  <button type="button" class="btn btn-primary" @click="updateData()" >Save changes</button>
                </div>
              </div>
            </div>
          </div>
      <button class="btn btn-primary ml-3 float-right" @click="takeShowAdd()">ADD</button>

      <!-- Modal add-->
          <div class="modal fade" id="addEducations" tabindex="-1" aria-labelledby="editLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  
                  <!-- Major -->
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon3">Major:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="educationsChange.major">
                  </div>

                  <!-- School -->
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon3">School:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"
                    v-model="educationsChange.school">
                  </div>

                <!-- start-end -->
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon3">start-end:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"
                    v-model="educationsChange.start">
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"
                    v-model="educationsChange.end">
                  </div>

                  <!-- GPA -->
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon3">GPA:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="educationsChange.gpa">
                  </div>
                  
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="takeCloseAdd()">Close</button>
                  <button type="button" class="btn btn-primary" @click="addData()" >Add</button>
                </div>
              </div>
            </div>
          </div>
    </div>
  </section>
</template>

<script>
import { get as getInformation } from "../firebase/information";
import { takeShow as takeShowEducations } from "../firebase/information";
import { remove as removeInformation } from "../firebase/information";
import { update as updateIformation } from "../firebase/information";
import { add as addInformation } from '../firebase/information'

export default {
  name: "Educations",
  props: {
    userId: String
  },
  data() {
    return {
      educations : [],
      educationsId:'',
      educationsChange:{
        gpa:''
      }
    };
  },
  methods:{
    async fetchData(){
      await getInformation(this.userId, 'educations').then(snap => {
        snap.forEach(doc =>{
          this.educations.push(doc)
        })
      })
    },
  takeShowUpdate(dataModal){
    this.educationsChange= dataModal.data()
    this.educationsId = dataModal.id
    takeShowEducations('editEducations')
  },
  deleteData(data_id){
    removeInformation(this.userId, 'educations', data_id)
    console.log(data_id);
  },
  updateData(){
    updateIformation(this.userId, 'educations' , this.educationsId, this.educationsChange),
    takeShowEducations('editEducations')
  },
  takeShowAdd(){
    takeShowEducations('addEducations')
  },
  addData(){
    addInformation(this.userId, 'educations',this.educationsChange)
    takeShowEducations('addEducations')
  },
  takeCloseUpdate(){
    takeShowEducations('addEducations')
  }
  },
  created(){
    this.fetchData()
  }
};
</script>

<style></style>
