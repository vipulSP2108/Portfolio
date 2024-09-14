import React from 'react'
import Work from './Work';
import OutsIIT from '../assets/OutsIIT.png';
import imageMy from '../assets/My.jpg';
import MoboDashboard from '../assets/MoboDashboard.png';
import './Home.css';

const imgSources = [imageMy];
const outlets = [
    // { cat: 'APP', name: "OutsIIT", companyName: "Company XYZ", category: "Team Lead" },
    // { cat: 'WEB', name: "CITES", companyName: "Another Company", category: "Self Challenge" },
    // { cat: 'WEB', name: "Child", companyName: "Yet Another Company", category: "Self Challenge" },
    // { cat: 'APP', name: "Mobo Dashboard", companyName: "Company ABC", category: "Self Challenge" },
    { cat: 'APP', name: "ArgyleEnigma Labs", companyName: "ArgyleEnigma Labs", category: "Design & Development" },
    { cat: 'WEB', name: "REEFS Labs", companyName: "ArgyleEnigma Labs", category: "Web Development" }
];

export default function Projects2() {
    return (
        <div style={{ userSelect: 'none' }} className=' z-0 flex flex-col  px-16 my-12  '>
            <div
                className=' z-30 flex-1 flex flex-col justify-center rounded-2xl'
                id='glasses'
                style={{ paddingTop: '90px', paddingBottom: '130px' }}
            >
                <div className='flex items-center justify-center mb-12'>
                    <span style={{ fontFamily: 'Montserrat' }} className='uppercase text-[#888888]'>History as Devloper</span>
                </div>

                <div style={{
                    padding: '0 4em',
                }}>
                    <Work imgSources={imgSources} projectList={outlets} noImage={true}/>
                    <div id='info2' className=' flex flex-row gap-3 mt-3'>
                        {/* <div className=' w-5 h-5 bg-white rounded-full' />
                        <div className=' w-5 h-5 bg-white rounded-full' />
                        <div className=' w-5 h-5 bg-white rounded-full' /> */}
                        <text>yeh dil maange more!!!</text>
                    </div>
                </div>
            </div>
        </div>

    )
}
