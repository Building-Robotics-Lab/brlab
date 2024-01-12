import React from 'react';
import { Link } from 'react-router-dom';
import './TeamGrid.css'

const TeamGrid2 = ({ members }) => (
    <div className="team-grid">
        {members.map((member, index) => (
            <div className={`item item-${index + 1}`} key={index}>
                <div to={`/profile/${member.link}`} target='_blank'>
                    <div className="ProfilePic">
                        <img src={member.imgSrc} alt={member.name} />
                    </div>
                </div>
                <div className="individual-info">
                    <div to={`/profile/${member.link}`} target='_blank'>
                        <h4>{member.name}</h4>
                    </div>
                    <h6><b>{member.role}</b></h6>
                    <p>{member.skills}</p>
                </div>
            </div>
        ))}
    </div>
);

export default TeamGrid2;