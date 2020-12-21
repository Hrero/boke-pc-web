import { connect } from 'react-redux'
import Link from 'next/link';
import Router from 'next/router'
import imgs from '../images/images';
import styles from '../styles/header.module.scss';

const Header = ({ com_label_integer, sortList}) => {
    return (
        <header className={styles.header}>
            <div>
                <img className={styles.headLogoImg} src={ imgs.headerLogo } />
            </div>
            <div className={styles.sortList}>
                    <Link href="/">
                        <div className={[ com_label_integer ===  0? styles.spanShow : styles.span].join('')}>首页</div>
                    </Link>
                    {sortList.map(show => {
                        return (
                            <Link key={show.value} as={`/load/${show.value}`} href={`/post?id=${show.value}&name=${show.name}`}>
                                <div className={[ com_label_integer ===  show.value? styles.spanShow : styles.span].join('')}>{show.name}</div>
                            </Link>
                        );
                    })}
            </div>
        </header>
    )
}

function mapStateToProps(state) {
    const { com_label_integer } = state
    return {
        com_label_integer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        comLabelInteger() {
            dispatch({ type: 'comLabelInteger' })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
// export default Header;
