<template>
  <div id="app">
    <navigation />

    <about-me :userId="userId" />
    <hr class="m-0" />

    <educations :userId="userId" />
    <hr class="m-0" />

    <experiences :userId="userId" />
    <hr class="m-0" />

    <skills :userId="userId" />
    <hr class="m-0" />

    <hobbies :userId="userId" />
    <hr class="m-0" />

    <achievements :userId="userId" />
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import AboutMe from "../components/AboutMe.vue";
import Educations from "../components/Educations.vue";
import Experiences from "../components/Experiences.vue";
import Skills from "../components/Skills.vue";
import Hobbies from "../components/Hobbies.vue";
import Achievements from "../components/Achievements.vue"

export default {
  name: "Home",
  components: {
    Navigation,
    AboutMe,
    Educations,
    Experiences,
    Skills,
    Hobbies,
    Achievements  
  },
  data() {
    return {
      userId: this.$route.params.user_id || '0'
    };
  }
};
</script>

<style>
</style>
