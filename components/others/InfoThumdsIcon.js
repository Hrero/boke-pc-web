import httpAgent from '../../httpAgent';
import cn from 'classnames';
import React from 'React';

class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thumdsStatus: this.props.thumdsStatus,
            thumdsSum: this.props.thumdsSum,
            articleId: this.props.articleId,
            ip: this.props.ip,
            changeNum: 0
        };
    }
    handleThumdsVo = async () => {
        const initialReduxState = await httpAgent({url: '/article/addThumbsArticle', method: 'post' , params: {
            articleId: this.state.articleId,
            ip: this.state.ip,
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
        console.log(initialReduxState, 'initialReduxState');
    }
    render() {
        const {thumdsStatus, thumdsSum, changeNum} = this.state;
        console.log(thumdsStatus, thumdsSum, changeNum, 'thumdsStatusthumdsStatus');
        return (
            <div className="_3Pnjry " onClick={this.handleThumdsVo}>
                <div  className={cn('svgZan', {
                    '_2VdqdF': thumdsStatus === 1
                })}>
                    <i className="anticon">
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
                <div className="P63n6G">
                    <div className={cn('_2LKTFF', {
                        '_2LKTFFSHOW': thumdsStatus === 1 
                    })}>
                        {
                            thumdsStatus === 1?
                            <span className="_1GPnWJ" role="button" aria-label="查看点赞列表">{thumdsSum + 1}赞</span>
                            :
                            <span className="_1GPnWJ" role="button" aria-label="查看点赞列表">{thumdsSum - 1 >= 0? thumdsSum - 1 : 0}赞</span>
                        }
                        {
                            thumdsSum - 1 >= 0?
                            <span className="_1GPnWJ">{thumdsSum}赞</span>
                            : 
                            <span className="_1GPnWJ">{thumdsSum + 1}赞</span>
                        }
                        
                    </div>
                </div>
                <style jsx>
                    {
                        `
                        ._3Pnjry {
                            position: fixed;
                            z-index: 98;
                            top: 216px;
                            -webkit-user-select: none;
                            -moz-user-select: none;
                            -ms-user-select: none;
                            user-select: none;
                            left: calc((100vw - 1000px)/2 - 78px);
                        }
                        .svgZan{
                            justify-content: center;
                            width: 48px;
                            height: 48px;
                            font-size: 18px;
                            border-radius: 50%;
                            box-shadow: 0 2px 10px rgba(0,0,0,.05);
                            background-color: #fff;
                            display: flex;
                            align-items: center;
                        }
                        .anticon {
                            cursor: pointer;
                            display: inline-block;
                            color: inherit;
                            font-style: normal;
                            line-height: 0;
                            text-align: center;
                            text-transform: none;
                            vertical-align: -.125em;
                            text-rendering: optimizeLegibility;
                            -webkit-font-smoothing: antialiased;
                            -moz-osx-font-smoothing: grayscale;
                        }
                        .P63n6G {
                            margin-top: 4px;
                            font-size: 14px;
                            text-align: center;
                            color: #969696;
                            overflow: hidden;
                            height: 19px;
                        }
                        ._2LKTFF{
                            transition: transform .2s;
                        }
                        ._1GPnWJ {
                            display: block;
                            height: 19px;
                        }
                        ._2LKTFFSHOW {
                            transform: translateY(-19px);
                        }
                        .P63n6GSHOW {
                            color: #ec7259;
                        }
                        ._2VdqdF {
                            color: #fff;
                            background-color: #ec7259;
                        }
                        ` 
                    }
                    </style>
            </div>
        )
    }
}

export default Intro;
