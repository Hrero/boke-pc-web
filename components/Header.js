import { connect } from 'react-redux'
import Link from 'next/link';
import imgs from '../images/images';
import styles from '../styles/header.module.scss';

const Header = ({com_sort_list, com_label_integer}) => {
    return (
        <header className={styles.header}>
            <div className="logo">
                <Link href="/">
                    <img className={styles.headLogoImg} src={ imgs.headerLogo } />
                </Link>
            </div>
            <div className={styles.sortList}>
                    {com_sort_list.map(show => {
                        return (
                            <Link key={show.value} as={`/load/${show.value}`} href={`/post?id=${show.value}&name=${show.name}`}>
                                <div className={[ com_label_integer ===  show.value? styles.spanShow : styles.span].join('')}>{show.name}</div>
                            </Link>
                        );
                    })}
            </div>
            <style jsx>
                {`
                    .logo{
                        cursor: pointer;
                    }
                `}
            </style>
        </header>
    )
}

export default Header;
