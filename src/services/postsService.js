import Service from "./Service";

const resource = "posts";

export default {
  getAll() {
    return Service.get(resource)
  },
  getItem(config) {
    return Service.get(resource, config)
  },
  create(data) {
    return Service.post(resource, data)
  },
  delete(id) {
    return Service.delete(resource, id)
  }
}