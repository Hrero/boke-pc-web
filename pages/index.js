import { connect, useDispatch } from 'react-redux'
import LeavingMessage from '../components/LeavingMessage';
import VisitorList from '../components/VisitorList';
import ArticleList from '../components/ArticleList';
import Head from 'next/head';
import initializeStore from '../store/store';
import httpServer from '../httpServer';

const Index = ({ comLabelInteger, initialReduxState }) => {
    const { index_article_list, index_message_list, index_view_list } = initialReduxState;
    comLabelInteger(0) // 首页
    return (
        <div className="homeWrap">
            <Head>
                <title>首页</title>
            </Head>
            <div className="homeLeft">
                <ArticleList article_list={index_article_list?.data?.list}/>
            </div>
            <div className="homeRight">
                <VisitorList view_list={index_view_list?.data}/>
                <LeavingMessage message_list={index_message_list?.data}/>
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
};

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
    const initialReduxState = await httpServer({url: '/api/index', method: 'post' , params: {}})
    return {
        props: {
            initialReduxState: initialReduxState.data
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
