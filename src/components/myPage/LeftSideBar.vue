<template>
  <div>
    <div class="left">
      <ul>
        <li id="logo">
          <div>Inventory</div>
          <div>Manager</div>
        </li>
        <li>내 식물</li>
        <li>회원정보 수정</li>
        <!-- <li id="company">
          <div>Welcomt to Inventory</div>
        </li> -->
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "right",
};
</script>
<style>

 a{color:rgb(255, 6, 6)}
  /* a:hover{color:rgb(255,98,124);} */
  a:hover{color:white;}

  .left{ 
    position:fixed; 
    top:0px; 
    left:0px; 
    width:250px; 
    height:1000px; 
    /* background:rgba(255,98,124,0.6);  */
    background:white; 
    padding:40px 0; 
    overflow: hidden
  }
  .left ul {padding: 0 30px}
  .left ul li { font-size:25px;  height:75px;} 
  .left ul li#logo {font-family: 'Passion One', cursive; font-size:50px; height:170px;}
  .left ul li#logo div {line-height: 0.8}
  .left ul li#company {font-size:16px; margin-top:150px; }
  #left_btn {position:fixed; top:495px; left:-60px; cursor:pointer}
</style>
