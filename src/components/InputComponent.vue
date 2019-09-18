<template>
    <input type="text" placeholder="Ingrese tarea" 
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)">
</template>

<script>
export default {
    name: 'InputComponent',
    props: ['value']
}
</script>

<style lang="">
    
</style>