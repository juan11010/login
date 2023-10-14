import API from "../../infrastructure/API";

export async function getUsersService() {
  const URL = "api/users";
  const res = await API.get(URL);
  return res.data;
}

export async function editUserService(id, body) {
  const URL = `api/users/${id}`;
  const res = await API.put(URL, body);
  return res.data;
}
