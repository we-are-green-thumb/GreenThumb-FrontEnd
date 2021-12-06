<template lang="">
     <!-- <nav-form> -->
        <div class="search-bar">
          <select v-model="target" class="btn-front" for="navSearch">
            <option value="hospital">병원 검색</option>
            <option value="feed">피드 검색</option>
          </select>
          <input
            class="input-search"
            type="text"
            v-model="word"
            @keyup.enter="search"
            placeholder
            id="navSearch"
          />
          <button @click="search" class="btn-search" style="outline:0;">
            <b-icon-search scale="1"></b-icon-search>
          </button>
        </div>
</template>

<script>
export default {
    
}
</script>

<style lang="">
    
</style>