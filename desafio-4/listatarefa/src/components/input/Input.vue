<template>
    <label>{{text}}</label>
    <input 
    :type="type" 
    :placeholder="placeholder"
     :value="modelValue" 
     @input="$emit('update:modelValue', $event.target.value)"
     />
</template>
<script>
    export default{
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Input',
        props:{
            type: String,
    placeholder: String,
    text: String,
    modelValue: String
        }
    }
</script>
<style>
input{
    width: 100%;
padding: 12px 20px;
margin: 8px 0;
border: 1px solid #869;
border-left:none ;
border-right:none ;
border-top:none ;
}
</style>