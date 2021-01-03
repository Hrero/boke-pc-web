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
                                <span>{mess.nickname?mess.nickname: mess.ip}</span>
                                <span>{mess.gmtCreated}</span>
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
                }
                .homeRight .visitorList li{
                    margin-bottom: 5px;
                }
                .visitorTitle{
                    font-size: 12px;
                    font-weight: bold;
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
                    // margin-top: 20px;
                    background: #ffffff;
                }
                ul{
                    margin-bottom: 0rem;
                }
            `}
            </style>
        </div>
    )
}

export default VisitorList;
