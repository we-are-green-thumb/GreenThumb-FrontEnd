<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row align="center">
          <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          :items="cate"
          label="카테고리"
        ></v-select>
      </v-col>
      </v-row>

      <v-text-field v-model="title" label="제목" required></v-text-field>

      <v-text-field v-model="content" label="내용" required></v-text-field>

    <input id="chooseFile" type="file" accept="image/*" />
    <v-btn>완료 </v-btn>
    </v-form>
  </div>
</template>
<script>
export default {
  data: () => ({
      cate: ['자유', '질문', '나눔거래'],
    }),
};
</script>
<style></style>
