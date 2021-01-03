
import Avatar from '../components/others/avatar';
import Comment from '../components/Comment';

export default function PostBody({ content, au_in_for, user_ip, com_user_info, slug }) {
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
            <Comment slug={slug} user_ip={user_ip} com_user_info={com_user_info}/>
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
