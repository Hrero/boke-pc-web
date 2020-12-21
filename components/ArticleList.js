import Link from 'next/link';

const ArticleList = (props) => {
    const { article_list } = props;
    return (
        <div>
            <ul>
                {
                    article_list?.map(item => {
                        return (
                            <Link key={item.id} as={`/info/${item.id}`} href={`/info?id=${item.id}`}>
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
                        font-size: 14px;
                        color: #999999;
                        line-height: 30px;
                        cursor: pointer;
                    }
                    .articleLi{
                        margin-bottom: 30px;
                    }
                `}
            </style>
        </div>
    )
}

export default ArticleList;
