import Link from 'next/link';

const ArticleList = (props) => {
    const { article_list } = props;
    return (
        <div>
            <ul>
                {
                    article_list?.map(item => {
                        return (
                            <Link key={item.id} as={`/infos/${item.id}`} href="/infos/[item.id]" >
                                <li className="articleLi">
                                    <div className="articleTitle">{item.title}</div>
                                    <div className="articleTxt">{item.summary}</div>
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
            <style jsx>
                {`
                    .articleTitle{
                        color: #333333;
                        font-size: 18px;
                        line-height: 30px;
                        cursor: pointer;
                    }
                    .articleTxt{
                        font-size: 13px;
                        color: #999999;
                        line-height: 30px;
                        cursor: pointer;
                    }
                    .articleLi{
                        padding: 15px 0 20px 0;
                        border-bottom: 1px solid #f0f0f0;
                        margin: 15px 0;
                    }
                `}
            </style>
        </div>
    )
}

export default ArticleList;
