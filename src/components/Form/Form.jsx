import { useState } from "react";
import { useNavigate } from "react-router";
import useInstance from "../../hooks/useInstance";

const Form = () => {
    
    const nav = useNavigate();
    const {set, idInstance} = useInstance();

    const [id, setId] = useState('');
    const [apiToken, setApiToken] = useState('');
    const [phoneNum, setPhoneNum] = useState('');

    const handleIdInstanceChange = (e) => {
        setId(e.target.value);
    }

    const handleApiTokenInstanceChange = (e) => {
        setApiToken(e.target.value)
    }

    const handlePhoneChange = (e) => {
        setPhoneNum(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // const data = {'idInstance': id, 'apiTokenInstance': apiToken, 'apiUrl': `https://${apiToken.slice(0, 4)}.api.greenapi.com`, 'chatId': `${phoneNum}@c.us`}
        // sessionStorage.setItem('data', JSON.stringify(data));
        set({idInstance: id, apiTokenInstance: apiToken, phone: phoneNum});
        console.log(idInstance);
        setApiToken('');
        setId('');
        setPhoneNum('');
        nav('/chat')
    }

    return (
        <div className="mx-auto">
            <h1 className="text-3xl font-bold mb-5 text-green-800">Введите данные Green API</h1>
            <form onSubmit={handleFormSubmit} className="flex flex-col">
                <input value={id} onChange={handleIdInstanceChange} className="w-100 mb-3 border border-green-400 bg-gray-50 py-3 px-2 text-gray-800 rounded-md" type="text" name="idInstance" id="idInstance" placeholder="Введите idInstance" />
                <input value={apiToken} onChange={handleApiTokenInstanceChange} className="w-100 mb-4 border border-green-400 bg-gray-50 py-3 px-2 text-gray-800 rounded-md" type="text" name="apiTokenInstance" id="apiTokenInstance" placeholder="Введите apiTokenInstance" />
                <input value={phoneNum} onChange={handlePhoneChange} type="tel" className="w-100 mb-4 border border-green-400 bg-gray-50 py-3 px-2 text-gray-800 rounded-md" placeholder="Введите номер телефона получателя" name="phoneNumber" id="phone" />
                <button className="w-100 text-white bg-green-400 py-4 rounded-md" type="submit">Далее</button>
            </form>
        </div>
    )
}

export default Form;