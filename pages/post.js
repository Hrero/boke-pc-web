import { withRouter } from 'next/router';
import { connect } from 'react-redux'
import LeavingMessage from '../components/LeavingMessage';
import VisitorList from '../components/VisitorList';
import ArticleList from '../components/ArticleList';
import initializeStore from '../store/store';
import Head from 'next/head'
import httpServer from '../httpServer';
import Layout from '../components/Layout';

const Post = withRouter(({ initialReduxState, comLabelInteger, router}) => {
    const { post_article_list, post_message_list, post_view_list, com_label_integer } = initialReduxState;
    comLabelInteger(router.query.id)
    return (
        <Layout sortList={com_label_integer.data} >
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
                        max-width: 960px;
                        width: 960px;
                        padding: 0 15px;
                        margin:0 auto;
                    }
                    .homeRight{
                        margin-left: 4.16667%;
                        width: 29.16667%;
                        margin-top: 30px;
                    }
                    .homeLeft{
                        width: 66.667%;
                        padding: 20px;
                    }
                `}
                </style>
            </div>
        </Layout>
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

