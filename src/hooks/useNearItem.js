import { useEffect, useRef, useState } from 'react';

const useNearItem = () => {
  const firstVisor = useRef();
  const secondVisor = useRef();
  const thirdVisor = useRef();
  const fourthVisor = useRef();

  const [isHidden, setIsHidden] = useState({
    first: true,
    second: true,
    third: true,
    fourth: true,
  });

  const [rootMargin, setRootMargin] = useState('0px');

  const handleMediaQuery = ({ event }) => {
    if (event.matches) {
      setRootMargin({
        firstRootMargin: '-200px 0px',
        secondRootMargin: '-300px 0px',
        thirdRootMargin: '-200px 0px',
        fourthRootMargin: '-300px 0px',
      });
    } else {
      setRootMargin({
        firstRootMargin: '-80px 0px',
        secondRootMargin: '0px',
        thirdRootMargin: '-80px 0px',
        fourthRootMargin: '-80px 0px',
      });
    }
  };

  useEffect(() => {
    const onChange = (entries) => {
      entries.forEach((item) => {
        if (item.isIntersecting) {
          setIsHidden({
            ...isHidden, [item.target.getAttribute('data-index')]: false,
          });
        } else {
          setIsHidden({
            ...isHidden, [item.target.getAttribute('data-index')]: true,
          });
        }
      });
    };

    // Do the animation where the element is visible
    const firstObserver = new IntersectionObserver(onChange, {
      rootMargin: rootMargin.firstRootMargin,
    });

    const secondObserver = new IntersectionObserver(onChange, {
      rootMargin: rootMargin.secondRootMargin,
    });

    const thirdObserver = new IntersectionObserver(onChange, {
      rootMargin: rootMargin.thirdRootMargin,
    });

    const fourthObserver = new IntersectionObserver(onChange, {
      rootMargin: rootMargin.fourthRootMargin,
    });

    // Observe the different referential elements using the intersection observer
    if (firstVisor.current) firstObserver.observe(firstVisor.current);
    if (secondVisor.current) secondObserver.observe(secondVisor.current);
    if (thirdVisor.current) thirdObserver.observe(thirdVisor.current);
    if (fourthVisor.current) fourthObserver.observe(fourthVisor.current);

    // Return a function to disconnect the different observers when it is not necessary
    return () => {
      firstObserver.disconnect();
      secondObserver.disconnect();
      thirdObserver.disconnect();
      fourthObserver.disconnect();
    };
  }, [rootMargin]);

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia('(min-width: 400px)');

    // Update the rootMargin property when the component is rendered
    handleMediaQuery({ event: desktopMediaQuery });

    // Update the rootMargin property when the window size is greater or less than 400px
    desktopMediaQuery.addEventListener('change', (evt) => {
      handleMediaQuery({ event: evt });
    });
  }, []);

  return {
    isHidden, firstVisor, secondVisor, thirdVisor, fourthVisor,
  };
};

export default useNearItem;
