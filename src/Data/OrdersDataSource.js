import axios from "axios";

export default {
    async CreateOrder(data) 
    {
        await axios.post('/orders/create', data)
        .then(response => {
            console.log('Success:', response.data);
        })
        .catch(error => {
            if (error.response) {
            // Server responded with a status code outside of 2xx
            console.error('Error Data:', error.response.data);
            console.error('Status Code:', error.response.status);
            console.error('Headers:', error.response.headers);
            } else if (error.request) {
            // Request was made, but no response was received
            console.error('Request Error:', error.request);
            } else {
            // Something happened in setting up the request
            console.error('General Error:', error.message);
            }
            console.error('Config:', error.config);
        })
    }
}