
import useTestimonial from "../../hooks/useTestimonial";
import getTestimonials from "../../lib/getTestimonials";
import Testimonial from "../Testimonial";
import styles from './ListOfTestimonials.module.css'

const ListOfTestimonials = () => {
  const { testimonialListRef, testimonialRef } = useTestimonial();

  return (
    <ul className={styles.testimonialList} ref={testimonialListRef}>
      {getTestimonials.map((item) => (
        <Testimonial
          key={item.id}
          item={item}
          testimonialRef={testimonialRef}
        />
      ))}
    </ul>
  )
}

export default ListOfTestimonials