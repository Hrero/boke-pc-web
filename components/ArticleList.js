import Link from 'next/link';
import cn from 'classnames';
import { ARTICLE_BANNER_DEFAULT } from '../lib/constants';
import styles from '../styles/articleList.module.scss';
import React from 'react';
import httpAgent from '../httpAgent';

class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article_list: this.props.article_list
        };
    }
    componentDidMount() {
        httpAgent({url: '/article/getUserArticeleThumbs', method: 'post' , params: {
            userid: localStorage.getItem("userid")
        }}).then(res => {
            const list = [...this.state.article_list];
            res.data.forEach(element => {
                this.setState({
                    article_list: list.map((cur) => {
                        return {...cur, thumdsStatus: (cur.id === element.articleId && element.thumdsStatus === 1)?1:0}
                    })
                })
            });
        })
    }
    render() {
        const { article_list } = this.state;
        return (
            <div>
                <ul>
                    {
                        article_list?.map(item => {
                            return (
                                <Link key={item.id} as={`/infos/${item.id}`} href="/infos/[item.id]" >
                                    <li className={styles.articleLi}>
                                        <div className={styles.ArticleBannerImg}>
                                            <img src={item.picture?item.picture: ARTICLE_BANNER_DEFAULT} alt=""/>
                                        </div>
                                        <div>
                                        <div className={styles.articleTitle}>{item.title}</div>
                                        <div className={styles.articleTxt}>{item.summary}</div>
                                        <div className={styles.articleInfo}>
                                            <span className={styles.spanMargin}>{item.author}</span>
                                            <span className={styles.spanMargin}>
                                                <i>
                                                <svg t="1609077158722" className={cn(styles.icon, styles.point,{})} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11843" width="200" height="200"><path d="M987.52 367.36c-108.16-146.56-266.88-239.36-444.16-239.36-177.28 0-335.36 92.8-444.16 239.36-48 64.64-48 160.64 0 225.28C208 739.2 366.72 832 543.36 832c177.28 0 335.36-92.8 444.16-239.36C1035.52 528 1035.52 432 987.52 367.36zM544 704C420.48 704 320 603.52 320 480S420.48 256 544 256C667.52 256 768 356.48 768 480S667.52 704 544 704zM544 320C455.68 320 384 391.68 384 480S455.68 640 544 640C632.32 640 704 568.32 704 480S632.32 320 544 320z" p-id="11844" fill="#b4b4b4"></path></svg>
                                                </i>
                                                 {item.lookNum?item.lookNum:0}</span>
                                            <span className={styles.spanMargin}>
                                                <i>
                                                    <svg t="1609076656536" className={styles.icon} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7997" width="200" height="200"><path d="M337.36192 914.688c-3.5584 0-7.13728-0.75776-10.496-2.304-8.89856-4.096-14.61248-12.99968-14.61248-22.8096L312.25344 782.5408c0-13.29152-10.81344-24.09984-24.12544-24.09984l-122.88 0c-41.00096 0-74.35264-33.3568-74.35264-74.33216L90.89536 235.6992c0-40.9856 33.35168-74.33728 74.35264-74.33728l708.80768 0c40.97536 0 74.32704 33.35168 74.32704 74.33728l0 448.41472c0 40.97536-33.35168 74.33216-74.32704 74.33216l-336.19968 0c-5.76 0-11.35104 2.048-15.73888 5.8368l-168.41728 144.3584C349.06112 912.62464 343.24992 914.688 337.36192 914.688z" p-id="7998" fill="#b4b4b4"></path></svg>
                                                </i>
                                                {item.messageNum?item.messageNum:0}</span>
                                            <span className={styles.spanMargin}>
                                                <i>
                                                    <svg t="1609077200719" className={cn(styles.icon)} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12657" width="200" height="200">
                                                        {
                                                           item.thumdsStatus === 1?
                                                           <path d="M700.856275 155.542542c-74.768891 0-144.295384 72.696696-190.046381 127.260405C465.073224 228.226958 395.563104 155.542542 320.754305 155.542542c-134.789892 0-244.443291 105.780185-244.443291 235.799424 0 77.56968 39.277562 131.98808 70.844511 175.712931 91.752704 126.998439 322.464249 285.038872 332.234777 291.701618 9.410324 6.414083 20.424168 9.629311 31.401174 9.629311 11.005658 0 21.998013-3.215228 31.397081-9.629311 9.782807-6.662747 240.514819-164.703179 332.23887-291.701618 31.586392-43.723827 70.873164-98.143251 70.873164-175.712931C945.299567 261.321704 835.645145 155.542542 700.856275 155.542542L700.856275 155.542542zM700.856275 155.542542" p-id="3137" fill="#e53a31"></path>
                                                           :
                                                           <path d="M700.856275 155.542542c-74.768891 0-144.295384 72.696696-190.046381 127.260405C465.073224 228.226958 395.563104 155.542542 320.754305 155.542542c-134.789892 0-244.443291 105.780185-244.443291 235.799424 0 77.56968 39.277562 131.98808 70.844511 175.712931 91.752704 126.998439 322.464249 285.038872 332.234777 291.701618 9.410324 6.414083 20.424168 9.629311 31.401174 9.629311 11.005658 0 21.998013-3.215228 31.397081-9.629311 9.782807-6.662747 240.514819-164.703179 332.23887-291.701618 31.586392-43.723827 70.873164-98.143251 70.873164-175.712931C945.299567 261.321704 835.645145 155.542542 700.856275 155.542542L700.856275 155.542542zM700.856275 155.542542" p-id="3137" fill="#b4b4b4"></path>
                                                        }
                                                    </svg>
                                                </i>
                                                {item.thumdsSum? item.thumdsSum: 0}</span>
                                        </div>
                                        </div>
                                    </li>
                                </Link>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    
}

export default ArticleList;
