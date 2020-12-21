import { withRouter } from 'next/router';
import { connect } from 'react-redux'
import LeavingMessage from '../components/LeavingMessage';
import VisitorList from '../components/VisitorList';
import ArticleList from '../components/ArticleList';
import initializeStore from '../store/store';
import Head from 'next/head'
import httpServer from '../httpServer';

const Post = withRouter(({ initialReduxState, comLabelInteger, router}) => {
    const { post_article_list, post_message_list, post_view_list } = initialReduxState;
    comLabelInteger(router.query.id)
    return (
    <div className="homeWrap">
        <Head>
            <title>{router.query.name}</title>
        </Head>
            <div className="homeLeft">
                <ArticleList article_list={post_article_list.data.list}/>
            </div>
            <div className="homeRight">
                <VisitorList view_list={post_view_list?.data}/>
                <LeavingMessage message_list={post_message_list?.data}/>
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
    )
});

function mapStateToProps(state) {
    const { com_label_integer } = state
    return {
        com_label_integer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        comLabelInteger(com_label_integer = 0) {
            dispatch({ type: 'comLabelInteger', com_label_integer })
        }
    }
}

export async function getServerSideProps () {
    const reduxStore = initializeStore()
    const initialReduxState = await httpServer({url: '/api/post', method: 'post' , params: {}})
    return {
        props: {
            initialReduxState: initialReduxState.data
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Post)

