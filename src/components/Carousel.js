import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';

const Carousel = ({ slides }) => {
    const [startIndex, setStartIndex] = useState(0);
    const [slidesState, setSlidesState] = useState(slides);
    const sliderRef = useRef(null);
    let timerRef = useRef(null);

    useEffect(() => {
        setTimer();
        return () => clearInterval(timerRef.current);
    }, [slides, slidesState]);

    const setTimer = () => {
        timerRef.current = setInterval(() => {
            moveForward();
        }, 3000);
    };

    const resetTimer = () => {
        clearInterval(timerRef.current);
        setTimer();
    };

    const moveForward = () => {
        setStartIndex(prevIndex => {
            let nextIndex = prevIndex + 1;
            if (nextIndex >= slidesState.length - 2) {
                setSlidesState(prevSlides => [...prevSlides, ...slides]);
            }
            return nextIndex;
        });
    };

    const moveBackward = () => {
        setStartIndex(prevIndex => {
            let nextIndex = prevIndex - 1;
            if (nextIndex < 0) {
                nextIndex = 0; // Prevent going back past the first slide
            }
            return nextIndex;
        });
    };

    return (
        <div className="carousel">
            <button className="btn btn-left" onClick={() => { moveBackward(); resetTimer(); }}>&#8592;</button>
            <div ref={sliderRef} className="slides" style={{ transform: `translateX(-${startIndex * 33.33}%)` }}>
                {slidesState.map((slide, index) => (
                    <div className="slide" key={index}>
                        <img className='carouselImage' src={slide.image} alt={slide.title} />
                        <p className='carouselDate'>{slide.date}</p>
                        <h3 className='carouselTitle' dangerouslySetInnerHTML={{ __html: slide.title }}></h3>
                        <a className='carouselLink' href={slide.link}>Read More</a>
                    </div>
                ))}
            </div>
            <button className="btn btn-right" onClick={() => { moveForward(); resetTimer(); }}>&#8594;</button>
        </div>
    );
};

export default Carousel;
