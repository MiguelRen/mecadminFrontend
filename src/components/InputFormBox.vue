<template>
  <div class="wrap">
    <label for="">{{ label }}</label>
    <input type="text"   @input="$emit('update:modelValue',$event.target.value)">
  </div>
</template>







<script setup>
defineProps({
    label:{
        type:String,
        default:"",
    },
    modelValue:{
        type:String,
        default:""
    }
})
</script>







<style scoped>
.wrap{
    display: flex;
    flex-direction: column;
}

</style>