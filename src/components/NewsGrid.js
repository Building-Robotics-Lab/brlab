import React from 'react';
import './NewsGrid.css';

function NewsGrid({ newsData, highlightedSection }) {
    return (
        <div className='NewsGrid'>
            {newsData.map((news, index) => (
                <div
                    key={index}
                    className={`NewsSection ${highlightedSection === news.NewsSectionName ? 'highlighted-section' : ''}`}
                    id={news.NewsSectionName}
                >
                    <div className="NewsPic">
                        <img src={news.imageSrc} alt="" />
                    </div>
                    <div className="NewsInformation">
                        <p className='date'>{news.date}</p>
                        <h4><b dangerouslySetInnerHTML={{ __html: news.title }}></b></h4>
                        <p className='content' dangerouslySetInnerHTML={{ __html: news.content }}></p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NewsGrid;