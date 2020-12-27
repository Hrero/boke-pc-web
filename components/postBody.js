
import Avatar from '../components/others/avatar';

export default function PostBody({ content, au_in_for }) {
    const { title } = au_in_for;
    return (
        <div className="md-editor-container">
            <h1>{title}</h1>
            <Avatar au_in_for={au_in_for} />
            <div
                className="preview-container"
                dangerouslySetInnerHTML={{ __html: content }}
            />
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
