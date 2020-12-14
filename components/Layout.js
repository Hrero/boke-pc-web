import Header from './Header';

const Layout = (props) => {
    return (
        <div>
            <Header sortList={props.sortList}/>
            {props.children}
        </div>
    )
}

export default Layout