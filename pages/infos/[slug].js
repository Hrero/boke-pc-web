import VisitorList from '../../components/VisitorList';
import PostBody from "../../components/postBody";
import httpServer from '../../httpServer';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import InfoThumdsIcon from '../../components/others/InfoThumdsIcon';
import { connect } from 'react-redux';
import httpAgent from '../../httpAgent';
import React from 'react';
import { allAgentInfo } from 'zgl-utils-js';
import { BackTop } from 'antd';
import HotArtcle from '../../components/HotArtcle';

class Info extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            initialReduxState: this.props.initialReduxState,
            slug: this.props.slug,
            comUserInfo: this.props.comUserInfo
        }
    }
    componentDidMount() {
        httpAgent({
            url: '/user/addUserView',
            method: 'post',
            params: {
                articleId: this.state.initialReduxState.info_Article_Vo.data.id,
                userid: window.localStorage.getItem("userid")
            }
        })
    }
    render() {
        const { info_Article_Vo, info_view_list, com_label_integer, com_sort_list, html_head_info, au_in_for, com_hot_article, info_commentList_list } = this.state.initialReduxState;

        return ( 
            <Layout html_head_info={html_head_info}> 
                <Header com_sort_list={com_sort_list.data} com_label_integer={com_label_integer}/>
                <div className="bodyWrap"> 
                    <div className="homeWrap"> 
                        <div> 
                            <PostBody slug={this.state.slug} content={info_Article_Vo.data.html} au_in_for={au_in_for} info_commentList_list={info_commentList_list} /> 
                        </div> 
                        <div className="homeRight"> 
                            <VisitorList view_list={info_view_list?.data}/> 
                            <HotArtcle title="推荐文章" com_hot_article={com_hot_article?.data}/> 
                        </div> 
                    </div> 
                    <InfoThumdsIcon 
                        thumdsSum={info_Article_Vo.data.thumdsSum}
                        articleId={info_Article_Vo.data.id}
                    />
                    <BackTop>
                        <div><svg t="1609515943321" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4562" width="40" height="40"><path d="M450 226c37.16-33.787 94.508-31.666 129 5l319 344c8.957 9.352 14 22.087 14 35 0 29.03-23.404 52.012-52 52H733a8 8 0 0 0-8 8v150c0 70.692-57.308 128-128 128H427c-70.692 0-128-57.308-128-128V670a8 8 0 0 0-8-8H164c-13.106 0.012-25.431-4.704-35-13v-1c-21.566-19.037-22.505-51.627-3-73l318-343c1.757-1.842 3.36-3.467 5-5zM840 77c17.47 0 32 14.55 32 33 0 17.45-14.53 32-32 32H185c-18.47 0-33-14.55-33-32 0-18.45 14.53-33 33-33z" fill="#222238" p-id="4563"></path></svg>
                        </div>
                    </BackTop>
                    <style jsx>
                    {`
                        .homeRight{
                            width: 260px;
                        }
                    `}
                    </style> 
                </div> 
            </Layout>
        );
    }
};

export async function getServerSideProps({ params }) {
    const initialReduxState = await httpServer({url: '/api/info', method: 'post' , params: {
        id: params.slug
    }})
    return {
        props: {
            slug: params.slug,
            initialReduxState: initialReduxState.data
        }
    }
}


export default Info;

