import axios from "axios";

interface Credentials {
  email: string;
  password: string;
}
const BASE_API_URL = "https://jupiter.d.greeninvoice.co.il/api/v1";

export async function login(userCred: Credentials) {
  let user;
  try {
    user = await axios.post(BASE_API_URL + "/account/login", userCred);
  } catch {
    user = null;
    console.error("ERROR USERSERVICE => couldnt find user");
  }
  return user;
}

export async function logout() {
  let user;
  try {
    user = await axios.post(BASE_API_URL + "/account/logout");
  } catch {
    user = null;
    console.error("ERROR USERSERVICE => couldnt find user");
  }
  return user;
}

export async function getUserById() {
  let user;
  const timestamp = Date.now();
  try {
    user = await axios.post(BASE_API_URL + `/account/me?_${timestamp}`);
  } catch {
    user = null;
    console.error("ERROR USERSERVICE => couldnt find user");
  }
  return user;
}
