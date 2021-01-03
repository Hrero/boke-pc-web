import React from 'React';
import { Form, Input, Button, Checkbox } from 'antd';
import { isEmpty } from 'zgl-utils-js';
import httpAgent from '../httpAgent';
import cn from 'classnames';
import styles from '../styles/comment.module.scss';


const { TextArea } = Input;
import LocalizedModal from '../components/others/LocalizedModal';
class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isUser: false,
            visible: false,
            user_ip: this.props.user_ip,
            content: '',
            com_user_info: {},
            commentList: [],
            length: 0,
            commlist: [],
            comChildList: [],
            oneIndex: null
        };
        this.articleId = this.props.slug;
    }
    handleSubmit = ({parentCommentId, parentCommentUserId, replyCommentId, replyCommentUserId, commentLevel, content}) => {
        if (!this.state.isUser) {
            this.setState({
                visible: true
            })
            return;
        }
        if (!content) {
            return;
        }
        const params = {
            articleId: this.articleId, // 文章id
            userid: this.state.com_user_info.id, // 评论人id
            parentCommentId, // 父评论id
            parentCommentUserId, // 父级评论的userid
            replyCommentId, // 被回复的userid
            replyCommentUserId, // 被回复的用户id
            commentLevel, // 评论级别
            content // 内容
        }
        httpAgent({url: '/message/addCommentList', method: 'post' , params}).then(res => {
            if (res.code === 0) {
                this.getCommentList()
                this.setState({
                    commlist: [],
                    comChildList: []
                })
            }
            this.setState({
                visible: false
            })
        })
    }
    onReviewBackMessage = (one, cur, index) => {
        if (one === 1) {
            const commlist = this.state.commlist;
            commlist.push(cur)
            this.setState({
                commlist
            })
        }
        if (one === 2) {
            const comChildList = this.state.comChildList;
            comChildList.push(cur + '_' + index);
            this.setState({
                comChildList
            })
        }
    }
    getCommentList() {
        httpAgent({url: '/message/getCommentList', method: 'post' , params: {
            articleId: this.props.slug
        }}).then(res => {
            let length = res.data.length;
            res.data && res.data.forEach(element => {
                length = length + element.child.length
            });
            this.setState({
                commentList: res.data,
                length
            })
        })
    }
    componentDidMount() {
        this.getCommentList()
    }
    componentWillReceiveProps(nextProps) {
        const { com_user_info } = this.state;
        if (JSON.stringify(nextProps.com_user_info) != JSON.stringify(com_user_info)) {
            this.setState({
                com_user_info: nextProps.com_user_info
            })
            if (!isEmpty(nextProps.com_user_info)) {
                this.setState({
                    isUser: true
                })
            }
        }
    }
    render() {
        const { com_user_info, commentList, length, commlist, comChildList } = this.state;
        return (
            <div id="note-page-comment">
                <LocalizedModal visible={this.state.visible} user_ip={this.state.user_ip}/>
                <section className={styles.ouvJEz}>
                    <div className={styles._26JdYM}>
                        <img className={styles._3LHFA} src="https://upload.jianshu.io/users/upload_avatars/25124160/9f030a41-c698-4d43-a999-ff9a8cc3c6e6?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp" alt="" />
                        <div className={styles._3GKFE3}>
                            <Form onFinish={this.handleSubmit}>
                                <div className={styles.heightNone}>
                                <Form.Item
                                    name="parentCommentId"
                                    initialValue={null}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="parentCommentUserId"
                                    initialValue={null}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="replyCommentId"
                                    initialValue={null}
                                >
                                    <Input  />
                                </Form.Item>
                                <Form.Item
                                    name="replyCommentUserId"
                                    initialValue={null}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="commentLevel"
                                    initialValue={1}
                                >
                                    <Input  />
                                </Form.Item>
                                </div>
                                <Form.Item
                                    name="content"
                                >
                                    <TextArea className={styles._1u_H4i} placeholder="写下你的评论..."></TextArea>
                                </Form.Item>
                                <div>
                                    <div className={styles._3IXP9Q}>
                                        <div className={styles.SKZUyR}>
                                        {com_user_info?.nickname?com_user_info?.nickname: ''}
                                        </div>
                                        <div className={styles._3Tp4of}>
                                            <button type="submit" disabled="" className={cn(styles._1OyPqC, styles.fabuss)}><span>发布</span></button>
                                            <button type="button" className={styles._1OyPqC}><span>取消</span></button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <h3 className={styles.QxT4hD}>
                        <div className={styles._10KzV0}>
                            <span>全部评论</span>
                            <span className={styles._2R7vBo}>{length}</span>
                        </div>
                    </h3>
                    {
                        commentList.map((comment, index) => {
                            return (
                                <div key={comment.id} className={cn(styles._2IUqvs, styles._3uuww8)} id="comment-63103346">
                                    <a className={styles._1OhGeD} href="#" target="_blank" rel="noopener noreferrer">
                                        <img className={styles._1_jhXc} src={comment.userInfo.headPicture} alt="" />
                                    </a>
                                    <div className={styles._1K9gkf}>
                                        <div className={styles._23G05g}>
                                            <a className={styles._1OhGeD} href="#" target="_blank" rel="noopener noreferrer">{comment.userInfo.nickname}</a>
                                        </div>
                                        <div className={styles._1xqkrI}>
                                            <span>{index + 1}楼 </span><time >{comment.createDate}</time>
                                        </div>
                                        <div className={styles._2bDGm4}>{comment.content}</div>
                                        <div className={styles._2ti5br}>
                                            <div className={styles._3MyyYc}>
                                                <span className={styles._1Jvkh4} onClick={() => this.onReviewBackMessage(1, index)} role="button" aria-label="添加评论">回复</span>
                                            </div>
                                        </div>
                                        <div className={cn(styles.hideBlock, {
                                            [styles.showBlock]: commlist.some(so => so === index)
                                        })}>
                                            <div className={styles._3GKFE3} >
                                            <Form onFinish={this.handleSubmit}>
                                                <div className={styles.heightNone}>
                                                <Form.Item
                                                    name="parentCommentId"
                                                    initialValue={comment.id}
                                                >
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item
                                                    name="parentCommentUserId"
                                                    initialValue={comment.userid}
                                                >
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item
                                                    name="replyCommentId"
                                                    initialValue={null}
                                                >
                                                    <Input  />
                                                </Form.Item>
                                                <Form.Item
                                                    name="replyCommentUserId"
                                                    initialValue={null}
                                                >
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item
                                                    name="commentLevel"
                                                    initialValue={2}
                                                >
                                                    <Input  />
                                                </Form.Item>
                                                </div>
                                                <Form.Item
                                                    name="content"
                                                >
                                                    <TextArea className={styles._1u_H4i} placeholder="写下你的评论..."></TextArea>
                                                </Form.Item>
                                                <div>
                                                    <div className={styles._3IXP9Q}>
                                                        <div className={styles.SKZUyR}></div>
                                                        <div className={styles._3Tp4of}>
                                                            <button type="submit" disabled="" className={cn(styles._1OyPqC, styles.fabuss)}><span>发布</span></button>
                                                            <button type="button" className={styles._1OyPqC}><span>取消</span></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Form>
                                            </div>
                                        </div>
                                        {
                                            comment.child.map((child, cur) => {
                                                return (
                                                    <div key={child.id} className={styles._2kvBge}>
                                                        <div className={styles._3g0yKR}>
                                                            <div className={styles._3d_vFY}>
                                                                <div>
                                                                    <div className={styles._23G05g}>
                                                                        <a className={styles._1OhGeD} href="#" target="_blank" rel="noopener noreferrer">{child.userInfo.nickname}</a>
                                                                        {
                                                                            child.isAuthor === 1? <span className={styles._3pyYXB}>作者</span>: <span></span>
                                                                        }
                                                                    </div>
                                                                    <div className={styles._1xqkrI}>
                                                                        <time className="2020-12-18T06:45:56.000Z">{child.createDate}</time>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={styles._2bDGm4}>
                                                                {
                                                                    child.replyCommentNickName?
                                                                    <a href="#" className={styles.maleskineauthor} target="_blank" data-user-slug="a92d6c1e2f2f">@{child.replyCommentNickName}</a> 
                                                                    : <span></span>
                                                                }
                                                                {child.content}
                                                            </div>
                                                            <div className={styles._2ti5br}>
                                                                <div className={styles._3MyyYc}>
                                                                    <span className={styles._1Jvkh4} role="button" aria-label="回复评论" onClick={() => this.onReviewBackMessage(2, cur, index)} >回复</span>
                                                                </div>
                                                            </div>
                                                            <div className={cn(styles.hideBlock, {
                                                                    [styles.showBlock]: comChildList.some(so => so === cur + '_' + index)
                                                                })}>
                                                                <div className={styles._3GKFE3} >
                                                                    <Form onFinish={this.handleSubmit}>
                                                                        <div className={styles.heightNone}>
                                                                        <Form.Item
                                                                            name="parentCommentId"
                                                                            initialValue={comment.id}
                                                                        >
                                                                            <Input />
                                                                        </Form.Item>
                                                                        <Form.Item
                                                                            name="parentCommentUserId"
                                                                            initialValue={comment.userid}
                                                                        >
                                                                            <Input />
                                                                        </Form.Item>
                                                                        <Form.Item
                                                                            name="replyCommentId"
                                                                            initialValue={child.id}
                                                                        >
                                                                            <Input  />
                                                                        </Form.Item>
                                                                        <Form.Item
                                                                            name="replyCommentUserId"
                                                                            initialValue={child.userid}
                                                                        >
                                                                            <Input />
                                                                        </Form.Item>
                                                                        <Form.Item
                                                                            name="commentLevel"
                                                                            initialValue={2}
                                                                        >
                                                                            <Input  />
                                                                        </Form.Item>
                                                                        </div>
                                                                        <Form.Item
                                                                            name="content"
                                                                        >
                                                                            <TextArea className={styles._1u_H4i} placeholder="写下你的评论..."></TextArea>
                                                                        </Form.Item>
                                                                        <div>
                                                                            <div className={styles._3IXP9Q}>
                                                                                <div className={styles.SKZUyR}></div>
                                                                                <div className={styles._3Tp4of}>
                                                                                    <button type="submit" disabled="" className={cn(styles._1OyPqC, styles.fabuss)}><span>发布</span></button>
                                                                                    <button type="button" className={styles._1OyPqC}><span>取消</span></button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
            </section>
                <style jsx>
                    {
                        `
                        h1{
                            font-size: 30px;
                            font-weight: 700;
                            word-break: break-word;
                            color: #404040;
                            margin-bottom: .5em;
                            line-height: 1.42857;
                        }
                        
                        ` 
                    }
                </style>
            </div>
        );
    };
}

export default Comment;

