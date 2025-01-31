import axios from "axios";

export const sendMessage = async (message, idInstance, apiTokenInstance, phone) => {

    let data = JSON.stringify({
        "chatId": `${phone}@c.us`,
        "message": message
      });

    let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `https://${idInstance.slice(0, 4)}.api.greenapi.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
    headers: { 
        // 'User-Agent': 'PostmanRuntime/7.43.0', 
        'Content-Type': 'application/json'
    },
    data : data
    };

    axios.request(config)
    .then((response) => {
        return JSON.stringify(response.data);
    })
    .catch((error) => {
        console.log(error);
    });

}

export const getNotification = async (idInstance, apiTokenInstance) => {

    if (!idInstance || !apiTokenInstance) {
        throw new Error("API credentials are missing.");
    }

    let config = {
        method: 'GET',
        url: `https://${idInstance.slice(0, 4)}.api.greenapi.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}?receiveTimeout=5`,
        headers: {
            'Content-Type': 'application/json'
         }
    };

    try {
        const response = await axios.request(config)
        return response.data
    } catch (error) {
        console.error(error)
        return 
    }

}