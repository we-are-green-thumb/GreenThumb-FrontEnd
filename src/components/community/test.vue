<template>
  <div>
    <input type="file" id="input_img" @change="fileChange()" accept="image/*">

  </div>
</template>
<script>

import $ from 'jquery';

export default {

    data() {
        return {
             fileList :[],
            fileUrl :""
        }
    },
 //dart
  
    created() {
//            const imgbbUploader = require("imgbb-uploader");
//     imgbbUploader("076f41cee131349132a08f6320271a31", "path/to/your/image.png")
//   .then((response) => console.log(response))
//   .catch((error) => console.error(error));
    },
    methods: {
        filechange(e){
            console.log(e.target.files[0]);
         this.fileUrl = e.target.files[0].name;
      },
      uploadFile(){
    const fileInput = document.getElementById("upload");
    const upload = (file) => {
        if (file && file.size < 5000000) {
            const formData = new FormData();

            formData.append("image", file);
            fetch("https://api.imgur.com/3/image", {
                method: "POST",
                headers: {
                    Authorization: "7fae8f2c0a383d6",
                    Accept: "application/json",
                },
                body: formData,
            })
                .then((response) => response.json())
                .then((response) => {
                    console.log(response);
                    // do Something
                });
        } else {
            console.error("파일 용량 초과");
        }
    };

    fileInput &&
        fileInput.addEventListener("change", () => {
            upload(fileInput.files[0]);
        });
}
    },
}
</script>
