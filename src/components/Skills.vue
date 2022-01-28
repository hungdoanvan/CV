<template>
  <!-- Skills-->
  <section data-aos="fade-right" class="resume-section" id="skills">
    <div class="resume-section-content">
      <h2 class="mb-5 text-primary">Skills</h2>
      <div class="subheading mb-3">Programming Languages, Database & Tools</div>
      <ul class="list-inline dev-icons">
        <li class="list-inline-item"><i class="fab fa-html5"></i></li>
        <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
        <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
        <li class="list-inline-item"><i class="fab fa-bootstrap"></i></li>
        <li class="list-inline-item"><i class="fab fa-sass"></i></li>
        <li class="list-inline-item"><i class="fab fa-vuejs"></i></li>
        <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
        <li class="list-inline-item"><i class="fab fa-java"></i></li>
        <li
          class="list-inline-item"
          v-for="(programing, idx) in programings"
          :key="idx"
        >
          <img
            :src="programing.data().img_link"
            :style="{ width: programing.data().width + 'rem' }"
            :alt="'programing' + idx"
            style="filter: grayscale(100%)"
          />
        </li>
        <li class="list-inline-item"><i class="fab fa-git"></i></li>
        <li class="list-inline-item"><i class="fab fa-npm"></i></li>
      </ul>
      <div class=" mt-4 mb-3">
        <div class="subheading d-inline">Languages</div>
        <button class="btn btn-primary float-right d-inline" @click="takeShowAdd('addSkillslanguages')">add</button>
      </div>
      <ul class="fa-ul mt-3 mb-0">
        <li class="mb-3" v-for="(language, idx) in languages" :key="idx">
          <span class="fa-li"><i class="fas fa-check"></i></span
          >{{ language.data().name }}:
          {{ language.data().level }}

          <div class="btn-group float-right" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary" @click="takeShowUpdate('editSkillsLanguage', language)">edit</button>
            <button type="button" class="btn btn-primary" @click="deleteData(language.id, 'languages')">delete</button>
          </div>

        </li>

        <!-- Modal update languages-->
          <div class="modal fade" id="editSkillsLanguage" tabindex="-1" aria-labelledby="editLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon3">Languages:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="dataChange.name">
                    <span class="input-group-text" id="basic-addon3">Level</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="dataChange.level">
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="takeCloseUpdate('editSkillsLanguage')">Close</button>
                  <button type="button" class="btn btn-primary" @click="updateData('languages', 'editSkillsLanguage')" >Save changes</button>
                </div>
              </div>
            </div>
          </div>
      </ul>
      <div class=" mt-4 mb-3">
        <div class="subheading d-inline">technical</div>
        <button class="btn btn-primary float-right d-inline" @click="takeShowAdd('addSkillstechnicals')">add</button>
      </div>
      <ul class="fa-ul mb-0">
        <li class="mb-3" v-for="(tech, idx) in technicals" :key="idx">
          <span class="fa-li"><i class="fas fa-check"></i></span>
          {{ tech.data().value }}

          <div class="btn-group float-right" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary" @click="takeShowUpdate('editSkillstechnicals',tech)">edit</button>
            <button type="button" class="btn btn-primary" @click="deleteData(tech.id,'technical')">delete</button>
          </div>
        </li>

        <!-- Modal update technicals-->
          <div class="modal fade" id="editSkillstechnicals" tabindex="-1" aria-labelledby="editLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon3">technical:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="dataChange.value">
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="takeCloseUpdate('editSkillstechnicals')">Close</button>
                  <button type="button" class="btn btn-primary" @click="updateData('technical', 'editSkillstechnicals')" >Save changes</button>
                </div>
              </div>
            </div>
          </div>
      </ul>
      <div class=" mt-4 mb-3">
        <div class="subheading d-inline">Workflow</div>
        <button class="btn btn-primary float-right d-inline" @click="takeShowAdd('addSkillsworkflow')">add</button>
      </div>
      <ul  class="fa-ul mt-3 mb-0s">
        <li class="mb-3" v-for="(wf, idx) in workflow" :key="idx">
          <span class="fa-li"><i class="fas fa-check"></i></span>
          {{ wf.data().value }}

          <div class="btn-group float-right" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary" @click="takeShowUpdate('editSkillstWorkflow',wf)">edit</button>
            <button type="button" class="btn btn-primary" @click="deleteData(wf.id,'workflow')">delete</button>
          </div>
        </li>

        <!-- Modal update Workflow-->
          <div class="modal fade" id="editSkillstWorkflow" tabindex="-1" aria-labelledby="editLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon3">technical:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="dataChange.value">
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="takeCloseUpdate('editSkillstWorkflow')">Close</button>
                  <button type="button" class="btn btn-primary" @click="updateData('workflow', 'editSkillstWorkflow')" >Save changes</button>
                </div>
              </div>
            </div>
          </div>
      </ul>

      <!-- Modal add languages-->
          <div class="modal fade" id="addSkillslanguages" tabindex="-1" aria-labelledby="editLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <div class="input-group ">
                    <span class="input-group-text" id="basic-addon3">Name:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="dataAdd.name">
                    <span class="input-group-text" id="basic-addon3">Level:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="dataAdd.level">
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="takeShowAdd('addSkillslanguages')">Close</button>
                  <button type="button" class="btn btn-primary" @click="addData('addSkillslanguages', 'languages')" >Add</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal add technicals-->
          <div class="modal fade" id="addSkillstechnicals" tabindex="-1" aria-labelledby="editLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <div class="input-group ">
                    <span class="input-group-text" id="basic-addon3">technical:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="dataAdd.value">
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="takeShowAdd('addSkillsTechWf')">Close</button>
                  <button type="button" class="btn btn-primary" @click="addData('addSkillstechnicals', 'technical')" >Add</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal add workflow-->
          <div class="modal fade" id="addSkillsworkflow" tabindex="-1" aria-labelledby="editLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <div class="input-group ">
                    <span class="input-group-text" id="basic-addon3">workflow:</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="dataAdd.value">
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="takeShowAdd('addSkillsTechWf')">Close</button>
                  <button type="button" class="btn btn-primary" @click="addData('addSkillsworkflow', 'workflow', dataAdd)" >Add</button>
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
import { takeShow as takeShowSkill } from "../firebase/information"
import { add as addInformation } from '../firebase/information'
export default {
  name: "Skills",
  props: {
    userId: String
  },
  data() {
    return {
      programings: [],
      technicals: [],
      workflow: [],
      languages: [],
      dataChangeId:'',
      dataChange:{},
      dataAdd:{}
    };
  },
  methods: {
    async fetchDataProgramings(){
      await getInformation(this.userId, 'programing_icon').then(snap => {
        snap.forEach(doc => {
          this.programings.push(doc);
        })
      })
    },
    async fetchDataTechnicals(){
      await getInformation(this.userId, 'technical').then(snap => {
        snap.forEach(doc => {
          this.technicals.push(doc);
        })
      })
    },
    async fetchDataWorkflow(){
      await getInformation(this.userId, 'workflow').then(snap => {
        snap.forEach(doc => {
          this.workflow.push(doc);
        })
      })
    },
    async fetchDataLanguages(){
      await getInformation(this.userId, 'languages').then(snap => {
        snap.forEach(doc => {
          this.languages.push(doc);
        })
      })
    },
    takeShowUpdate(modalId,dataModal){
      takeShowSkill(modalId)
      this.dataChange = dataModal.data()
      this.dataChangeId = dataModal.id
    },
    takeShowAdd(modalId){
      takeShowSkill(modalId)
    },
    deleteData(data_id,collection_name){
      removeInformation(this.userId, collection_name, data_id)
    },
    updateData(collection_name, modalId){
      updateIformation(this.userId, collection_name , this.dataChangeId, this.dataChange),
      takeShowSkill(modalId)
    },
    addData(modalId, collection_name){
      addInformation(this.userId, collection_name, this.dataAdd)
      takeShowSkill(modalId)
    },
    takeCloseUpdate(modalId){
      takeShowSkill(modalId)
    }
  },
  created(){
    this.fetchDataProgramings(),
    this.fetchDataTechnicals(),
    this.fetchDataWorkflow(),
    this.fetchDataLanguages()
  }
};
</script>

<style></style>
