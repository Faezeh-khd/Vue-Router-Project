<template>
    <h1>Jobs Details page</h1>
    <!-- <p>The job id is {{ $route.params.id }}</p> -->
    <p>The job id is {{ id }}</p>
    
</template>

<script>
export default {
    props : ['id'],
    // data(){
    //     return{
    //         id : this.$route.params.id
    //     }
    // }
}
</script>