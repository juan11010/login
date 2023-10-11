import API from "../../infrastructure/API";

export async function loginService(body) {
  const url = `api/login/`;
  const res = await API.post(url, body);
  console.log(res.data);
  return res.data;
}
