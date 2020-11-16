// import { useSelector } from 'react-redux';


const baseUrl = process.env.REACT_APP_API_URL;


const fetchWithoutToken = (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}${endpoint}`;

    if (method === 'GET') {
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        });
    }
}


const fetchWithToken = (endpoint, data, method = 'GET', header) => {
    
    const url = `${baseUrl}${endpoint}`;
    const token = sessionStorage.token;
    const getHeaders = {'x-token': token, ...header};
    const postHeaders = {'content-type': 'application/json', 'x-token': token, ...header};

    
    if (method === 'GET') {
        return fetch(url, {
            method,
            headers: getHeaders
        });
    } else {
        return fetch(url, {
            method,
            headers: postHeaders,
            body: JSON.stringify(data),
        });
    }
}


export {
    fetchWithoutToken,
    fetchWithToken
}