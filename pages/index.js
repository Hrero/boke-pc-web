import LeavingMessage from '../components/LeavingMessage';
import VisitorList from '../components/VisitorList';
import ArticleList from '../components/ArticleList';
import Head from 'next/head'

const Index = (props) => (
    <div className="homeWrap">
        <Head>
            <title>首页</title>
        </Head>
            <div className="homeLeft">
                <ArticleList />
            </div>
            <div className="homeRight">
                <LeavingMessage />
                <VisitorList />
            </div>
        <style jsx>
        {`
            .homeWrap{
                display: flex;
                max-width: 1200px;
                width: 1200px;
                padding: 20px 0;
                margin:0 auto;
            }
            .homeLeft{
                width: 800px;
                padding: 20px;
            }
        `}
        </style>
    </div>
);

export default Index;
