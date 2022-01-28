<template>
  <!-- Employment History-->
  <section data-aos="fade-right" class="resume-section" id="employment">
    <div class="resume-section-content">
      <h2 class="mb-5 text-primary">Employment History</h2>
      <div 
        class="d-flex flex-column flex-md-row justify-content-between mb-5"
        v-for="(exp, idx) in employment_history" :key="idx"
      >
        <div class="flex-grow-1">
          <h3 class="mb-0">{{ exp.data().position }}</h3>
          <div class="subheading mb-3">{{ exp.data().institution }}</div>
          <p>{{ exp.data().description }}</p>

        </div>
        <div class="flex-shrink-0">
          <span class="text-primary d-block">{{ exp.data().start }} – {{ exp.data().end }}</span>
          <div class="d-block mt-3 float-right">
            <button class="btn btn-primary ml-2  " @click="takeShowUpdate(exp)">Edit</button>
            <button class="btn btn-primary ml-2" @click="deleteData(exp.id)" >Delete</button>
          </div>
        </div>
      </div>
          <!-- Modal update-->
          <div class="modal fade" id="editExperiences" tabindex="-1" aria-labelledby="editLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">

                  <!-- position -->
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon3">position:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="employmentHistoryChange.position">
                  </div>

                  <!-- institution -->
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon3">institution:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="employmentHistoryChange.institution">
                  </div>

                  <!-- description -->
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon3">description:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="employmentHistoryChange.description">
                  </div>

                  <!-- start-end -->
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon3">start-end</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="employmentHistoryChange.start">
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="employmentHistoryChange.end">
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="takeCloseUpdate()">Close</button>
                  <button type="button" class="btn btn-primary" @click="updateData()" >Save changes</button>
                </div>
              </div>
            </div>
          </div>
        <button class="btn btn-primary ml-3 float-right" @click="takeShowAdd()">ADD</button>

        <!-- Modal add-->
          <div class="modal fade" id="addExperiences" tabindex="-1" aria-labelledby="editLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon3">position:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="employmentHistoryChange.position">
                  </div>

                  <!-- institution -->
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon3">institution:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="employmentHistoryChange.institution">
                  </div>

                  <!-- description -->
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon3">description:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="employmentHistoryChange.description">
                  </div>

                  <!-- start-end -->
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon3">start-end:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="employmentHistoryChange.start">
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="employmentHistoryChange.end">
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="takeShowAdd()">Close</button>
                  <button type="button" class="btn btn-primary" @click="addData( )" >Add</button>
                </div>
              </div>
            </div>
          </div>
    </div>
  </section>
</template>

<script>
import { get as getInformation } from "../firebase/information";
import { add as addInformation } from '../firebase/information'
import { takeShow as takeShowExperiences } from "../firebase/information"
import { remove as removeExperiences } from "../firebase/information";
import { update as updateExperiences } from "../firebase/information";

export default {
  name: "Experiences",
  props: {
    userId: String
  },
  data() {
    return {
      employment_history : [],
      employmentHistoryChangeId:'',
      employmentHistoryChange:{}
    };
  },
  methods:{
    async fetchData(){
      await getInformation(this.userId, 'employment_history').then(snap => {
        snap.forEach(doc => {
          this.employment_history.push(doc);
        })
      })
    },
    takeShowUpdate(exp){
      this.employmentHistoryChange = exp.data()
      this.employmentHistoryChangeId = exp.id
      takeShowExperiences('editExperiences')
    },
    deleteData(data_id){
      removeExperiences(this.userId, 'employment_history', data_id)
    },
    updateData(){
      updateExperiences(this.userId, 'employment_history' , this.employmentHistoryChangeId, this.employmentHistoryChange)
      takeShowExperiences('editExperiences')
    },
    takeShowAdd(){
      takeShowExperiences('addExperiences')
    },
    addData(){
      addInformation(this.userId, 'employment_history', this.employmentHistoryChange)
      takeShowExperiences('addExperiences')
    },
    takeCloseUpdate(){
      takeShowExperiences('editExperiences')
    }
  },
  created(){
    this.fetchData()
  }
};
</script>

<style></style>
