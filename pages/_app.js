import App from 'next/app';
import { Provider } from 'react-redux';
import initializeStore from '../store/store';
import withRedux from '../lib/with-redux-app';
import '../styles/layoutStyle.scss';
import React from 'react';
import Layout from '../components/Layout';
import httpAgent from '../httpAgent';

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
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Provider store={initializeStore()}>
                <Layout sortList={this.props.sortList} >
                        {/* 把pageProps解构后传递给组件 */}
                        <Component {...pageProps} />
                </Layout>
            </Provider>
        )
    }
}

MyApp.getInitialProps = async () => {
    const data = await httpAgent({ url: '/sort/getSortList', method: 'get' , params: {}})
    return {
        sortList: data.data
    }
}

export default withRedux(MyApp)
