import { useEffect, useRef, useState } from 'react';

const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => {
        setIsLoaded(true);
      });
      
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          const enableAutoplay = () => {
            video.play();
            document.removeEventListener('click', enableAutoplay);
          };
          document.addEventListener('click', enableAutoplay);
        });
      }
    }
    
    return () => {
      if (video) {
        video.removeEventListener('loadeddata', () => {
     setIsLoaded(true);
      });
    }
    };
  }, []);

  return (
    <div className={`video-background ${isLoaded ? 'loaded' : ''}`}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="video-element"
      >
        <source src="/background-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;