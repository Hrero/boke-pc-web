import { connect } from 'react-redux'
import LeavingMessage from '../components/LeavingMessage';
import VisitorList from '../components/VisitorList';
import ArticleList from '../components/ArticleList';
import initializeStore from '../store/store';
import httpServer from '../httpServer';
import httpAgent from '../httpAgent';
import Layout from '../components/Layout';
import React from 'React';
import Header from '../components/Header';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        httpAgent({url: '/user/getUserView', method: 'post' , params: {}}).then(res => {
            this.setState({
                post_view_list: res
            })
        })
    }
    render() {
        const { post_article_list, post_message_list, com_sort_list, html_head_info, com_label_integer, post_view_list } = this.props.initialReduxState;
        return (
            <Layout html_head_info={html_head_info}>
                <Header com_sort_list={com_sort_list.data} com_label_integer={com_label_integer}/>
                <div className="homeWrap">
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
        );
    }
}

export async function getServerSideProps (context) {
    const reduxStore = initializeStore()
    const initialReduxState = await httpServer({url: '/api/post', method: 'post' , params: {
        sortId: Number(context.query.id)
    }});
    return {
        props: {
            initialReduxState: initialReduxState.data
        }
    }
}

export default Post;

