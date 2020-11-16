import { fetchWithToken } from "./fetch";



export const findProductByCode = async (code) => {

    try {
        const resp = await fetchWithToken(`/products/code/${code}`, {} , 'GET', {'x-mode': 'code'});
        const body = await resp.json();
    
        if (body.ok) {
            console.log(body.result)
        }
        
    } catch (error) {
        console.log(error);
    }
}
