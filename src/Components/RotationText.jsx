import React, { useEffect, useRef } from 'react';
import './GridBg.css'; // Import CSS file

const RotationText = ({ text }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const textContent = text || '';

        container.innerHTML = textContent.replace(/\S/g, "<span id='splitemailroatation'>$&</span>");

        const elements = container.querySelectorAll('#splitemailroatation');
        elements.forEach((element, index) => {
            element.style.transform = `rotate(${index * 24}deg)`;
        });

        // const element = container.querySelectorAll('#splitemailroatation');
        // for(let i =0; i<element.lenght; i++){
        //     element[i].style.transform = 'rotate('+i * 28+'deg)';
        // }

    }, [text]);

    return (
        <div ref={containerRef} id="emailroatation" className=''>
            {text}
        </div>
    );
};

export default RotationText;
