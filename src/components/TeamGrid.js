import React from 'react';
import { Link } from 'react-router-dom'; 
import './TeamGrid.css'

const TeamGrid = ({ members }) => (
    <div className="team-grid">
        {members.map((member, index) => (
            <div className={`item item-${index + 1}`} key={index}>
                <a href={member.link} target="_blank" className={member.name.split(' ')[0]}>
                    <div className="ProfilePic">
                        <img src={member.imgSrc} alt={member.name} />
                    </div>
                </a>
                <div className="individual-info">
                    <a href={member.link} target="_blank" rel="noopener noreferrer">
                        <h4>{member.name}</h4>
                    </a>
                    <h6><b>{member.role}</b></h6>
                    <p>{member.skills}</p>
                </div>
            </div>
        ))}
    </div>
);

export default TeamGrid;