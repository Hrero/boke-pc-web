import Container from '../components/others/container'
import MoreStories from '../components/others/more-stories'
import HeroPost from '../components/others/hero-post'
import Intro from '../components/others/intro'
import Layout from '../components/others/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

const Index = ({ allPosts }) => {
    const heroPost = allPosts[0]
    const html_head_info ={
        headTitle: 'ELEVEN', 
        headKeywords: 'js和java的博客分享', 
        headDescription: 'js和java的博客分享', 
        author: 'ELEVEN'
    }
    return (
        <>
        <Layout html_head_info={html_head_info}>
            <Head>
                <title>{CMS_NAME}</title>
            </Head>
            <Container>
                <Intro />
                {heroPost && (
                    <HeroPost
                        title={heroPost.title}
                        coverImage={heroPost.coverImage}
                        date={heroPost.date}
                        author={heroPost.author}
                        slug={heroPost.slug}
                        excerpt={heroPost.excerpt}
                    />
                )}
                {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
            </Container>
        </Layout>
        </>
    )
}

export async function getStaticProps() {
    const allPosts = [
        {
          title: '',
          date: '',
          slug: '1',
          author: { name: '', picture: '' },
          coverImage: '/assets/blog/preview/cover.jpg',
          excerpt: ''
        }
    ]
    return {
        props: { allPosts },
    }
}

export default Index;
