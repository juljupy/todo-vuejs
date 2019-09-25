const tasks = {
  state: {
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
  },

  mutations: {
    addTask(store, task) {
      if (task.index !== null) {
        store.tasks[task.index].text = task.text;
      } else {
        store.tasks.push(task);
      }
      this.commit('setEditRow',{
        text: '',
        index: null,
        done: false,
        option: 'new'
      })
    },

    removeTask(store, index) {
      store.tasks.splice(index, 1)
    },

    doneTask(store, {index, status}) {
      store.tasks[index].done = status;
    },

    setEditRow(state, row) {
      state.editRow = row
    }
  },

  getters: {
    getTasks(state) {
      return state.tasks
    },

    getEditRow(state) {
      return state.editRow
    },

    getTask: (state) => (index) => {
      return state.tasks[index]
    }

  },

  actions: {
    saveTask({ commit }, task) {
      commit('addTask', task)
    },

    editTask({ commit, getters }, index) {
      let editRow = getters.getTask(index)
      editRow.option = 'edit'
      editRow.index = index

      commit('setEditRow', editRow)
    },

    deleteTask({ commit }, index) {
      commit('removeTask', index)
    },

    setDone({ commit }, { index, status}) {
      commit('doneTask', { index, status })
    }
  }
}

export default tasks