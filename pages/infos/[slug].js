import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import VisitorList from '../../components/VisitorList';
import LeavingMessage from '../../components/LeavingMessage';
import PostBody from "../../components/postBody";
import httpServer from '../../httpServer';
import Layout from '../../components/Layout';

export default function Info({ slug, initialReduxState, morePosts, preview }) {
    const router = useRouter();
    const { info_Article_Vo, info_message_list, info_view_list, com_label_integer } = initialReduxState;
    if (!router.isFallback && !slug) {
        return <ErrorPage statusCode={404} />;
    }
    return (
        <Layout sortList={com_label_integer.data} >
            <div className="bodyWrap">
                <div className="homeWrap">
                    <PostBody content={info_Article_Vo.data.html} />
                    <div className="homeRight">
                        <VisitorList view_list={info_view_list?.data}/>
                        <LeavingMessage message_list={info_message_list?.data}/>
                    </div>
                </div>
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
    // const post = getPostBySlug(params.slug, [
    //     "title",
    //     "date",
    //     "slug",
    //     "author",
    //     "content",
    //     "ogImage",
    //     "coverImage",
    // ]);
    // console.log(post, "postpost");
    // const content = await markdownToHtml(post.content || "");
    // console.log(content, "postpost1");

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    };
}

// export async function getStaticPaths() {
//     const posts = getAllPosts(["slug"]);

//     return {
//         paths: posts.map((post) => {
//             return {
//                 params: {
//                     slug: post.slug,
//                 },
//             };
//         }),
//         fallback: false,
//     };
// }
