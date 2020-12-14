const LeavingMessage = (props) => {
    return (
        <div className="visitorList">
            <div className="visitorTitle">
                访客列表 
            </div>
            <ul>
                <li  className="visitorInfo">
                    <span>190.168.0.1</span>
                    <span>2020-01-01 10:10:20</span>
                </li>
                <li  className="visitorInfo">
                    <span>190.168.0.1</span>
                    <span>2020-01-01 10:10:20</span>
                </li>
                <li  className="visitorInfo">
                    <span>190.168.0.1</span>
                    <span>2020-01-01 10:10:20</span>
                </li>
                <li  className="visitorInfo">
                    <span>190.168.0.1</span>
                    <span>2020-01-01 10:10:20</span>
                </li>
            </ul>
            <style jsx>
                {`
                    .homeRight{
                        padding: 20px;
                    }
                    .visitorList{
                        padding-bottom:20px;
                        border-bottom:1px solid #cccccc;
                        margin-bottom: 20px;
                    }
                    .homeRight .visitorList li{
                        margin-bottom: 5px;
                    }
                    .visitorTitle{
                        font-size: 12px;
                        color: #333333;
                        margin-bottom: 10px;
                    }
                    .visitorInfo span{
                        font-size: 12px;
                        color: #666666;
                        margin-right: 10px;
                    }
                    .borderNone{
                        border:none;
                    }
                `}
                </style>
        </div>
    )
}

export default LeavingMessage;
