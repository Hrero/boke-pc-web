const LeavingMessage = ({message_list}) => {
    return (
        <div className="visitorList">
            <div className="visitorTitle"> 
                留言列表 
            </div>
            <ul>
                {
                    message_list.map(mess => {
                        return (
                            <li  key={mess.id}  className="visitorInfo">
                                <span>{mess.ip}</span>
                                <span>{mess.content}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <style jsx>
                {`
                    .visitorList{
                        margin-bottom: 20px;
                        padding: 16px;
                        background: #ffffff;
                    }
                    .homeRight .visitorList li{
                        margin-bottom: 5px;
                    }
                    .visitorTitle{
                        font-size: 12px;
                        color: #333333;
                        margin-bottom: 10px;
                    }
                    .visitorInfo{
                        margin-top:5px;
                        margin-bottom:5px;
                    }
                    .visitorInfo span{
                        font-size: 12px;
                        color: #666666;
                        margin-right: 10px;
                    }
                `}
                </style>
        </div>
    )
}

export default LeavingMessage;
