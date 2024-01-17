import { useState } from "react";
import styles from './AIVideo.module.css'

const AIVideo = () => {
  const [isVideoHidden, setIsVideoHidden] = useState(true);

  return (
    <>
      <img
        src="/assets/video-still__052023.webp"
        alt="Thumbnail for the 'Meet the Stark Suite' video"
        aria-hidden={isVideoHidden}
        onClick={() => setIsVideoHidden(false)}
        loading="lazy"
        className={styles.thumbnail}
      />

      <button 
        type="button"
        aria-hidden={isVideoHidden}
        onClick={() => setIsVideoHidden(false)} 
        className={styles.playIcon}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40" cy="40" r="40" fill="#381FD1" />
          <path d="M56.125 36.8971C58.625 38.2762 58.625 41.7239 56.125 43.1029L33.625 55.5146C31.125 56.8937 28 55.1699 28 52.4117L28 27.5883C28 24.8301 31.125 23.1063 33.625 24.4854L56.125 36.8971Z" fill="white" />
        </svg>
      </button>

      {!isVideoHidden && (
        <iframe
          src="https://www.youtube.com/embed/tjriZyHjF4k?autoplay=1&amp;cc_load_policy=1&amp;fs=0&amp;color=white"
          title="Stark Sidekick Announcement"
          allow="autoplay"
          className={styles.iframe}
        />
      )}
    </>
  )
}

export default AIVideo