import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';
import { Link } from 'react-router-dom';

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
        }, 10000);
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

    useEffect(() => {
        const updateMinHeight = () => {
            const AllImagesHeight = sliderRef.current.querySelectorAll('.carouselImage');

            // Reset heights to auto before recalculating
            AllImagesHeight.forEach((each_image) => {
                each_image.style.height = 'auto';

                // Add load event listener for each image
                each_image.addEventListener('load', () => {
                    updateMinHeight();
                });
            });

            let AllHeight = [];
            AllImagesHeight.forEach((each_image) => {
                const style = getComputedStyle(each_image);
                const height =
                    each_image.clientHeight -
                    parseFloat(style.paddingTop) -
                    parseFloat(style.paddingBottom);
                AllHeight.push(height);
            });

            const minHeight = Math.min(...AllHeight);

            AllImagesHeight.forEach((each_image) => {
                each_image.style.height = `${minHeight}px`;
            });
        };

        // Initial update
        updateMinHeight();

        // Update on window resize
        window.addEventListener('resize', updateMinHeight);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateMinHeight);
        };
    }, [slides, slidesState]);

    return (
        <div className="carousel">
            <button className="btn btn-left" onClick={() => { moveBackward(); resetTimer(); }}>&#8592;</button>
            <div ref={sliderRef} className="slides" style={{ transform: `translateX(-${startIndex * 33.33}%)` }}>
                {slidesState.map((slide, index) => (
                    <div className="slide" key={index}>
                        <div className="slide_up">
                            <img className='carouselImage' src={slide.image} alt={slide.title} />
                            <p className='carouselDate'>{slide.date}</p>
                            <h3 className='carouselTitle' dangerouslySetInnerHTML={{ __html: slide.title }}></h3>
                        </div>
                        <div className="slide_down">
                            <Link className='carouselLink' to={slide.link}>Read more</Link>
                        </div>
                    </div>
                ))}
            </div>
            <button className="btn btn-right" onClick={() => { moveForward(); resetTimer(); }}>&#8594;</button>
        </div>
    );
};

export default Carousel;