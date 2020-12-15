import { connect } from 'react-redux'
import { withRouter } from 'next/router';
import LeavingMessage from '../components/LeavingMessage';
import VisitorList from '../components/VisitorList';
import ArticleList from '../components/ArticleList';
import Head from 'next/head'

const Index = withRouter(({ handleLabelPage, labelPage, router }) => {
    handleLabelPage(0)
    return (
        <div className="homeWrap">
            <Head>
                <title>首页</title>
            </Head>
            <div className="homeLeft">
                <ArticleList />
            </div>
            <div className="homeRight">
                <LeavingMessage />
                <VisitorList />
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
});

function mapStateToProps(state) {
    const { labelPage } = state
    return {
        labelPage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleLabelPage(labelPage) {
            dispatch({ type: 'handleLabelPage', labelPage })
        }
    }
}

// MyApp.getInitialProps = async () => {
//     const data = await http({ url: '/sort/getSortList', method: 'get' , params: {}})
//     return {
//         sortList: data.data
//     }
// }

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Index)

// export default Index;
