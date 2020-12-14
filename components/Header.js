import Link from 'next/link';
import imgs from '../images/images';
import styles from '../styles/header.module.scss';
import http from '../http';

const Header = (props) => {
    console.log('ssss');
    return (
        <header className={styles.header}>
            <div>
                <img className={styles.headLogoImg} src={ imgs.headerLogo } />
            </div>
            <div className={styles.sortList}>
                    <Link href="/">
                        <div className={styles.span, styles.spanShow}>首页</div>
                    </Link>
                    {props.sortList.map(show => {
                        return (
                            <Link key={show.value} as={`/load/${show.value}`} href={`/post?id=${show.value}&name=${show.name}`}>
                                <div className={styles.span}>{show.name}</div>
                            </Link>
                        );
                    })}
            </div>
        </header>
    )
}

Header.getInitialProps = async (context) => {
    const data = await http({ url: '/sort/getSortList', method: 'get' , params: {}})
    return {
        shows: data.data
    }
}

export default Header;
