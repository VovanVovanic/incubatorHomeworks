import axios from "axios";

export const putRequest = (value: boolean) => {
  return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', { success: value}).then((res) =>res.data)
}
