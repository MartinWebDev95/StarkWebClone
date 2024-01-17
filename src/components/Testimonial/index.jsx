import styles from './Testimonial.module.css';

const Testimonial = ({ item, testimonialRef }) => {
  return (
    <li
      className={styles.testimonialContainer}
      key={item.id}
      ref={testimonialRef}
    >
      <div className={styles.infoProfile}>
        <img src={item.profile} alt={item.author} />

        <p>
          <span>
            {`${item.author},`}
          </span>
          <span>
            {item.job}
          </span>
        </p>
      </div>

      <div className={styles.quote}>
        <blockquote>{item.testimonial}</blockquote>
      </div>
    </li>
  )
}

export default Testimonial