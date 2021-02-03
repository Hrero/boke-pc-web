import Head from 'next/head'
import Layout from '../components/Layout';
import Header from '../components/Header';
import styles from '../styles/special.module.scss';
import initializeStore from '../store/store';
import httpServer from '../httpServer';
import httpAgent from '../httpAgent';
import React from 'react';
import Link from 'next/link';
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
        const { 
            com_sort_list, html_head_info, com_label_integer } = this.props.initialReduxState;
        return (
            <Layout html_head_info={html_head_info}>
                <Header com_sort_list={com_sort_list.data} com_label_integer={com_label_integer}/>
                <div className={styles.homeWrap}>
                    <Link as={`/infos/37?com_label_integer=2`} href={{
                            pathname: '/infos/37?com_label_integer=2',
                            query: { com_label_integer: 2 }
                        }}>
                        <div className={styles.homeContent} >
                            <Card
                                style={{ width: 300 }}
                                cover={
                                    <div
                                        className={styles.imgdiv}
                                    >
                                        <img
                                            alt="博客"
                                            className={styles.imgHead}
                                            src="https://static2.zugeliang01.com/lease/img/1f94bc50-65fb-11eb-9f6c-c38736169de1.jpg"
                                        />

                                    </div>
                                }
                                // actions={[
                                // <SettingOutlined key="setting" />,
                                // <EditOutlined key="edit" />,
                                // <EllipsisOutlined key="ellipsis" />,
                                // ]}
                            >
                                <Meta
                                className={styles.Meta}
                                avatar={<Avatar src="https://static2.zugeliang01.com/lease/img/e70d2cb0-46b4-11eb-804e-e7d3fb3f1f4b.png" />}
                                title="boke系统的搭建和发布"
                                description="这个博客网站的一些搭建和发布信息"
                                />
                            </Card>
                        </div>
                    </Link>
                    <Link as={`/infos/42?com_label_integer=2`} href={{
                            pathname: '/infos/42?com_label_integer=2',
                            query: { com_label_integer: 2 }
                        }}>
                        <div className={styles.homeContent} >
                            <Card
                                style={{ width: 300 }}
                                cover={
                                    <div
                                        className={styles.imgdiv}
                                    >
                                        <img
                                            alt="shell"
                                            className={styles.imgHead}
                                            src="https://static2.zugeliang01.com/lease/img/32711300-65fb-11eb-9f6c-c38736169de1.jpg"
                                        />
                                    </div>
                                }
                                // actions={[
                                // <SettingOutlined key="setting" />,
                                // <EditOutlined key="edit" />,
                                // <EllipsisOutlined key="ellipsis" />,
                                // ]}
                            >
                                <Meta
                                className={styles.Meta}
                                avatar={<Avatar src="https://static2.zugeliang01.com/lease/img/e70d2cb0-46b4-11eb-804e-e7d3fb3f1f4b.png" />}
                                title="基于docker+nest+pm2+脚本部署的一个全栈项目"
                                description="基于docker+nest+pm2+脚本部署的一个全栈项目产出zgl-utils-js包和一个node部署脚本"
                                />
                            </Card>
                        </div>
                    </Link>
                    <Link as={`/infos/47?com_label_integer=2`} href={{
                            pathname: '/infos/47?com_label_integer=2',
                            query: { com_label_integer: 2 }
                        }}>
                        <div className={styles.homeContent} >
                            <Card
                                style={{ width: 300 }}
                                cover={
                                    <div
                                        className={styles.imgdiv}
                                    >
                                        <img
                                            alt="shell"
                                            className={styles.imgHead}
                                            src="https://static2.zugeliang01.com/lease/img/427d59c0-65fb-11eb-9f6c-c38736169de1.jpg"
                                        />
                                    </div>
                                }
                                // actions={[
                                // <SettingOutlined key="setting" />,
                                // <EditOutlined key="edit" />,
                                // <EllipsisOutlined key="ellipsis" />,
                                // ]}
                            >
                                <Meta
                                className={styles.Meta}
                                avatar={<Avatar src="https://static2.zugeliang01.com/lease/img/e70d2cb0-46b4-11eb-804e-e7d3fb3f1f4b.png" />}
                                title="使用react native编写ios和安卓应用"
                                description="使用react native编写ios和安卓应用。回忆辛酸历程、做下记录"
                                />
                            </Card>
                        </div>
                    </Link>
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
