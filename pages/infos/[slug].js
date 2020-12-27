import { useRouter } from "next/router";
import ErrorPage from "next/error";
import VisitorList from '../../components/VisitorList';
import LeavingMessage from '../../components/LeavingMessage';
import PostBody from "../../components/postBody";
import httpServer from '../../httpServer';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import InfoThumdsIcon from '../../components/others/InfoThumdsIcon';

export default function Info({ slug, initialReduxState, morePosts, preview }) {
    const router = useRouter();
    const { info_Article_Vo, info_message_list, info_view_list, com_label_integer, com_sort_list, html_head_info, au_in_for, user_ip } = initialReduxState;
    if (!router.isFallback && !slug) {
        return <ErrorPage statusCode={404} />;
    }
    return (
        <Layout html_head_info={html_head_info}>
            <Header com_sort_list={com_sort_list.data} com_label_integer={com_label_integer}/>
            <div className="bodyWrap">
                <div className="homeWrap">
                    <div>
                        <PostBody content={info_Article_Vo.data.html} au_in_for={au_in_for}/>
                    </div>
                    <div className="homeRight">
                        <VisitorList view_list={info_view_list?.data}/>
                        <LeavingMessage message_list={info_message_list?.data}/>
                    </div>
                </div>
                <InfoThumdsIcon 
                    thumdsStatus={info_Article_Vo.data.thumdsStatus} 
                    thumdsSum={info_Article_Vo.data.thumdsSum}
                    articleId={info_Article_Vo.data.id}
                    ip={user_ip}
                />
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

