import { useEffect, useRef } from 'react';

const useTestimonial = () => {
  const testimonialListRef = useRef();
  const testimonialRef = useRef();

  // Function that change between different testimonials
  const changeTestimonial = () => {
    // Get the height of each testimonial element
    const testimonialHeight = testimonialRef.current.offsetHeight;

    // Get the first testimonial element
    const firstTestimonial = testimonialListRef?.current.childNodes[0];

    // Scroll the list of testimonials
    testimonialListRef.current.style.transition = 'all .3s ease-in-out';
    testimonialListRef.current.style.transform = `translateY(-${testimonialHeight}px)`;

    // This function resets the testimonials list to the beginning and adds the first element
    // of the list to the end
    const finishTransition = () => {
      testimonialListRef.current.style.transition = 'none';
      testimonialListRef.current.style.transform = 'translateY(0px)';

      testimonialListRef.current.appendChild(firstTestimonial);

      testimonialListRef.current.removeEventListener('transitionend', finishTransition);
    };

    // Add an event when the transition finishes
    testimonialListRef.current.addEventListener('transitionend', finishTransition);
  };

  useEffect(() => {
    // Every 7 seconds the function is called
    setInterval(() => {
      changeTestimonial();
    }, 7000);
  }, []);

  return { testimonialListRef, testimonialRef };
};

export default useTestimonial;
