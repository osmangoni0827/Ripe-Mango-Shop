import React from 'react';
import TeamMemberInfo from '../TeamMemberInfo/TeamMemberInfo';
import './TeamMember.css';
const MemberInfo=[
    {
        id:1,
        name:'Mohammad Osman Goni',
        image:"https://i.ibb.co/sH6xDVr/gentelman1-removebg-preview.png",
        Designation:"CEO/FOUNDER",
        number:"+88018457215"
    },
    {
        id:2,
        name:'Mr. Shakib Al Hasan',
        image:"https://i.ibb.co/QYGbnkW/gentelman2-removebg-preview-1.png",
        Designation:"CO-FOUNDER",
        number:"+880125487458"
    },
    {
        id:3,
        name:'Ms. Rota Mondol',
        image:"https://i.ibb.co/sRPm3DT/Kylla-Guru-Co-Founder-Girl-Con-removebg-preview.png",
        Designation:"CO-OPERATIVE",
        number:"+8801685478214"
    },
]
const TeamMember = () => {
    return (
        <div className='py-5 container '>
                        {/* Heading TemMember part  */}
            <div className="TemMember">
            <h1>OUR PASSIONATE TEAM MEMBER</h1>
            {/* <p>
            Our team members are very motivated persons.They are dedicated to work. We make various decisions for the company in consultation with our members.
            </p> */}
            </div>
                          {/* Member List */}
            <div className='row'>
                {
                    MemberInfo.map(member=><TeamMemberInfo info={member} key={member.id}></TeamMemberInfo>)
                }
            </div>
        </div>
    );
};

export default TeamMember;