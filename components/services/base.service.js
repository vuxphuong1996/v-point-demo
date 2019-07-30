import axios from '../../config/axios';

export default class Base {
  constructor(path) {
    this.path = path;
  }

  get() {
    return axios.get(this.path);
  }

  post(body) {
    return axios.post(this.path, body);
  }

  put(id) {
    return axios.put(this.path + id);
  }

  patch(id, param) {
    return axios.patch(`${this.path}/${id}`, param);
  }

  delete(id) {
    return axios.delete(`${this.path}/${id}`);
  }

  removeMember(body) {
    return axios.delete(this.path, {data: body});
  }

  deleteTwo() {
    return axios.delete(this.path);
  }

  // deleteVote(id) {
  //     return axios.delete(this.path + '/' + id);
  // }
}
