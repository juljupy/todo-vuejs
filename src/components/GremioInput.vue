<template>
  <div class="flex">
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
      id="username" type="text" placeholder="New Task" v-model="editRow.text" @keyup.enter="$emit('saveTask', editRow)">
    <gremio-button text="Edit" type="warning" class="shadow" v-if="editRow.option == 'edit'" @click.native="$emit('saveTask', editRow)"></gremio-button>
    <gremio-button text="Add" type="info" class="shadow" v-else @click.native="$emit('saveTask', editRow)"></gremio-button>
  </div>
</template>

<script>
  import GremioButton from './GremioButton'
  export default {
    name: 'gremioinput',
    props: ["editRow"],
    components: {
      GremioButton
    }
  }
</script>

<style lang="scss" scoped>

</style>