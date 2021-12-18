<template>
    <div>
           <input v-bind="fileList" id="chooseFile" type="file" accept="image/*" multiple @change="filechange"/>

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
    // FormData formdata = FormData.fromJson({
    // 'key':'076f41cee131349132a08f6320271a31',
    // 'image':base64.encode(unit18listString);
    // }),
    // var response = await dio.post('https://api.imgbb.com/1/upload',data:formData,options:Options(contentType:'multipart/form-data'));
    // print(response.data); 
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
      addPost(){
        // console.log(this.fileUrl);
    //     let data = {
          
    //       fileUrl : this.fileUrl
    //     }
    //     http
    //   .post("http://localhost:80/post", data,
    //     // {headers: { Authorization: `Bearer ${token}`,'Content-Type': 'multipart/form-data'}
    //     {headers: { Authorization: `Bearer ${token}`}
    //      }
    //   ) //게시글을 추가
    //   .then((response) => {
    //       console.log(response);
    //         alert("===========================")

    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
      }
    },
}
</script>
