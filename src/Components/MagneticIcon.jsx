import React, { useState } from 'react';

export const MagneticIcon = ({ icon: Icon, size, background = 'transparent' }) => {
    const [transform, setTransform] = useState({ x: 0, y: 0 });
    const [hover, setHover] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setTransform({ x: x * 0.3, y: y * 0.5 });
    };

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
        setTransform({ x: 0, y: 0 });
    };

    return (
        <div style={{ transition: 'transform 0.16s linear' }}>
            <div
                className='rounded-full h-11 w-11 flex items-center justify-center'
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    background: hover && background,
                    borderWidth: 1,
                    transition: 'transform 0.16s linear',
                    transform: `translate(${transform.x}px, ${transform.y}px) scale(${hover ? 1.1 : 1})`
                }}
            >
                <Icon size={size} style={{}} />
            </div>
        </div>
    );
};

// <-------------------------- No Scale Animation ------------------------->

// import React, { useState } from 'react';

// export const MagneticIcon = ({ icon: Icon, size, background = 'transparent' }) => {
//     const [transform, setTransform] = useState({ x: 0, y: 0 });

//     const handleMouseMove = (e) => {
//         const rect = e.currentTarget.getBoundingClientRect();
//         const x = e.clientX - rect.left - rect.width / 2;
//         const y = e.clientY - rect.top - rect.height / 2;
//         setTransform({ x: x * 0.3, y: y * 0.5 });
//     };

//     const handleMouseLeave = () => {
//         setTransform({ x: 0, y: 0 });
//     };

//     return (
//         <div style={{ transition: 'transform 1s linear' }}>
//             <div
//                 className='rounded-full h-11 w-11 flex items-center justify-center'
//                 onMouseMove={handleMouseMove}
//                 onMouseLeave={handleMouseLeave}
//                 style={{ background: background, borderWidth: 1, transform: `translate(${transform.x}px, ${transform.y}px)` }}
//             >
//                 <Icon size={size} style={{}} />
//             </div>
//         </div>
//     );
// };