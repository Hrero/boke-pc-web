import Head from 'next/head'
import Layout from '../components/Layout';
import Header from '../components/Header';
import styles from '../styles/special.module.scss';
import initializeStore from '../store/store';
import httpServer from '../httpServer';
import httpAgent from '../httpAgent';
import React from 'react';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;
class Special extends React.Component {
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
        const { post_article_list, post_message_list, 
            com_sort_list, html_head_info, com_label_integer, post_view_list, com_class_list } = this.props.initialReduxState;
        return (
            <Layout html_head_info={html_head_info}>
                <Header com_sort_list={com_sort_list.data} com_label_integer={com_label_integer}/>
                <div className={styles.homeWrap}>
                    <div className={styles.homeContent}>
                        <Card
                            style={{ width: 300 }}
                            cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                            }
                            actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                            ]}
                        >
                            <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="Card title"
                            description="This is the description"
                            />
                        </Card>
                    </div>
                    <div className={styles.homeContent}>
                        <Card
                            style={{ width: 300 }}
                            cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                            }
                            actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                            ]}
                        >
                            <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="Card title"
                            description="This is the description"
                            />
                        </Card>
                    </div>
                    <div className={styles.homeContent}>
                        <Card
                            style={{ width: 300 }}
                            cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                            }
                            actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                            ]}
                        >
                            <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="Card title"
                            description="This is the description"
                            />
                        </Card>
                    </div>
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


export default Special;
