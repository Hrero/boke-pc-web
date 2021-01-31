
import Avatar from '../components/others/avatar';
import Comment from '../components/Comment';
import httpAgent from '../httpAgent';
import React from 'react';

export default class PostBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        /**
         * a 标签添加样式
         */
        var aTagArr = [].slice.apply(document.getElementsByTagName("a"));
        var myhost = window.location.host;
        aTagArr.forEach((e, i) => {
            if(!e.href) return false;
            const ohost = e.href.match(/:\/\/(.*?)\//i);
            ohost[1] != myhost ? e.target = "_blank" : null;
        });
    }
    render() {
        const { au_in_for, content, slug, info_commentList_list } = this.props;
        const { title } = au_in_for;
        return (
            <div>
                <div className="md-editor-container">
                    <h1>{title}</h1>
                    <Avatar au_in_for={au_in_for} info_commentList_list={info_commentList_list}/>
                    <div
                        className="preview-container"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
                <Comment slug={slug} />
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
        )
    }
}
