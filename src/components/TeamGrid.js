import React from 'react';
import { Link } from 'react-router-dom';
import './TeamGrid.css'

const TeamGrid = ({ members }) => (
    <div className="team-grid">
        {members.map((member, index) => (
            <div className={`item item-${index + 1}`} key={index}>
                <Link to={`/profile/${member.link}`}>
                    <div className="ProfilePic">
                        <img src={member.imgSrc} alt={member.name} />
                    </div>
                </Link>
                <div className="individual-info">
                    <Link to={`/profile/${member.link}`} target='_blank'>
                        <h4>{member.name}</h4>
                    </Link>
                    <h6><b>{member.role}</b></h6>
                    <p>{member.skills}</p>
                </div>
                <div className="HomeButtons" id='profile_buttons'>
                    <Link to={`/profile/${member.link}`} target='_blank'><p id='JoinButton'>Learn More</p></Link>
                </div>
            </div>
        ))}
    </div>
);

export default TeamGrid;