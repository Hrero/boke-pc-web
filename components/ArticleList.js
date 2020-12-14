const ArticleList = (props) => {
    return (
        <div>
            <ul>
                <li>
                    <div className="articleTitle">标题标题标题标题标题标题标题</div>
                    <div className="articleTxt">描述描述描述描述</div>
                </li>
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
                `}
            </style>
        </div>
    )
}

export default ArticleList;
