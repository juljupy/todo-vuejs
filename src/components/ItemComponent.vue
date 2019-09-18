<template>
    <tr :key="`item-tarea-${index}`" :class="tarea.done ? 'ok' : ''">
        <td>{{ index + 1}}</td>
        <td>{{ tarea.text | upperCase }}</td>
        <td>
        <!-- <button @click="editarTarea(index)">Editar</button> -->
        <button-component :text="`Editar`" @click.native="$emit('editar', index)"/>
        </td>
        <td>
        <button-component :text="`Eliminar`" @click.native="$emit('eliminar', index)"/>
        <!-- <button @click="eliminarTarea(index)">Eliminar</button> -->
        </td>
    </tr>
</template>

<script>
import ButtonComponent from './ButtonComponet.vue';
export default {
    name: 'ItemComponent',
    components: {ButtonComponent},
    props: ['tarea', 'index']
}
</script>

<style scoped>
    .ok {
        background-color: green;
        color: white;
    }
</style>