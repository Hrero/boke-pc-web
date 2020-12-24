export default function PostBody({ content }) {
  return (
    <div className="md-editor-container">
        <div
            className="preview-container"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    </div>
  )
}
