import React, { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { useLocation, useNavigate } from 'react-router-dom';
import FooterCostom from '../Components/FooterCostom';
import ConnectSection from '../Components/ConnectSection';

export default function ProjectDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const { project } = location.state || {};

    // const location = useLocation();

    useEffect(() => {
        //   window.scrollTo(0, 0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);


    // Check if project is available, if not, show a message and return early
    if (!project) {
        return <div>No project selected</div>;
    }

    // Destructuring with optional chaining to avoid errors if properties are missing
    const {
        name,
        date,
        ShowCase,
        Overview: {
            role = "Role not provided", // Default value in case 'role' is undefined
            team = [], // Ensure 'team' is an array (default to an empty array)
            timeline = "Timeline not provided", // Default value in case 'timeline' is undefined
            overview = "Overview not provided", // Default value in case 'overview' is undefined
        } = {}, // In case Overview is undefined, we provide a default empty object
        Highlights: {
            highlight = "No highlight provided", // Default value in case 'highlight' is undefined
            highlightShow = [], // Default to an empty array if 'highlightShow' is undefined
        } = {}, // In case Highlights is undefined, we provide a default empty object
        extras
    } = project;

    // Ensure team is an array (if it's not an array, default it to [])
    const validTeam = Array.isArray(team) ? team : [];

    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <>
            <div className='z-0 flex flex-col items-center justify-center w-full'>
                {/* Back Button */}
                {/* <div style={{ fontFamily: "Montserrat" }} onClick={handleBack} className='fixed z-50 p-[7px] top-12 left-10 justify-between rounded-lg cursor-pointer' id='glasses'>
                    <div className='bg-[#2272EF] px-3 gap-2 rounded-lg h-9 flex items-center justify-center text-lg font-bold'>
                        <FaArrowLeft color='#fff' />
                        Back
                    </div>
                </div> */}

                {/* Content Sidebar */}
                {/* <div className='text-start fixed z-50 p-[7px] top-12 right-12'>
                    <div className='text-2xl uppercase my-10'>Content</div>
                    <div>
                        <div className='text-lg flex flex-col gap-3'>
                            <div>Overview</div>
                            <div>Highlights</div>
                            <div>Context</div>
                            <div>Update Flow</div>
                            <div>Interactions</div>
                            <div>Visual Design</div>
                            <div>Final Output</div>
                            <div>Retrospective</div>
                        </div>
                    </div>
                </div> */}

                <div className='z-30 pt-24'>
                    {/* Project Title and Date */}
                    <div style={{ fontFamily: "Zain" }} className='z-30 text-4xl md:text-8xl font-black text-center'>
                        <div>{name}</div>
                        <div style={{ fontFamily: "Lilita One" }} className='text-xl font-medium text-[#888888]'>
                            {date}
                        </div>
                    </div>

                    <div className=' px-7 md:px-48 w-full h-full'>
                        {/* ShowCase Image - Only show if it exists */}
                        {ShowCase && (
                            <div>
                                <img src={ShowCase} alt={'ShowCase'} className='w-full pt-28' />
                            </div>
                        )}

                        {/* Overview Section */}
                        <div className='md:flex pt-20 md:pt-28'>
                            <div className='md:w-1/2 flex flex-col gap-7'>
                                <div className='flex flex-col'>
                                    <span className='mb-1 '>My Role</span>
                                    <span className='text-[#888888] leading-[25px] '>{role}</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className=' mb-1'>Team</span>
                                    <div className='text-[#888888] leading-[25px]'>
                                        {/* Map over team members and create clickable LinkedIn links */}
                                        {validTeam.map((member, index) => (
                                            <span key={index}>
                                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" >
                                                    {/* className="text-blue-500" */}
                                                    {member.name}
                                                </a>
                                                {index < validTeam.length - 1 && ", "}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <span className=' mb-1'>Timeline & Status</span>
                                    <span className='text-[#888888] leading-[25px]'>{timeline}</span>
                                </div>
                            </div>

                            <div className=' mt-7 md:mt-0 md:w-1/2'>
                                <div className='flex flex-col'>
                                    <span className=' mb-1'>Overview</span>
                                    <span className='text-[#888888] leading-[25px]'>{overview}</span>
                                </div>
                            </div>
                        </div>

                        {/* Highlights Section */}
                        {highlight && (
                            <div className='p-7 mt-28 rounded-2xl' id='glasses'>
                                <div className='w-full text-center p-2 md:p-12'>
                                    <span>{highlight}</span>
                                </div>

                                {/* Highlight Images - Only show if highlightShow exists */}
                                {highlightShow.length > 0 && highlightShow.map((item, index) => (
                                    <div key={index}>
                                        {item.image && (
                                            <div className='rounded-2xl p-20' id='glasses'>
                                                <img src={item.image} alt={item.imageAltText} className='w-full' />
                                            </div>
                                        )}
                                        {item.imageDescription && (
                                            <div className='w-full text-end pb-6'>
                                                <text>{item.imageDescription}</text>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {extras && (
                            <div style={{ borderColor: 'rgba(136, 136, 136, 0.3)' }} className='flex items-center justify-center gap-4 border-t-[1px] mt-10'>
                                {extras.length > 0 && extras.map((item, index) => (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        <div key={index} className='rounded-full px-3 mt-3' id='glasses'>
                                            <text className='text-lg'>
                                                {item.title}
                                            </text>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        )}

                    </div>
                </div>
            </div>

            <ConnectSection />
        </>
    );
}
