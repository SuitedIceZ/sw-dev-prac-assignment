import TopMenuItem from './TopMenuItem';
import styles from './topmenu.module.css';
import Image from 'next/image';

export default function TopMenu() {
    return (
        <div className={styles.menucontainer}> 
            <Image src={'/img/logo.png'} className={styles.logoimg} alt='logo image' 
             width={0} height={0} sizes='100vh'/>
             <TopMenuItem title='Booking' pageRef='/booking'/>
        </div>
    )
}