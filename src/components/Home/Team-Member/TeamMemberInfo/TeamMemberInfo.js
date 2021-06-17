import React from 'react';
import './TeamMemberInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
const TeamMemberInfo = ({info}) => {
    const {name,image,Designation,number}=info;
    return (
        <div className='col-md-4 col-lg4 col-sm-12 col-12 Member'>
            <div className='MemberInfo'>
                <img src={image} alt="" />
                <h3>{name}</h3>
                <h5>{Designation}</h5>
            </div>
            <h4 className='phone'>
                <FontAwesomeIcon className='icon' icon={faPhone} size='1x' color={"black"}/>
                {number}
            </h4>
        </div>
    );
};

export default TeamMemberInfo;