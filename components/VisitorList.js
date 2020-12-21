import { dateFormat } from 'zgl-utils-js';
 
const VisitorList = ({view_list}) => {
    return (
        <div className="visitorList borderNone">
            <div className="visitorTitle">
                访客列表
            </div>
            <ul>
                {
                    view_list.map(mess => {
                        return (
                            <li key={mess.id} className="visitorInfo">
                                <span>{mess.ip}</span>
                                <span>{ dateFormat(mess.gmtModified, 'yyyy-MM-dd hh:mm:ss') }</span>
                            </li>
                        )
                    })
                }
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
                .visitorInfo{
                    margin-top:5px;
                    margin-bottom:5px;
                }
                .visitorInfo span{
                    font-size: 12px;
                    color: #666666;
                    margin-right: 10px;
                }
                .borderNone{
                    margin-top: 20px;
                }
            `}
            </style>
        </div>
    )
}

export default VisitorList;
