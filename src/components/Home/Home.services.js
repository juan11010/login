import API from "../../infrastructure/API";

export async function getUsersService() {
  const URL = "api/users";
  const res = await API.get(URL);
  return res.data;
}
