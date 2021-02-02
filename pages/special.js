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
                                            src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3391632359,3407789320&fm=26&gp=0.jpg"
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
                                avatar={<Avatar src="https://static2.zugeliang.com/lease/img/e70d2cb0-46b4-11eb-804e-e7d3fb3f1f4b.png" />}
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
                                            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200306%2F3e746439381244d1aeee082e7624bfcb.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614823888&t=9493d19d6becdeb6d6dec2fa22adcc82"
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
                                avatar={<Avatar src="https://static2.zugeliang.com/lease/img/e70d2cb0-46b4-11eb-804e-e7d3fb3f1f4b.png" />}
                                title="基于docker+nest+pm2+脚本部署的一个全栈项目"
                                description="基于docker+nest+pm2+脚本部署的一个全栈项目产出zgl-utils-js包和一个node部署脚本"
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
