<template>
  <div>
    <!-- <form action="">
      <input
        v-bind="fileList"
        id="chooseFile"
        type="file"
        accept="image/*"
        multiple
        @change="filechange"
      />
      <button >제출</button>
    </form>
     -->
    <form>
    <input type="file" name="image" id="upload">
    <button @click="uploadFile()">제출2</button>
    </form>
  </div>
</template>
<script>
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