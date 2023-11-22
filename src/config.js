import axios from "axios";

const endpoint = "http://localhost:8080/api/v1/";

async function loginCall(loginData) {
  const loginEndpoint = endpoint + "login";

  try {
    const res = await axios.put(loginEndpoint, loginData);
    return res.data;
  } catch (error) {
    console.log("errorConfig", error);
  }
}

async function verifyCall(token) {
    const loginEndpoint = endpoint + "verify";

  try {
    const res = await axios.get(loginEndpoint, token);
    return res.data;
  } catch (error) {
    console.log("errorConfig", error);
  }
}

export { loginCall, verifyCall };
