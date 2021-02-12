import { createBrowserHistory } from 'history'
import { store } from '../store/store';
import { startLogout } from '../actions/auth'

const baseUrl = process.env.REACT_APP_API_URL;
const history = createBrowserHistory()
let response;    


const fetchWithoutToken = (endpoint, data, method = 'GET') => {

  const url = `${baseUrl}${endpoint}`;

  if (method === 'GET') {
      response = fetch(url).then(resp => {
        if (resp.ok) {
          return resp.json()
        } else {
          return {
            ok: false
          }
        }
      });
  } else {
      response = fetch(url, {
          method,
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(data),
      }).then(resp => {
        if (resp.ok) {
          return resp.json()
        } else {
          return {
            ok: false
          }
        }
      });
  }

  return response
}


const fetchWithToken = (endpoint, data, method = 'GET', header) => {
    
  const url = `${baseUrl}${endpoint}`;
  const token = sessionStorage.token;
  const getHeaders = {'x-token': token, ...header};
  const postHeaders = {'content-type': 'application/json', 'x-token': token, ...header};

  
  if (method === 'GET') {
    response = fetch(url, {
      method,
      headers: getHeaders
    }).then(resp => {
      if (resp.ok) {
        return resp.json()
      } else {
        sessionStorage.clear();
        history.push('/login');
        store.dispatch(startLogout());
        return {
          ok: false,
          msg: 'unauthorized',
          result: {}
        }
      }
    });
  } else {
    response = fetch(url, {
      method,
      headers: postHeaders,
      body: JSON.stringify(data),
    });
  }

  return response
}


export {
  fetchWithoutToken,
  fetchWithToken
}