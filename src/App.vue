<template>
  <div id="app">
    <Header/>
    <NavigationBar/>
    <router-view/>
    <Footer/>

  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import NavigationBar from "./components/NavigationBar.vue"
import Header from "./components/Header.vue";

export default {
  name: "app",
  components : {
    Footer,
    Header,
    NavigationBar
  }
}
</script>

<style>
#app {
  display: block;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  

}
hr {
  background-color: #009900;
}

body {
  /* text-align: center; */
  background-color: #f6f6f6;
  margin-top: 0px;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  color: #2c3e50;
  margin-top: 0px;
  display: block;
}
</style>
