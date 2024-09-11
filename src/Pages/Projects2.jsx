import React from 'react'
import Work from './Work';
import OutsIIT from '../assets/OutsIIT.png';
import imageMy from '../assets/My.jpg';
import MoboDashboard from '../assets/MoboDashboard.png';

const imgSources = [OutsIIT, imageMy, imageMy, MoboDashboard, imageMy];
const outlets = [
    { cat: 'APP', name: "OutsIIT", companyName: "Company XYZ", category: "Team Lead" },
    { cat: 'WEB', name: "CITES", companyName: "Another Company", category: "Self Challenge" },
    { cat: 'WEB', name: "Child", companyName: "Yet Another Company", category: "Self Challenge" },
    { cat: 'APP', name: "Mobo Dashboard", companyName: "Company ABC", category: "Self Challenge" },
    { cat: 'APP', name: "ArgyleEnigma Labs", companyName: "ArgyleEnigma Labs", category: "Design & Development" }
];

export default function Projects2() {
    return (
        <Work imgSources={imgSources} outlets={outlets} />
    )
}
