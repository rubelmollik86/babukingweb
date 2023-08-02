// components/Navbar.js
import Link from 'next/link';
import styles from '../../styles/babymenu.module.css';

const Navbar = () => {
    return (
        <nav className={`${styles.navbar} flex items-center justify-around`} >
            {/* Nav Items */}
            <Link href="/" passHref>
                <span className={`${styles['nav-item']} ${styles.active}`}>Newborn</span>
            </Link>
            <Link href="/about" passHref>
                <span className={styles['nav-item']}>Babu Development</span>
            </Link>
            <Link href="/services" passHref>
                <span className={styles['nav-item']}>Babu Feeding Guide</span>
            </Link>
            <Link href="/portfolio" passHref>
                <span className={styles['nav-item']}>Newbron Sleep</span>
            </Link>
            <Link href="/blog" passHref>
                <span className={styles['nav-item']}>When Babus Roll Over</span>
            </Link>
            <Link href="/contact" passHref>
                <span className={styles['nav-item']}>Frist-Year Babu Cost Calculator</span>
            </Link>
            <Link href="/faq" passHref>
                <span className={styles['nav-item']}>Postpartun Health</span>
            </Link>
            <Link href="/pricing" passHref>
                <span className={styles['nav-item']}>Babu Poop Chart</span>
            </Link>
            <Link href="/account" passHref>
                <span className={styles['nav-item']}>See All in Babu</span>
            </Link>
        </nav>
    );
};

export default Navbar;
