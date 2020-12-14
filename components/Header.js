import { connect } from 'react-redux'
import Link from 'next/link';
import Router from 'next/router'
import imgs from '../images/images';
import styles from '../styles/header.module.scss';

const Header = ({ labelPage, sortList}) => {
    return (
        <header className={styles.header}>
            <div>
                <img className={styles.headLogoImg} src={ imgs.headerLogo } />
            </div>
            <div className={styles.sortList}>
                    <Link href="/">
                        <div className={[ labelPage ===  0? styles.spanShow : styles.span].join('')}>首页</div>
                    </Link>
                    {sortList.map(show => {
                        return (
                            <Link key={show.value} as={`/load/${show.value}`} href={`/post?id=${show.value}&name=${show.name}`}>
                                <div className={[ labelPage ===  show.value? styles.spanShow : styles.span].join('')}>{show.name}</div>
                            </Link>
                        );
                    })}
            </div>
        </header>
    )
}

function mapStateToProps(state) {
    const { labelPage } = state
    return {
        labelPage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleLabelPage() {
            dispatch({ type: 'handleLabelPage' })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
// export default Header;
