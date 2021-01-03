const LeavingMessage = ({message_list}) => {
    console.log(message_list, 'message_list');
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
                                <span>{mess.name}</span>
                                <span>{mess.content}</span>
                                <span>{mess.createTime}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <style jsx>
                {`
                    .visitorList{
                        margin-bottom: 10px;
                        padding: 16px;
                        background: #ffffff;
                    }
                    .homeRight .visitorList li{
                        margin-bottom: 5px;
                    }
                    .visitorTitle{
                        font-size: 12px;
                        color: #333333;
                        font-weight: bold;
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
                    ul{
                        margin-bottom: 0rem;
                    }
                    
                `}
                </style>
        </div>
    )
}

export default LeavingMessage;
