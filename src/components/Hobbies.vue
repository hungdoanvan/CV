<template>
  <!-- Interests-->
  <section data-aos="fade-right" class="resume-section" id="interests">
    <div class="resume-section-content">
      <h2 class="mb-5 text-primary text-justify">Interests</h2>
      <div
        class="mb-5 text-justify"
        v-for="(hobby, index) in hobbies" :key="index"
      >
        {{ hobby.data().value }}

        <div class="d-inline float-right">
            <button class="btn btn-primary ml-4" @click="takeShowUpdate(hobby)">Edit</button>

            <button class="btn btn-primary ml-2 " @click="deleteData(hobby.id)">Delete</button>
          </div>
      </div>

      <!-- Modal update-->
          <div class="modal fade" id="editHobbies" tabindex="-1" aria-labelledby="editLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon3">Value:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="dataChange.value">
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

          <!-- Modal Add-->
          <div class="modal fade" id="addHobbies" tabindex="-1" aria-labelledby="editLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon3">Value</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="dataChange.value">
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="takeShowAdd()">Close</button>
                  <button type="button" class="btn btn-primary" @click="addData()" >Save changes</button>
                </div>
              </div>
            </div>
          </div>
    </div>
  </section>
</template>

<script>
import { get as getInformation } from "../firebase/information";
import { update as updateIformation } from "../firebase/information";
import { remove as removeInformation } from "../firebase/information";
import { takeShow as takeShowHobbies } from "../firebase/information"
import { add as addInformation } from '../firebase/information'


export default {
  name: "Hobbies",
  props: {
    userId: String
  },
  data() {
    return {
      hobbies :[],
      dataChangeId:'',
      dataChange:{
        value:''
      }
    };
  },
  methods:{
    async fetchData(){
      await getInformation(this.userId, 'hobbies').then(snap => {
        snap.forEach(doc => {
          this.hobbies.push(doc);
        })
      })
    },
    takeShowUpdate(dataModal){
      this.dataChange= dataModal.data()
      this.dataChangeId = dataModal.id
      takeShowHobbies('editHobbies')
    },
    updateData(){
      updateIformation(this.userId, 'hobbies' , this.dataChangeId, this.dataChange),
      takeShowHobbies('editHobbies')
    },
    takeCloseUpdate(){
      takeShowHobbies('editHobbies')
    },
    deleteData(data_id){
      removeInformation(this.userId, 'hobbies' , data_id)
    },
    takeShowAdd(){
      takeShowHobbies('addHobbies')
    },
    addData(){
      addInformation(this.userId, 'hobbies',this.dataChange)
      takeShowHobbies('addHobbies')
    }

  },
  created(){
    this.fetchData()
  }
};
</script>

<style></style>
