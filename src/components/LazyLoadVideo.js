import React, { useState, useEffect, useRef } from 'react';

function LazyLoadVideo({ src, type, alt, poster }) {
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
            { threshold: 0.01 }
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
        <div ref={videoRef} style={{ width: '100%' }}>
            {isVideoVisible ? (
                <video playsInline autoPlay loop muted controls poster={poster} aria-label={alt}>
                    <source src={src} type={type} />
                </video>
            ) : (
                <div style={{ 
                    width: '100%', 
                    paddingTop: '56.25%', // for 16:9 aspect ratio
                    backgroundImage: `url(${poster})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#f0f0f0', // default background
                    borderRadius: '1rem'
                }}>
                    {/* Placeholder content here */}
                </div>
            )}
        </div>
    );
}

export default LazyLoadVideo;
