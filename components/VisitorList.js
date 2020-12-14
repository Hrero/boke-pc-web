const VisitorList = (props) => {
    return (
        <div className="visitorList borderNone">
            <div className="visitorTitle">
                留言列表 
            </div>
            <ul>
                <li  className="visitorInfo">
                    <span>加油</span>
                    <span>2020-01-01 10:10:20</span>
                </li>
                <li  className="visitorInfo">
                    <span>干啥呢老哥</span>
                    <span>2020-01-01 10:10:20</span>
                </li>
                <li  className="visitorInfo">
                    <span>来了老弟</span>
                    <span>2020-01-01 10:10:20</span>
                </li>
                <li  className="visitorInfo">
                    <span>加油</span>
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

export default VisitorList;
