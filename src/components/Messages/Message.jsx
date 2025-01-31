const Message = ({message, my}) => {

    return(
        <div className={my ? "w-100 rounded-md px-3 py-4 ml-auto bg-green-200 mb-2" : "w-100 rounded-md px-3 py-4 mr-auto bg-gray-400 mb-2"}>
            {message}
        </div>
    )
}

export default Message;