import React, { useState, useEffect, useRef } from 'react';

function LazyLoadVideo({ src, type, alt }) {
    const [isVideoVisible, setIsVideoVisible] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVideoVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.01 } // Trigger when 25% of the video is in view
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    return (
        <div ref={videoRef}>
            {isVideoVisible && (
                <video playsInline autoPlay loop muted controls>
                    <source src={src} type={type} />
                    {alt}
                </video>
            )}
            {!isVideoVisible && <div>Loading video...</div>}
        </div>
    );
}

export default LazyLoadVideo;
