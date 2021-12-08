<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "app",
  components : {
 
  }
}
</script>

<style>
#app {
  width: 100%;
  display: block;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}
 hr {
  background-color: #009900;
}

/*body {
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
} */
</style>
