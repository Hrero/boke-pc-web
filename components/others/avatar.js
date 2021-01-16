import { dateFormat } from 'zgl-utils-js';
import { connect } from 'react-redux';
import React from 'react';
class Avatar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const { au_in_for, info_commentList_list } = this.props;
        const { name, picture, gmtCreated, reads } = au_in_for;
        return (
            <div className="avatarWrap">
                <img src={picture} className="headImg" alt={name} />
                <div className="ArticleAvatarInfo">
                    <div className="nameInfo">{name}</div>
                    <div className="timeOtherInfo">
                        <span className="timeSpan">{dateFormat(gmtCreated, 'yyyy-MM-dd hh:mm:ss')}</span>
                        <span className="timeSpan">留言 {info_commentList_list?.length}</span>
                        <span className="timeSpan">阅读 {reads}</span>
                    </div>
                </div>
                <style jsx>
                    {
                        `
                            .timeOtherInfo{
                                display: flex;
                                color: #969696;
                            }
                            .timeSpan{
                                margin-right: 10px;
                                color: #969696;
                            }
                            .nameInfo{
                                font-size: 16px;
                                font-weight: 500;
                                margin-right: 8px;
                                margin-bottom: 5px;
                            }
                            .avatarWrap{
                                display: flex;
                                align-items: center;
                                margin-bottom: 30px;
                            }
                            .headImg{
                                display: block;
                                border-radius: 50%;
                                border: 1px solid #eee;
                                min-width: 48px;
                                min-height: 48px;
                                width: 48px;
                                height: 48px;
                            }
                            .ArticleAvatarInfo{
                                margin-left: 8px;
                                font-size: 13px;
                                color: #404040;
                            }
                        ` 
                    }
                </style>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { info_commentList_list } = state
    return {
        info_commentList_list
    }
}

export default Avatar;
// export default connect(
//     mapStateToProps
// )(Avatar)