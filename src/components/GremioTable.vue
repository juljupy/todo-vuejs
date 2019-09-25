<template>
  <div>
    <gremio-input :editRow="editRow" @saveTask="saveTask"></gremio-input>
    <div class="bg-white shadow-md rounded my-6">
      <table>
        <thead>
          <th class="py-4 px-6 bg-gray-300 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">#</th>
          <th class="py-4 px-6 bg-gray-300 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Task
          </th>
          <th class="py-4 px-6 bg-gray-300 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
            Actions</th>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="index" class="hover:bg-gray-200">
            <td class="py-4 px-6 border-b border-grey-light">{{index + 1}}</td>
            <td class="py-4 px-6 border-b border-grey-light">
              <strike v-if="task.done">{{task.text}}</strike>
              <span v-else>{{task.text}}</span>
            </td>
            <td class="py-4 px-6 border-b border-grey-light">
              <gremio-button text="Edit" type="info" class="mr-2" @click.native="editTask(index)" v-if="!task.done"></gremio-button>
              <gremio-button text="Delete" type="danger" class="mr-2" @click.native="deleteTask(index)"></gremio-button>
              <gremio-button text="DONE" type="success" @click.native="setDone({index, status: true})" v-if="!task.done"></gremio-button>
              <gremio-button text="UNDONE" type="warning" @click.native="setDone({index, status: false})" v-if="task.done"></gremio-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import GremioInput from "./GremioInput"
  import GremioButton from "./GremioButton"
  import { mapActions } from 'vuex'

  export default {
    name: 'gremioatable',

    components: {
      GremioInput,
      GremioButton
    },

    computed: {
      tasks(){
        return this.$store.getters.getTasks
      },

      editRow(){
        return this.$store.getters.getEditRow
      }
    },

    methods: {
      ...mapActions(['saveTask', 'editTask', 'setDone', 'deleteTask'])
    }
  }
</script>

<style lang="scss" scoped>

</style>