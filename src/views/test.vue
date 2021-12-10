<template>
    <div>
       헤이
       {{userInfo.userName}}
       뭐야
    </div>
</template>

<script>
import {mapState} from "vuex"
 
export default {
    computed: {
        ...mapState(["userInfo"])
    }
}
</script>
