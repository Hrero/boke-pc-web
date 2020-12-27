import { dateFormat } from 'zgl-utils-js';

export default function Avatar({ au_in_for }) {
    const { name, picture, gmtCreated, message, reads } = au_in_for;
    return (
        <div className="avatarWrap">
            <img src={picture} className="headImg" alt={name} />
            <div className="ArticleAvatarInfo">
                <div className="nameInfo">{name}</div>
                <div className="timeOtherInfo">
                    <span className="timeSpan">{dateFormat(gmtCreated, 'yyyy-MM-dd hh:mm:ss')}</span>
                    <span className="timeSpan">留言 {message}</span>
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
