import Meta from './others/meta';


const Layout = ({children, html_head_info}) => {
    return (
        <div>
            <Meta html_head_info={html_head_info}/>
            {children}
        </div>
    )
}

export default Layout