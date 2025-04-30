import React, { useRef, useEffect } from 'react';
import './NewsGrid.css';

function NewsGrid({ newsData, sectionName, highlightedSection }) {
    const newsGridRef = useRef(null);
    const handleImageError = (e) => {
        const attempt = e.target.getAttribute('data-attempt') || 1;
        if (attempt < 3) {
            e.target.src = e.target.src;
            e.target.setAttribute('data-attempt', attempt + 1);
        }
    };

    useEffect(() => {
        const updateMinHeightImage = () => {
            const AllImagesHeight = newsGridRef.current.querySelectorAll('.NewsGrid .NewsPic img');

            AllImagesHeight.forEach((each_image) => {
                each_image.style.height = 'auto';
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

        const updateMinHeightTitle = () => {
            const AllH4Height = newsGridRef.current.querySelectorAll(`#${sectionName} .NewsInformation h4`)

            AllH4Height.forEach((each_h4) => {
                each_h4.style.height = 'auto';
            });

            let AllHeight = [];
            AllH4Height.forEach((each_h4) => {
                const style = getComputedStyle(each_h4);
                const height =
                    each_h4.clientHeight -
                    parseFloat(style.paddingTop) -
                    parseFloat(style.paddingBottom);
                AllHeight.push(height);
            });

            const minHeight = Math.max(...AllHeight);

            AllH4Height.forEach((each_h4) => {
                each_h4.style.height = `${minHeight}px`;
            });
        }

        updateMinHeightImage();
        updateMinHeightTitle();

        window.addEventListener('resize', updateMinHeightImage);
        window.addEventListener('resize', updateMinHeightTitle);

        return () => {
            window.removeEventListener('resize', updateMinHeightImage);
            window.removeEventListener('resize', updateMinHeightTitle);
        };
    }, []);

    return (
        <div className='NewsGrid' ref={newsGridRef}>
            {newsData.map((news, index) => (
                <div key={index} className={`NewsSection ${highlightedSection === news.NewsSectionName ? 'highlighted-section' : ''}`} id={news.NewsSectionName}>
                    <div className="NewsPic">
                    <img 
                        src={news.imageSrc} 
                        alt={news.altText} 
                        loading="lazy"
                        onError={handleImageError}
                    />
                    </div>
                    <div className="NewsInformation">
                        <p className='date'>{news.date}</p>
                        <h4><b dangerouslySetInnerHTML={{ __html: news.title }}></b></h4>
                        <div className='content'>{news.content}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NewsGrid;