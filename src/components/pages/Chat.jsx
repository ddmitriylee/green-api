import Message from "../Messages/Message";
import { sendMessage, getNotification } from "../../services/whatsappService";
import ChatForm from "../Messages/ChatForm";
import ChatHeader from "../Messages/ChatHeader";

const Chat = () => {
    return (
        <div className="py-6">
            <ChatHeader />
            <ChatForm />
        </div>
    )
}

export default Chat;