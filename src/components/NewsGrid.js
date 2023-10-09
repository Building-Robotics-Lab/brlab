import React, { useRef, useEffect } from 'react';
import './NewsGrid.css';
import { Link } from 'react-router-dom';

function NewsGrid({ newsData, highlightedSection }) {
    const newsGridRef = useRef(null);

    useEffect(() => {
        const titles = newsGridRef.current.querySelectorAll('.NewsPic h4');
        for (let i = 0; i < titles.length; i += 3) {
            let maxHeight = 0;
            const currentRowTitles = [titles[i], titles[i + 1], titles[i + 2]].filter(Boolean);
            currentRowTitles.forEach(title => {
                if (title.clientHeight > maxHeight) {
                    maxHeight = title.clientHeight;
                }
            });
            currentRowTitles.forEach(title => {
                title.style.minHeight = `${maxHeight}px`;
            });
        }
    }, [newsData]);

    return (
        <div className='NewsGrid' ref={newsGridRef}>
            {newsData.map((news, index) => (
                <div key={index} className={`NewsSection ${highlightedSection === news.NewsSectionName ? 'highlighted-section' : ''}`} id={news.NewsSectionName}>
                    <div className="NewsPic">
                        <img src={news.imageSrc} alt="" />
                        <p className='date'>{news.date}</p>
                        <h4><b dangerouslySetInnerHTML={{ __html: news.title }}></b></h4>
                    </div>
                    <div className="NewsInformation">
                        <div className='content'>{news.content}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NewsGrid;