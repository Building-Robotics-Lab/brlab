import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';
import { Link } from 'react-router-dom';

const Carousel = ({ slides }) => {
    const [startIndex, setStartIndex] = useState(0);
    // Initialize with the first 6 slides or fewer if there aren't enough slides
    const [slidesState, setSlidesState] = useState(slides.slice(0, Math.min(6, slides.length)));
    const sliderRef = useRef(null);
    let timerRef = useRef(null);

    useEffect(() => {
        setTimer();
        return () => clearInterval(timerRef.current);
    }, []);

    const moveForward = () => {
        setStartIndex(prevIndex => {
            // Reset to the first slide when reaching the 6th slide
            if (prevIndex === 3) { // 4 because we start counting from 0
                return 0;
            }
            return (prevIndex + 1) % slidesState.length;
        });
    };

    const moveBackward = () => {
        setStartIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : slidesState.length - 1));
    };

    const setTimer = () => {
        timerRef.current = setInterval(() => {
            moveForward();
        }, 10000);
    };

    const resetTimer = () => {
        clearInterval(timerRef.current);
        setTimer();
    };

/*    const checkAndLoadMoreSlides = () => {
        // Load more slides if nearing the end of the current set and there are more slides available
        if (startIndex >= slidesState.length - 2 && slidesState.length < slides.length) {
            loadMoreSlides();
        }
    };

    const loadMoreSlides = () => {
        // Load more images when user navigates to the end of loaded slides
        if (slidesState.length < slides.length) {
            setSlidesState(prevState => {
                const nextSet = slides.slice(prevState.length, prevState.length + 3);
                return [...prevState, ...nextSet];
            });
        }
    };*/

    useEffect(() => {
        const updateMinHeight = () => {
            const AllImagesHeight = sliderRef.current.querySelectorAll('.carouselImage');

            AllImagesHeight.forEach((each_image) => {
                each_image.style.height = 'auto';
                each_image.addEventListener('load', () => updateMinHeight());
            });

            let AllHeight = [];
            AllImagesHeight.forEach((each_image) => {
                const style = getComputedStyle(each_image);
                const height = each_image.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
                AllHeight.push(height);
            });

            const minHeight = Math.min(...AllHeight);
            AllImagesHeight.forEach((each_image) => each_image.style.height = `${minHeight}px`);
        };

        updateMinHeight();
        window.addEventListener('resize', updateMinHeight);
        return () => window.removeEventListener('resize', updateMinHeight);
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
                            <Link className='carouselLink' to={`/news#${slide.link}`}>Read more</Link>
                        </div>
                    </div>
                ))}
            </div>
            <button className="btn btn-right" onClick={() => { moveForward(); resetTimer(); }}>&#8594;</button>
        </div>
    );
};

export default Carousel;
