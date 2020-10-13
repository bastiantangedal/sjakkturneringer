import { ref } from '@vue/composition-api';

let userName = ref('');
let isLoggedIn = ref(false);
let authToken = ref('');

function setAuthToken(token) {
  authToken = token;
}

async function login(username, password) {
  const response = await fetch('http://localhost:5000/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const json = response.json();
  if (json === 'Invalid userInfo') {
    alert('En bruker med det brukernavnet eksistrerer ikke.');
    return;
  }
  if (json === 'Invalid password') {
    alert('Feil passord.');
    return;
  }

  setAuthToken(JSON.stringify(json));
  isLoggedIn = true;
  userName = username;
}

function logOut() {
  userName = '';
  isLoggedIn = false;
  authToken = '';
}

export default {
  userName,
  isLoggedIn,
  authToken,
  setAuthToken,
  login,
  logOut,
};
