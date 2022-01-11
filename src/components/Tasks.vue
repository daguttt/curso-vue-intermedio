<template>
  <div>
    <h1>Tareas</h1>
    <form @submit.prevent="addTask">
      <input type="text" placeholder="Nueva tarea" v-model="newTask" />
      <input type="submit" value="Agregar tarea" />
      <br />
      <input type="search" name="search" id="search" v-model="search" />
    </form>
    <ul v-for="(task, $index) in tasksFiltered" :key="task.id">
      <Task :task="task" @task-removed="removeTask($index)" />
    </ul>
    <br />
  </div>
</template>

<script>
import Task from "@/components/Task";
import tasksService from "../services/tasksService";

export default {
  name: "Tasks",
  created() {
    tasksService.get().then((res) => (this.tasks = res.data));
  },
  data() {
    return {
      tasks: [],
      newTask: "",
      search: "",
    };
  },
  methods: {
    addTask() {
      this.tasks.unshift({ title: this.newTask });
      this.newTask = "";
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
  computed: {
    tasksFiltered() {
      return this.tasks.filter((task) => {
        return task.title.includes(this.search);
      });
    },
  },
  components: {
    Task,
  },
};
</script>
