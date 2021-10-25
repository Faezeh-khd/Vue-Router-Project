<template>
  <h1>jobs</h1>
  <div v-for="job in jobs" :key="job.id" >
     <router-link :to="{ name: 'JobsDetails', params: {id : job.id}}" class="job">
        <h2>{{job.title}}</h2>
     </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: "FrontEnd developer", id: 1, details: "Lorem1" },
        { title: "BackEnd developer", id: 2, details: "Lorem2" },
        { title: "React developer", id: 3, details: "Lorem3" },
      ],
    };
  },
};
</script>

<style>
.job a{
  text-decoration: none;
}
.job h2{
  background: #f4f4f4;
  padding: 20px;
  background-repeat: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h2:hover{
  background: #ddd;
}

</style>
