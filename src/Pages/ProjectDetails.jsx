import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { useLocation, useNavigate } from 'react-router-dom';
import FooterCostom from '../Components/FooterCostom';

export default function ProjectDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const { project } = location.state || {};

    if (!project) {
        return <div>No project selected</div>;
    }
    
    const {
        name,
        date,
        ShowCase,
        Overview: {
            role,
            team,
            timeline,
            overview,
        },
        Highlights: {
            highlight,
            highlightShow,
        },
    } = project;

    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
 <>
        <div className='z-0 flex flex-col items-center justify-center w-full'>
            {/* <div className='fixed z-50 p-[7px] top-12 left-10 cursor-pointer' onClick={handleBack}>
                <div className='bg-[#2272EF] px-3 gap-2 rounded-full h-9 flex items-center justify-center text-lg font-bold'>
                    <FaArrowLeft color='#fff' />
                    Back
                </div>
            </div> */}
            <div style={{ fontFamily: "Montserrat" }} onClick={handleBack} className='fixed z-50 p-[7px] top-12 left-10 justify-between rounded-full cursor-pointer' id='glasses'>
                <div className='bg-[#2272EF] px-3 gap-2 rounded-full h-9 flex items-center justify-center text-lg font-bold'>
                    <FaArrowLeft color='#fff' />
                    Back
                </div>
            </div>

            <div className='text-start fixed z-50 p-[7px] top-12 right-12'>
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
            </div>

            <div className='z-30 pt-24'>
                <div style={{ fontFamily: "Zain" }} className='z-30 w-screen text-8xl font-black text-center'>
                    <div>{name}</div>
                    <div style={{ fontFamily: "Lilita One" }} className='text-xl font-medium text-[#888888]'>
                        {date}
                    </div>
                </div>

                <div className='px-48 w-full h-full'>
                    {/* <img src={ShowCase} alt={'ShowCase'} className='w-full pt-28' /> */}

 {/* Overview */}
                    <div className='flex pt-28'>
                        <div className='w-1/2 flex flex-col gap-7'>
                            <div className='flex flex-col'>
                                <span>My Role</span>
                                <span className='text-[#888888]'>{role}</span>
                            </div>
                            <div className='flex flex-col'>
                                <span>Team</span>
                                <span className='text-[#888888]'>{team}</span>
                            </div>
                            <div className='flex flex-col'>
                                <span>Timeline & Status</span>
                                <span className='text-[#888888]'>{timeline}</span>
                            </div>
                        </div>

                        <div className='w-1/2'>
                            <div className='flex flex-col'>
                                <span>Overview</span>
                                <span className='text-[#888888]'>{overview}</span>
                            </div>
                        </div>
                    </div>

 {/* Highlights */}
                    <div className='p-7 mt-28 rounded-2xl' id='glasses'>
                        <div className='w-full text-center p-12'>
                            <span>{highlight}</span>
                        </div>

                        {highlightShow.map((item, index) => (
                            <>
                                <div className='rounded-2xl p-20' id='glasses'>
                                    <img src={item.image} alt={item.imageAltText} className='w-full' />
                                </div>
                                <div className='w-full text-end pb-6'>
                                    <text>{item.imageDescription}</text>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
        <FooterCostom/>
        </>
    );
}



// // Define prop types for the component
// ProjectDetails.propTypes = {
//     projectData: PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//         Overview: PropTypes.shape({
//             role: PropTypes.string.isRequired,
//             team: PropTypes.string.isRequired,
//             timeline: PropTypes.string.isRequired,
//             overview: PropTypes.string.isRequired,
//         }).isRequired,
//         Highlights: PropTypes.shape({
//             highlight: PropTypes.string.isRequired,
//             highlightShow: PropTypes.arrayOf(PropTypes.shape({
//                 image: PropTypes.string.isRequired,
//                 imageAltText: PropTypes.string.isRequired,
//                 imageDescription: PropTypes.string.isRequired,
//             })).isRequired,
//         }).isRequired,
//     }).isRequired,
// };