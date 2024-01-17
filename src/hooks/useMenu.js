import { useState } from 'react';

const useMenu = () => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  const handleOpenMenu = () => {
    if (isMenuHidden) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    setIsMenuHidden(!isMenuHidden);
  };

  const desktopMediaQuery = window.matchMedia('(min-width: 1000px)');

  // Update the body overflow property when the window size is greater or less than 1000px
  desktopMediaQuery.addEventListener('change', (evt) => {
    if ((evt.matches && isMenuHidden) || (!evt.matches && isMenuHidden)) {
      document.body.style.overflow = 'auto';
    }

    if (!evt.matches && !isMenuHidden) {
      document.body.style.overflow = 'hidden';
    }
  });

  return { isMenuHidden, setIsMenuHidden, handleOpenMenu };
};

export default useMenu;
