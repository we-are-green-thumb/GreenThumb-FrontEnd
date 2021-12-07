<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {

  name: "app",
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: block

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
