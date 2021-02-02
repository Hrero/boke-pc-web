import Link from 'next/link';
import imgs from '../images/images';
import styles from '../styles/header.module.scss';
import { useRouter } from 'next/router'

const Header = ({com_label_integer}) => {
    
    const router = useRouter()
    console.log(router, 'router');
    com_label_integer = router.query.id?router.query.id: com_label_integer;
    com_label_integer = router.query.com_label_integer?router.query.com_label_integer: com_label_integer;
    return (
        <div className={styles.div}>
            <header className={styles.header}>
                <div className="logo">
                    <Link href="/">
                        <img className={styles.headLogoImg} src={ imgs.headerLogo } />
                    </Link>
                </div>
                <div className={styles.sortList}>
                        <Link as={`/load/1`} href={`/post?id=1&name=开发者手册`}>
                            <div className={[ com_label_integer ==  1? styles.spanShow : styles.span].join('')}>开发者手册</div>
                        </Link>
                        <Link as={`/load/2`} href={`/special?id=2&name=专题`}>
                            <div className={[ com_label_integer ==  2? styles.spanShow : styles.span].join('')}>专题</div>
                        </Link>
                </div>
                <style jsx>
                    {`
                        .logo{
                            cursor: pointer;
                        }
                    `}
                </style>
            </header>
        </div>
    )
}

export default Header;
