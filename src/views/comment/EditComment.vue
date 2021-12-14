<template>
  <div>
    <v-form ref="form">
      <v-row align="center">
          <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
       
      </v-col>
      </v-row>


      <v-text-field v-model="content" label="내용" required></v-text-field>

    <v-btn>수정 완료 </v-btn>
    </v-form>
  </div>
</template>
<script>
export default {
  data: () => ({
      content : ""
    }),
};
</script>
<style></style>
