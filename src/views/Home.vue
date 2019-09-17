<template>
  <div class="home">    
    <input type="text" v-model="tareaNueva" @keyup.enter="guardarTarea">

    <table>
      <thead>
        <th>#</th>
        <th>Tarea</th>
        <th>Editar</th>
        <th>Eliminar</th>
      </thead>

      <tbody>
        <tr v-for="(tarea, index) in tareas" :key="`item-tarea-${index}`" :class="tarea.done ? 'ok' : ''">
          <td>{{ index + 1}}</td>
          <td>{{ tarea.text }}</td>
          <td>
            <button @click="editarTarea(index)">Editar</button>
          </td>
          <td>
            <button @click="eliminarTarea(index)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.ok {
  background-color: blueviolet;
  color: white;
}
</style>

<script>
export default {
  name: "home",
  data() {
    return {
      tareaNueva: '',
      indexCurrent: null,
      tareas: [
        { text: "Tarea comer", done: true },
        { text: "Tarea estudiar", done: true },
        { text: "Tarea programar", done: true }
      ]
    };
  },
  methods: {
    guardarTarea() {
      if (this.indexCurrent !== null) {
        this.tareas[this.indexCurrent].text = this.tareaNueva;
      } else {
        this.tareas.push({text: this.tareaNueva, done: false});
      }
      
      this.indexCurrent = null;
      this.tareaNueva = '';
    },
    editarTarea(index) {
      this.indexCurrent = index;
      this.tareaNueva = this.tareas[index].text
    },
    eliminarTarea(index) {
      this.tareas.splice(index, 1);
    }
  }
};
</script>
