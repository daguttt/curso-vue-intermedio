export const crudItemsMixin = {
  data() {
    return {
      items: [],
      newItem: "",
      search: "",
    };
  },
  methods: {
    addItem() {
      this.items.unshift({ title: this.newItem });
      this.newItem = "";
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
  },
  computed: {
    itemsFiltered() {
      return this.items.filter((item) => {
        return item.title.includes(this.search);
      });
    },
  },
}