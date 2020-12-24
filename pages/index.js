import Container from '../components/others/container'
import MoreStories from '../components/others/more-stories'
import HeroPost from '../components/others/hero-post'
import Intro from '../components/others/intro'
import Layout from '../components/others/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

const Index = ({ allPosts }) => {
    const heroPost = allPosts[0]
    console.log(heroPost, 'heroPost');
    return (
        <>
        <Layout>
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
          title: 'Preview Mode for Static Generation',
          date: '2020-03-16T05:35:07.322Z',
          slug: '1',
          author: { name: 'Joe Haddad', picture: '/assets/blog/authors/joe.jpeg' },
          coverImage: '/assets/blog/preview/cover.jpg',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
        }
    ]
    return {
        props: { allPosts },
    }
}

export default Index;
