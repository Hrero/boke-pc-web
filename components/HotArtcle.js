import Link from 'next/link';

const HotArtcle = ({com_hot_article, title}) => {
    return (
        <div className="visitorList">
            <div className="visitorTitle"> 
                {title}
            </div>
            <ul>
                {
                    com_hot_article?.map((mess, index) => {
                        return (
                            <Link key={mess.id} as={`/infos/${mess.id}`} href={`/infos?id=` + mess.id}>
                                <li  key={mess.id}  className="visitorInfo">
                                    <span>{mess.title}</span>
                                </li>
                            </Link>
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
                        cursor: pointer;
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

export default HotArtcle;
