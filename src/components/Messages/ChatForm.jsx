import { sendMessage, getNotification } from "../../services/whatsappService";
import { useState } from "react";
import useInstance from "../../hooks/useInstance";
import Message from "./Message";

const ChatForm = () => {
    const { idInstance, apiTokenInstance, phone } = useInstance();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const fetchNotification = async () => {
        try {
            const notification = await getNotification(idInstance, apiTokenInstance);
            console.log(notification);
            if (notification && notification.body.messageData?.textMessageData?.textMessage) {
                const incomingMessage = {
                    text: notification.body.messageData.textMessageData.textMessage,
                    my: false,
                };
                setMessages((prev) => [...prev, incomingMessage]);
            }
        } catch (error) {
            console.error("Error fetching notification:", error);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        const newMessage = { text: message, my: true };
        setMessages((prev) => [...prev, newMessage]);

        try {
            await sendMessage(message, idInstance, apiTokenInstance, phone);
            setMessage('');
            await fetchNotification();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col h-screen">
            <div className="flex-1 overflow-y-auto p-4">
                {messages.map((msg, index) => (
                    <Message key={index} message={msg.text} my={msg.my} />
                ))}
            </div>
            <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full bg-gray-50 py-4 shadow-md">
                <form onSubmit={handleFormSubmit} className="relative w-3/4 mx-auto my-3">
                    <input 
                        value={message} 
                        onChange={handleMessageChange} 
                        className="w-full py-4 px-2 rounded-md border-green-200 bg-green-50 " 
                        type="text" 
                        name="message" 
                        id="message" 
                        placeholder="Введите сообщение" 
                    />
                    <button className="absolute right-0 top-1/2 -translate-y-1/2 mr-2 rounded-md bg-green-200 p-2" type="submit">Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default ChatForm;
