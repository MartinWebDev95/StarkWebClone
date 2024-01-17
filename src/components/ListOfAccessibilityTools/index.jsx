import useNearItem from '../../hooks/useNearItem';
import styles from './ListOfAccessibilityTools.module.css'

const ListOfAccessibilityTools = () => {

  const {
    isHidden, firstVisor, secondVisor, thirdVisor, fourthVisor,
  } = useNearItem();

  return (
    <ul className={styles.accessibilityToolsList}>
      <li className={`${styles.tool} ${styles.right}`}>
        <div
          className={styles.containerImage}
          id={styles.first}
          ref={firstVisor}
          data-index="first"
        >
          <img
            src="/assets/homepage__superpower.webp"
            alt="Create and test accessible designs in record time"
            aria-hidden={isHidden.first}
          />
        </div>

        <div className={styles.containerInfo}>
          <h2>Meet your new superpower</h2>
          <h3>Create and test accessible designs in record time</h3>
          <p>
            Whether you’re building a website, online shop, mobile app,
            or SaaS product, Stark gives every designer, engineer, PM,
            and QA expert the manual and automated tools to make it accessible
            with ease.
          </p>

          <button type="button">Get started</button>
        </div>

      </li>

      <li className={`${styles.tool} ${styles.left}`}>
        <div className={styles.containerImage} id={styles.second}>
          <div ref={secondVisor} data-index="second">
            <img
              src="/assets/homepage__toolbox-1.webp"
              alt="Create and test accessible designs in record time"
              aria-hidden={isHidden.second}
            />
            <img
              src="/assets/homepage__toolbox-2.webp"
              alt="Create and test accessible designs in record time"
              aria-hidden={isHidden.second}
            />
          </div>
        </div>

        <div className={styles.containerInfo}>
          <h2>Your team&apos;s accessibility toolbox</h2>
          <h3>Everything you need, right where you need it</h3>
          <p>
            From Contrast Checker with Color Suggestions over Alt-Text Annotations to
            Focus Order and more, Stark offers the fully integrated and automated tools
            to help you and your team design, build and test software that meets the latest
            accessibility standards right in your design app and browser of choice.
          </p>

          <button type="button">Get started</button>
        </div>

      </li>

      <li className={`${styles.tool} ${styles.right}`}>
        <div className={styles.containerImage} id={styles.third}>
          <div ref={thirdVisor} data-index="third">
            <img
              src="/assets/homepage__train-1.webp"
              alt="Create and test accessible designs in record time"
              aria-hidden={isHidden.third}
            />
            <img
              src="/assets/homepage__train-2.webp"
              alt="Create and test accessible designs in record time"
              aria-hidden={isHidden.third}
            />
          </div>
        </div>

        <div className={styles.containerInfo}>
          <h2>Train on the job</h2>
          <h3>Learn as you go</h3>
          <p>
            Stark is your accessibility sidekick. Learn best practices on the fly and get
            tips on how to fix any issues we find. We’ll take you from novice to expert while
            doing the heavy lifting in the background.
          </p>

          <button type="button">Get started</button>
        </div>

      </li>

      <li className={`${styles.tool} ${styles.left}`}>
        <div
          className={styles.containerImage}
          id={styles.fourth}
          ref={fourthVisor}
          data-index="fourth"
        >
          <img
            src="/assets/homepage__live-preview-1.webp"
            alt="Create and test accessible designs in record time"
            aria-hidden={isHidden.fourth}
          />
          <img
            src="/assets/homepage__live-preview-2.png"
            alt="Create and test accessible designs in record time"
            aria-hidden={isHidden.fourth}
          />
        </div>

        <div className={styles.containerInfo}>
          <h2>Live preview</h2>
          <h3>Accessibility easy as 1, 2, 3</h3>
          <p>
            Stark simplifies and accelerates collaboration on accessibility issues
            between designers and developers. With Stark for your browser you can not
            only test and check for accessibility issues but apply color suggestions or
            typography improvements with Live Preview with a click.
          </p>

          <button type="button">Get started</button>
        </div>

      </li>
    </ul>
  )
}

export default ListOfAccessibilityTools