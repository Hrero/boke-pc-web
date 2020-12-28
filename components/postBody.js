
import Avatar from '../components/others/avatar';

export default function PostBody({ content, au_in_for }) {
    const { title } = au_in_for;
    return (
        <div>
            <div className="md-editor-container">
                <h1>{title}</h1>
                <Avatar au_in_for={au_in_for} />
                <div
                    className="preview-container"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
            <div id="note-page-comment">
                <section className="ouvJEz">
                    <div className="_26JdYM">
                        <img className="_3LHFA-" src="https://upload.jianshu.io/users/upload_avatars/25124160/9f030a41-c698-4d43-a999-ff9a8cc3c6e6?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp" alt="" />
                        <div className="_3GKFE3">
                            <textarea className="_1u_H4i" placeholder="写下你的评论..."></textarea>
                            <div>
                                <div className="_3IXP9Q">
                                    <div class="className">
                                        <i aria-label="icon: smile" tabindex="-1" className="anticon anticon-smile _3MkVdm">
                                            <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="smile" width="24px" height="24px" fill="currentColor" aria-hidden="true">
                                                <path d="M288 421a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm352 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 0 1 248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 0 1 249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 0 1 775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 0 1 775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 0 0-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 0 0-8-8.4z"></path>
                                            </svg>
                                        </i>
                                        <span>⌘ + Return 发表</span>
                                    </div>
                                    <div className="_3Tp4of">
                                        <button disabled="" type="button" className="_1OyPqC">
                                            <span>发布</span>
                                        </button>
                                        <button type="button" className="_1OyPqC">
                                            <span>取消</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <style jsx>
                {
                    `
                    .ouvJEz {
                        background-color: #fff;
                        border-radius: 4px;
                        margin-bottom: 10px;
                        padding: 32px;
                        width: 730px;
                    }
                    ._26JdYM {
                        display: flex;
                    }
                    ._3LHFA- {
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        border: 1px solid #eee;
                        margin-right: 10px;
                    }
                    ._3GKFE3 {
                        margin-top: 0;
                        margin-bottom: 48px;
                        flex-grow: 1;
                    }
                    ._1u_H4i {
                        padding: 12px 16px;
                        width: 100%;
                        height: 90px;
                        font-size: 13px;
                        border: 1px solid #eee;
                        border-radius: 4px;
                        background-color: #fafafa;
                        resize: none;
                        display: inline-block;
                        vertical-align: top;
                        outline-style: none;
                    }
                    ._3IXP9Q {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-top: 16px;
                        font-size: 14px;
                        color: #969696;
                    }
                    .SKZUyR {
                        flex-shrink: 0;
                        display: flex;
                        align-items: center;
                    }
                    ._3MkVdm {
                        font-size: 18px;
                        margin-right: 12px;
                    }
                    ._3Tp4of {
                        flex-shrink: 0;
                        display: flex;
                        align-items: center;
                    }
                    ._1OyPqC {
                        position: relative;
                        flex-shrink: 0;
                        display: inline-flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 50px;
                        touch-action: manipulation;
                        cursor: pointer;
                        background-image: none;
                        white-space: nowrap;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                        transition: all .2s cubic-bezier(.645,.045,.355,1);
                        font-size: 14px;
                        padding: 4px 12px;
                        color: #969696;
                        background-color: #fff;
                        border: 1px solid #999;
                        margin-left: 8px;
                    }
                    .anticon {
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
    )
}
