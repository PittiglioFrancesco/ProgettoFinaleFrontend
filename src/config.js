import axios from "axios";

const endpoint = "http://localhost:8080/api/v1/";

async function loginCall(loginData) {
  const loginEndpoint = endpoint + "login";

  try {
    const res = await axios.put(loginEndpoint, loginData);
    return res.data;
  } catch (error) {
    return error;
  }
}

async function verifyCall(token) {
    const verifyEndpoint = endpoint + "verify";

  try {
    const res = await axios.get(verifyEndpoint, token);
    return res.data;
  } catch (error) {
    return error;
  }
}

async function getAllPosts(token) {
    axios.defaults.headers.common = {
        'Authorization': `Bearer ${token}`
      };
    const getPostsEndpoint = endpoint + "post";

  try {
    const res = await axios.get(getPostsEndpoint);
    return res.data;
  } catch (error) {
    return error;
  }
}

async function readProfileById(id) {
    const readprofileEndpoint = endpoint + "profile/" + id;

  try {
    const res = await axios.get(readprofileEndpoint);
    return res.data;
  } catch (error) {
    return error;
  }
}

async function readFirstFiveProfiles() {
    const readFfEndpoint = endpoint + "profile/firstfive";

  try {
    const res = await axios.get(readFfEndpoint);
    return res.data;
  } catch (error) {
    return error;
  }
}

async function readAllPostsOfProfile(id) {
  const readAPOPEndpoint = endpoint + "profile/profileposts";

try {
  const res = await axios.get(readAPOPEndpoint, {id: id});
  return res.data;
} catch (error) {
  return error;
}
}

export { loginCall, verifyCall, getAllPosts, readProfileById, readFirstFiveProfiles, readAllPostsOfProfile };
