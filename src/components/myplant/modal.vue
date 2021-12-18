<template>
    <div>
        <h1>별명을 지어주세요</h1>
        <h3>식물의 별명을 지어주세요</h3>
        <input v-model="nickName" placeholder="레몬">
        <hr size="5px">
        <h1>사진을 등록해주세요.</h1>
        <h3>식물의 사진을 등록해주세요</h3>
        <img src="../../assets/images/sample_02.png" width="200" height="200" />
        <button>첨부하기</button>
        <hr size="5px">
        <h1>이 식물은 ...</h1>
        <h3>업로드한 식물 사진으로 무슨 식물인지?~</h3>

        <input v-model="plant" placeholder="선인장">
        <h3>해당 식물 정보는 존재하지 않습니다.</h3>

        <hr size="5px">
        <h1>마지막으로 언제 물을 주셨나요?</h1>
        <div class="inputDay">
            <input v-model="days" placeholder="1" width="5px" >
            <h3>일</h3>
        </div>

        <div class="save">
            <button>저장</button>
            <button>취소</button>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'modal',
    data() {
        return {
            nickName :"",
            plant :"",
            days :"",

        }
    },
}
</script>
<style>
    .save{
     text-align: right;
        float: right;
    }
    .inputDay{
        float:left;
    }
</style>