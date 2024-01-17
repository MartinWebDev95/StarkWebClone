import { useState } from 'react';
import useMenu from '../../hooks/useMenu';
import styles from './Navigation.module.css'
import Login from '../Login';
import getHeaderNavLinks from '../../lib/getHeaderNavLinks';

const Navigation = () => {
  const { isMenuHidden, handleOpenMenu } = useMenu();

  const [isSubmenuHidden, setIsSubmenuHidden] = useState(true);

  return (
    <>
      <nav className={styles.navigation} aria-hidden={isMenuHidden}>
        <ul className={styles.list}>
          {getHeaderNavLinks.map((item) => (
            item.submenu ? (
              <li
                key={item.id}
                className={styles.listItem}
                onMouseEnter={() => setIsSubmenuHidden(false)}
                onMouseLeave={() => setIsSubmenuHidden(true)}
              >
                <a href="#" className={styles.listLink}>
                  {item.menu}

                  <svg className={styles.arrow} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.79669 8.0716C6.41769 8.6428 5.58231 8.6428 5.20331 8.0716L3.16242 4.9957C2.73821 4.35637 3.19436 3.5 3.95911 3.5L8.04089 3.5C8.80564 3.5 9.26179 4.35637 8.83758 4.9957L6.79669 8.0716Z" fill="currentColor" />
                  </svg>
                </a>

                <ul className={styles.submenu} aria-hidden={isSubmenuHidden}>
                  {item.submenu.map((subItem) => (
                    <li key={subItem.id} className={styles.submenuItem}>
                      <a href="#" className={styles.submenuLink}>
                        {subItem.submenuItem}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.id} className={styles.listItem}>
                <a href="#" className={styles.listLink}>
                  {item.menu}
                </a>
              </li>
          )))}
        </ul>
      </nav>

      <Login isMenuHidden={isMenuHidden} handleOpenMenu={handleOpenMenu} />
    </>
  )
}

export default Navigation