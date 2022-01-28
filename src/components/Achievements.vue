<template>
  <!-- Achievements-->
  <section data-aos="fade-right" class="resume-section" id="awards">
    <div class="resume-section-content">
      <h2 class="mb-5 text-primary">Achievements & Certifications</h2>
      <ul class="fa-ul mb-0">
        <li class="mb-3" v-for="(achievement , index) in data" :key="index">
          <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span
          >{{ achievement.data().value }} 
          <div class="d-inline float-right">
            <button class="btn btn-primary ml-4" @click="takeShowUpdate(achievement)">Edit</button>

            <button class="btn btn-primary ml-2 " @click="deleteData(achievement.id)">Delete</button>
          </div>
        </li>
      </ul>
      
      <!-- Modal update-->
          <div class="modal fade" id="editAchievements" tabindex="-1" aria-labelledby="editLabel" aria-hidden="true">
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
    
      <!-- Modal add-->
          <div class="modal fade" id="addAchievements" tabindex="-1" aria-labelledby="editLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <div class="input-group ">
                    <span class="input-group-text" id="basic-addon3">Value:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="dataChange.value">
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="takeShowAdd()">Close</button>
                  <button type="button" class="btn btn-primary" @click="addData()" >Add</button>
                </div>
              </div>
            </div>
          </div>
    </div>
  </section>
</template>

<script>
import { add as addInformation } from '../firebase/information'
import { update as updateIformation } from "../firebase/information";
import { get as getInformation } from "../firebase/information";
import { remove as removeInformation } from "../firebase/information";
import { takeShow as takeShowAchievements } from "../firebase/information"

export default {
  name: "Achievements",
  props: {
    userId: String
  },
  data() {
    return {
      data: [],
      achievementId: '',
      dataChange: {}
    };
  },
  methods: {
    takeShowUpdate(dataModal){
      this.dataChange= dataModal.data()
      this.achievementId = dataModal.id
      takeShowAchievements('editAchievements')
    },
    takeShowAdd(){
      takeShowAchievements('addAchievements')
    },
    async fetchData(){
      await getInformation(this.userId, 'achievements').then(snap => {
        snap.forEach(doc => {
          this.data.push(doc);
        })
      })
    },

    deleteData(data_id){
      removeInformation(this.userId, 'achievements' , data_id)
    },

    updateData(){
      updateIformation(this.userId, 'achievements' , this.achievementId, this.dataChange),
      takeShowAchievements('editAchievements')
    },

    addData(){
      addInformation(this.userId, 'achievements',this.dataChange)
      takeShowAchievements('addAchievements')
    },
    takeCloseUpdate(){
      takeShowAchievements('editAchievements')
    }
  },
  created() {
    this.fetchData()
  },
  watch: {
    userId(val){
      this.userId = val;
    }
  }
};
</script>

<style></style>
