<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <!-- <router-link to="/about">About</router-link> -->
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
  </div>

  <button @click="redirect">Redirect</button>
  <button @click="back">Go Back</button>
  <button @click="forward">Forward</button>
  <router-view />
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name : 'Home'})
    },
    back() {
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(1)
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  padding: 10px;
  text-decoration: none;
  border-radius: 5px;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  background-color: crimson;
  color: #fff;
}

button{
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}
</style>
