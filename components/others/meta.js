import Head from "next/head";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "../../lib/constants";

export default function Meta({html_head_info}) {
    const { headTitle, headKeywords, headDescription, author } = html_head_info;

    return (
        <Head>
        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            // href="/favicon/favicon-32x32.png"
            href="/favicon/favicon_32px.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            // href="/favicon/favicon-16x16.png"
            href="/favicon/favicon_16px.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#000000"
        />
        

        <link rel="shortcut icon" href="/favicon/favicon_48px.ico" />
        <meta name="baidu-site-verification" content="code-AqfM9KnZgU" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#000" />
        <meta name="description" content={headDescription? headDescription: 'js和java的博客分享,eleven,ELEVEN,HAOZENGRUN,haozengrun,react,canal,数仓,郝增润,郝增润的博客,vue'} />
        <meta name="keywords" content={headKeywords? headKeywords: 'js和java的博客分享,eleven,ELEVEN,HAOZENGRUN,haozengrun,react,canal,数仓,郝增润,郝增润的博客,vue'} />
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
        <meta name="author" content={author? author: 'ELEVEN'} />
        {/* <meta name="viewport" content="width=640,initial-scale=0.75,maximum-scale=0.75,minimum-scale=0.75,target-densitydpi=device-dpi" /> */}
        <title>{headTitle ? headTitle : "ELEVEN"}</title>
        </Head>
    );
}
