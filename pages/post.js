import { withRouter } from 'next/router';
import LeavingMessage from '../components/LeavingMessage';
import VisitorList from '../components/VisitorList';
import ArticleList from '../components/ArticleList';
import Head from 'next/head'

const Post = withRouter((props) => (
    // name
    <div className="homeWrap">
        <Head>
            <title>{props.router.query.name}</title>
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
));

export default Post;
