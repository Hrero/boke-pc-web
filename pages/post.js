import { connect } from 'react-redux'
import LeavingMessage from '../components/LeavingMessage';
import VisitorList from '../components/VisitorList';
import ArticleList from '../components/ArticleList';
import initializeStore from '../store/store';
import httpServer from '../httpServer';
import httpAgent from '../httpAgent';
import Layout from '../components/Layout';
import React from 'react';
import { BackTop } from 'antd';
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
    componentDidMount() {
    }
    render() {
        const { post_article_list, post_message_list, 
            com_sort_list, html_head_info, com_label_integer, post_view_list, com_class_list, com_hot_article } = this.props.initialReduxState;
            return (
            <Layout html_head_info={html_head_info}>
                <Header com_sort_list={com_sort_list.data} com_label_integer={com_label_integer}/>
                <div className={styles.homeWrap}>
                    <div className={styles.homeLeft}>
                        <ArticleList article_list={post_article_list.data.list}/>
                    </div>
                    <div className={styles.homeRight}>
                        <HotArtcle title="热门文章" com_hot_article={com_hot_article?.data}/>
                        <VisitorList view_list={post_view_list?.data}/>
                        <ArticleTrees com_class_list={com_class_list.data} />
                        <LeavingMessage message_list={post_message_list?.data}/>
                    </div>
                </div>
                <MessageIcon />
                <BackTop>
                    <div><svg t="1609515943321" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4562" width="40" height="40"><path d="M450 226c37.16-33.787 94.508-31.666 129 5l319 344c8.957 9.352 14 22.087 14 35 0 29.03-23.404 52.012-52 52H733a8 8 0 0 0-8 8v150c0 70.692-57.308 128-128 128H427c-70.692 0-128-57.308-128-128V670a8 8 0 0 0-8-8H164c-13.106 0.012-25.431-4.704-35-13v-1c-21.566-19.037-22.505-51.627-3-73l318-343c1.757-1.842 3.36-3.467 5-5zM840 77c17.47 0 32 14.55 32 33 0 17.45-14.53 32-32 32H185c-18.47 0-33-14.55-33-32 0-18.45 14.53-33 33-33z" fill="#222238" p-id="4563"></path></svg>
                    </div>
                </BackTop>
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

