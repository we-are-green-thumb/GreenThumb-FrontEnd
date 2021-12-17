<template>
  <div>
    <input type="file" id="input_img" @change="fileChange()" accept="image/*">
  </div>
</template>
<script>

import $ from 'jquery';

export default {
  methods: {
    fileChange() {
   var file = document.getElementById('input_img');
   var form = new FormData();
   form.append("image", file.files[0])

   var settings = {
      "url": "https://api.imgbb.com/1/upload?key=076f41cee131349132a08f6320271a31",
      "method": "POST",
      "timeout": 0,
      "processData": false,
      "mimeType": "multipart/form-data",
      "contentType": false,
      "data": form
   };

   $.ajax(settings).done(function(response) {
      console.log(response);
      var jx = JSON.parse(response);
      console.log(jx.data.url);

   });
  },
}
}
</script>
<style>
  
</style>