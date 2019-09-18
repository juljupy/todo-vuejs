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
              <gremio-button text="DONE" type="success" @click.native="setDone(index)" v-if="!task.done"></gremio-button>
              <gremio-button text="UNDONE" type="warning" @click.native="setUndone(index)" v-if="task.done"></gremio-button>
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

  export default {
    name: 'gremioatable',

    components: {
      GremioInput,
      GremioButton
    },

    data() {
      return {
        editRow: {
          text: '',
          index: null,
          done: false,
          option: 'new'
        },
        tasks: [{
            text: "Tarea comer",
            done: false
          },
          {
            text: "Tarea estudiar",
            done: false
          },
          {
            text: "Tarea programar",
            done: true
          }
        ]
      };
    },

    methods: {
      saveTask(task) {
        const me = this;

        if (task.index !== null) {
          me.tasks[task.index].text = task.text;
        } else {
          me.tasks.push(task);
        }

        me.editRow = {
          text: '',
          index: null,
          done: false,
          option: 'new'
        };
      },

      editTask(index) {
        const me = this;
        me.editRow = me.tasks[index];
        me.editRow.option = 'edit';
        me.editRow.index = index;
      },

      deleteTask(index) {
        this.tasks.splice(index, 1);
      },

      setDone(index){
        this.tasks[index].done = true;
      },

      setUndone(index){
        this.tasks[index].done = false;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>