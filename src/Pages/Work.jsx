import React from 'react';
import '../App.css';

const outlets = [
    {
        name: "Campus Cafe",
        companyName: "Company Name",
        category: "Design & Development",
    },
    {
        name: "Urban Bistro",
        companyName: "Another Company",
        category: "Web Design",
    },
    {
        name: "Central Perk",
        companyName: "Yet Another Company",
        category: "UI/UX Design",
    },
    {
        name: "The Daily Grind",
        companyName: "Company XYZ",
        category: "Branding",
    },
    {
        name: "Brewed Awakenings",
        companyName: "Company ABC",
        category: "Digital Marketing",
    }
];

export default function Work() {
    return (
        <div style={{ userSelect: 'none' }} className='z-0 flex flex-col h-screen'>
            <div className='z-30 flex-1 flex flex-col justify-center' id='glasses'>
                <div className='flex items-center justify-center mb-12'>
                    <span style={{ fontFamily: 'Montserrat' }} className='uppercase'>Explore Work</span>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    {outlets.map((outlet, index) => (
                        <div
                            key={index}
                            style={{
                                borderBottomWidth: '1px',
                                borderTopWidth: index === 0 && '1px',
                                 borderColor: '#888888',
                            }}
                            className='px-36 flex w-full gap-2'
                        >
                            <span >{index + 1}</span>
                            <span style={{ fontFamily: 'Montserrat' }} className='text-6xl font-extrabold uppercase'>{outlet.name}</span>
                            <span>{outlet.category}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
