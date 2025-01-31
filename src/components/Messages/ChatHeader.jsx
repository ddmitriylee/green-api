import useInstance from "../../hooks/useInstance";

const ChatHeader = () => {

    const {phone} = useInstance();

    return (
        <header className="bg-gray-50 shadow-md w-full py-4 absolute top-0 left-0">
            <div className="container">
                <h1 className="font-bold text-xl text-center">
                    +{phone}
                </h1>
            </div>
        </header>
    )
}

export default ChatHeader;