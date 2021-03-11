<template>
    <div>
        <p>{{ name }}</p>
        <button @click='updateName' v-if='seen'></button>
    </div>
</template>

<script> 
    export default{
        data(){
            return {
                name : '변경 전입니다',
                seen : true
            }
        },
        methods: {
            updateName(){
                if(this.seen === false){
                    this.name = '복귀했습니다.'
                }
                else{
                    this.name = '변경되었스빈다'
                }
            }
        }
    }
</script>
<style scoped>
</style>

