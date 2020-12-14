import { withRouter } from 'next/router';
import { connect } from 'react-redux'
import LeavingMessage from '../components/LeavingMessage';
import VisitorList from '../components/VisitorList';
import ArticleList from '../components/ArticleList';
import Head from 'next/head'

const Post = withRouter(({ handleLabelPage, labelPage , router}) => {
    handleLabelPage(router.query.id)
    return (
    <div className="homeWrap">
        <Head>
            <title>{router.query.name}</title>
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
        handleLabelPage(labelPage = 0) {
            dispatch({ type: 'handleLabelPage', labelPage })
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Post)

// export default Post;
