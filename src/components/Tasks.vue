<template>
  <div>
    <h1>Tareas</h1>
    <form @submit.prevent="addItem">
      <input type="text" placeholder="Nueva tarea" v-model="newItem" />
      <input type="submit" value="Agregar tarea" />
      <br />
      <input type="search" name="search" id="search" v-model="search" />
    </form>
    <ul>
      <Task v-for="item in itemsFiltered" :key="item.id" :task="item" />
    </ul>
    <TaskDetails />
    <br />
  </div>
</template>

<script>
import Task from "@/components/Task";
import tasksService from "../services/tasksService";
import { crudItemsMixin } from "../mixins/crudItems";
import TaskDetails from "./TaskDetails.vue";
export default {
  name: "Tasks",
  created() {
    tasksService.get().then((res) => (this.items = res.data));
  },
  mixins: [crudItemsMixin],
  components: {
    Task,
    TaskDetails,
  },
};
</script>
