import http from "../http-common";

  const remove = id => {
    return http.delete(`/delete/${id}`);
  };

  const findById = id => {
    return http.get(`/get/${id}`);
  };

  const create = data => {
    return http.post("/add", data);
  };

  const fetchAll = () => {
    return http.get("/all");
  }

  export default {remove, create, findById, fetchAll};