import App, { Container } from 'next/app';
import '../styles/layoutStyle.scss';
import React from 'react';
import Layout from '../components/Layout';
import http from '../http';

class MyApp extends App {
    // App组件的getInitialProps比较特殊
    // 能拿到一些额外的参数
    // Component: 被包裹的组件
    static async getInitialProps(ctx) {
        const { Component } = ctx
        let pageProps = {}

        // 拿到Component上定义的getInitialProps
        if (Component.getInitialProps) {
            // 执行拿到返回结果
            pageProps = await Component.getInitialProps(ctx)
        }
        // 返回给组件
        return {
            pageProps
        }
    }
    // constructor(props) {
    //     console.log(props, '======');
    // }
    // async getHeaderSortList() {
    //     const data = await http({ url: '/sort/getSortList', method: 'get' , params: {}})
    //     return {
    //         sortList: data.data
    //     }
    // }
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <Layout sortList={this.props.sortList}>
                    {/* 把pageProps解构后传递给组件 */}
                    <Component {...pageProps} />
                </Layout>
            </Container>
        )
    }
}

MyApp.getInitialProps = async () => {
    const data = await http({ url: '/sort/getSortList', method: 'get' , params: {}})
    return {
        sortList: data.data
    }
}


export default MyApp