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
import styles from '../styles/post.module.scss';
import ArticleTrees from '../components/others/ArticleTrees';
import HotArtcle from '../components/HotArtcle';
import MessageIcon from '../components/others/MessageIcon';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { post_article_list, post_message_list, 
            com_sort_list, html_head_info, com_label_integer, post_view_list, com_class_list, user_ip, com_hot_article } = this.props.initialReduxState;
            return (
            <Layout html_head_info={html_head_info}>
                <Header com_sort_list={com_sort_list.data} com_label_integer={com_label_integer}/>
                <div className={styles.homeWrap}>
                        <div className={styles.homeLeft}>
                            <ArticleList article_list={post_article_list.data.list}/>
                        </div>
                        <div className={styles.homeRight}>
                            <VisitorList view_list={post_view_list?.data}/>
                            <HotArtcle title="热门文章" com_hot_article={com_hot_article?.data}/>
                            <LeavingMessage message_list={post_message_list?.data}/>
                            <ArticleTrees com_class_list={com_class_list.data} user_ip={user_ip}/>
                        </div>
                </div>
                <MessageIcon user_ip={user_ip}/>
            </Layout>
        );
    }
}

export async function getServerSideProps (context) {
    const reduxStore = initializeStore()
    const initialReduxState = await httpServer({url: '/api/post', method: 'post' , params: {
        sortId: Number(15)
    }});
    return {
        props: {
            initialReduxState: initialReduxState.data
        }
    }
}

export default Post;

