import httpAgent from '../../httpAgent';
import cn from 'classnames';
import React from 'react';
import {Modal} from 'antd';
import { PAY_CODE } from '../../lib/constants';
import styles from '../../styles/InfoThumdsIcon.module.scss';
class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            thumdsStatus: false,
            thumdsSum: this.props.thumdsSum,
            articleId: this.props.articleId,
            changeNum: 0
        };
    }
    handleThumdsVo = async () => {
        const initialReduxState = await httpAgent({url: '/article/addThumbsArticle', method: 'post' , params: {
            articleId: this.state.articleId,
            userid: window.localStorage.getItem("userid"),
            status: this.state.thumdsStatus === 1?0:1
        }})
        if (initialReduxState.code === 0) {
            if (this.state.thumdsStatus === 1) {
                this.setState({
                    thumdsStatus: 0,
                    changeNum: this.state.changeNum + 1
                })
            } else {
                this.setState({
                    thumdsStatus: 1,
                    changeNum: this.state.changeNum + 1
                })
            }
        }
    }
    handleZanshangVo = () => {
        this.setState({visible: true})
    }
    handleOk = () => {
        setTimeout(() => {
            this.setState({visible: false})
        }, 2000);
    }
    handleCancel = () => {
        this.setState({
            visible: false
        })
    }
    componentDidMount() {
        httpAgent({url: '/message/getCommentThumds', method: 'post' , params: {
            articleId: this.state.articleId,
            userid: window.localStorage.getItem("userid")
        }}).then(res => {
            this.setState({
                thumdsStatus: res.data.thumdsStatus
            })
        })
    }

    render() {
        const {thumdsStatus, thumdsSum, visible} = this.state;
        return (
            <div className={styles._3Pnjry}>
                <div className={styles._1pUUKr} onClick={this.handleThumdsVo}>
                    <div  className={cn(styles.svgZan, {
                        [styles._2VdqdF]: thumdsStatus === 1
                    })}>
                        <i className={styles.anticon}>
                            <svg t="1609041359031" viewBox="0 0 1024 1024" version="1.1" p-id="2584" width="24" height="24">
                                {
                                    thumdsStatus === 1?
                                    <path d="M773.6 912.7h-1.2c-37.2-0.4-74.5-0.4-111.8-0.4h-56.9c-38 0-76 0-114.1-0.5-21.1-0.6-41.9-5-61.5-13-33.3-13-52.3-42-52.2-79.7l0.1-141.4c0-78.3 0-156.7 0.7-235 0.1-21.3 13.8-41.3 25.5-51.8 45.3-41.4 94.5-93 115.1-162.6 5.7-19.4 7.9-40.8 10.2-63.4 4.6-45 33.8-74.3 72.8-74.3 15.3 0 30.6 4.6 45.6 13.5 30.1 18.1 50.2 46.5 61.3 87 17.8 64.3 8.7 126.7-1.3 180.2v0.2c-2.3 12.5 7.1 24.1 19.9 24.1h130c22.4 0 54.5 2.8 74.3 26.8 14.4 17.5 18.5 41.1 12.4 72.3-18.6 95.9-41.4 192.6-63.2 282.7-6.8 28.1-18.1 54.1-29 79.3l-4.7 10.8c-12.4 29.2-38 45.2-72 45.2zM216.1 903.3h-11.9c-43 0-78.2-35.2-78.2-78.2V476.6c0-43 35.2-78.2 78.2-78.2h11.9c43 0 78.2 35.2 78.2 78.2V825c0.1 43.1-35.1 78.3-78.2 78.3z" fill="#ffffff" p-id="2585"></path>
                                    :
                                    <path d="M773.6 912.7h-1.2c-37.2-0.4-74.5-0.4-111.8-0.4h-56.9c-38 0-76 0-114.1-0.5-21.1-0.6-41.9-5-61.5-13-33.3-13-52.3-42-52.2-79.7l0.1-141.4c0-78.3 0-156.7 0.7-235 0.1-21.3 13.8-41.3 25.5-51.8 45.3-41.4 94.5-93 115.1-162.6 5.7-19.4 7.9-40.8 10.2-63.4 4.6-45 33.8-74.3 72.8-74.3 15.3 0 30.6 4.6 45.6 13.5 30.1 18.1 50.2 46.5 61.3 87 17.8 64.3 8.7 126.7-1.3 180.2v0.2c-2.3 12.5 7.1 24.1 19.9 24.1h130c22.4 0 54.5 2.8 74.3 26.8 14.4 17.5 18.5 41.1 12.4 72.3-18.6 95.9-41.4 192.6-63.2 282.7-6.8 28.1-18.1 54.1-29 79.3l-4.7 10.8c-12.4 29.2-38 45.2-72 45.2zM216.1 903.3h-11.9c-43 0-78.2-35.2-78.2-78.2V476.6c0-43 35.2-78.2 78.2-78.2h11.9c43 0 78.2 35.2 78.2 78.2V825c0.1 43.1-35.1 78.3-78.2 78.3z" fill="#bfbfbf" p-id="2585"></path>
                                }
                            </svg>
                        </i>
                    </div>
                    <div className={styles.P63n6G}>
                    <div className={cn(styles._2LKTFF, {
                        [styles._2LKTFFSHOW]: thumdsStatus === 1 
                    })}>
                        {
                            thumdsStatus === 1?
                            <span className={styles._1GPnWJ} role="button" aria-label="查看点赞列表">{thumdsSum + 1}赞</span>
                            :
                            <span className={styles._1GPnWJ} role="button" aria-label="查看点赞列表">{thumdsSum - 1 >= 0? thumdsSum - 1 : 0}赞</span>
                        }
                        {
                            thumdsSum - 1 >= 0?
                            <span className={styles._1GPnWJ}>{thumdsSum}赞</span>
                            : 
                            <span className={styles._1GPnWJ}>{thumdsSum + 1}赞</span>
                        }
                        
                    </div>
                </div>
                </div>
                <div className={styles._1pUUKr} >
                    <div  className={styles.svgZan} onClick={this.handleZanshangVo}>
                        <i className={styles.anticon}>
                            <svg t="1609041359031" viewBox="0 0 1024 1024" version="1.1" p-id="2584" width="34" height="34">
                                <path d="M723.07624 239.356169c-17.756912 16.022945-37.442863 37.825781-59.070497 65.381416h113.237117c-1.647269 19.47643-2.470904 37.56388-2.470904 54.246094 0 15.421475 0.823635 35.150775 2.470904 59.184289h-64.286849v-63.96715h-400.889703v73.809222H247.777652c1.649075-25.021514 2.463679-46.39989 2.463679-64.120678 0-19.147699-0.814604-38.857131-2.463679-59.14997h123.073771c-19.606478-20.578222-38.48505-42.816357-56.632105-66.716211 16.066294-10.606102 32.139812-21.204979 48.2043-31.811081 24.736132 24.736132 46.50465 52.795702 65.303749 84.171485-15.240853 10.485085-27.548411 15.26614-36.904611 14.355807h90.760562c0-29.154137-0.807379-61.97128-2.431167-98.447819h66.718017c-1.621982 31.930291-2.429361 64.747435-2.429361 98.447819h59.106621c26.036608-38.282754 42.1896-69.477915 48.439108-93.587291 25.464037 11.84336 49.497551 21.244716 72.089704 28.204068zM715.699653 533.60325a953.32637 953.32637 0 0 0-2.47271 69.024555c0 23.643371 0.823635 47.476395 2.47271 71.500877h-64.281431V583.100801H373.60229v100.882597H309.315441c1.649075-28.348564 2.47271-53.830664 2.47271-76.448104 0-22.56506-0.825441-47.207269-2.47271-73.930238l406.384212-0.001806z" fill="#bfbfbf" p-id="2497"></path><path d="M545.870168 609.536582c-18.797293 55.826533-38.492275 92.304877-59.070497 109.445869-20.580028 17.142799-46.338479 31.984478-77.289801 44.516006-30.942291 12.54056-76.924945 22.957009-137.924481 31.245736-4.000769-17.209629-15.222791-37.590973-33.658841-61.153065 48.197075-1.988644 86.671288-6.571015 115.435283-13.763368 28.762188-7.186935 54.896331-19.398763 78.382561-36.62826 23.493455-17.236722 37.910673-48.249455 43.248043-93.041812 23.627115 6.457223 47.252424 12.921671 70.877733 19.378894zM688.637115 511.713715H336.377979c1.649075-26.697683 2.47271-49.723328 2.47271-69.069711 0-19.216335-0.825441-39.760239-2.47271-61.615456h352.259136v130.685167z m-64.288656-47.026647v-34.206124H400.664829v34.206124h223.68363zM579.164152 649.228185c77.50474 30.306503 141.881901 62.533014 193.133288 96.684951-16.057263 14.615902-30.292053 30.06447-42.70979 46.356541-36.377196-26.777156-97.703657-57.585787-183.993833-92.443956 13.393094-19.899085 24.578991-36.76192 33.570335-50.597536z" fill="#bfbfbf" p-id="2498"></path>
                            </svg>
                        </i>
                    </div>
                    <div className={styles.P63n6G}>
                    <div className={styles._2LKTFF}>
                        <span className={styles._1GPnWJ} role="button" aria-label="查看点赞列表">赞赏</span>
                    </div>
                </div>
                <Modal 
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                    closable={false}
                    okText="确认"
                    cancelText="取消"
                >
                    <div className={styles.wrapImg}>
                        <img className={styles.payCode} src={PAY_CODE} alt=""/>
                    </div>
                </Modal>
                </div>
            </div>
        )
    }
}

export default Intro;
