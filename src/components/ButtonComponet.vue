<template>
    <button>{{ text }}</button>
</template>

<script>
export default {
    name: 'ButtonComponent',
    props : {
        text : {
            type: String,
            default: 'Acción'
        }
    }
    
}
</script>

<style lang="">
    
</style>