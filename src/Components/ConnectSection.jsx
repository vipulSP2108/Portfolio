import React from 'react';
import { RxCornerTopRight, RxTriangleRight, RxTriangleUp } from 'react-icons/rx';
import WordAnimation from './WordAnimation';

const ConnectSection = () => {
  const socialLinksLeft = [
    { name: 'Youtube', url: 'https://www.youtube.com' },
    { name: 'Linkedin', url: 'https://www.linkedin.com/in/vipul-patil-b76a65250' },
    { name: 'Github', url: 'https://github.com/vipulSP2108' },
    // { name: 'Dribbble', url: 'https://www.facebook.com' },
  ];
  const socialLinksRight = [
    { name: 'Instagram', url: 'https://instagram.com/vipulsp_21?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D' },
    { name: 'Behance', url: 'https://github.com/vipulSP2108' },
    { name: 'Slack', url: 'https://join.slack.com/t/vipulsp/shared_invite/zt-32lk95xw0-iBUAWvSMVVzpt9xE_uVsTw' },
    // { name: 'Facebook', url: 'https://www.facebook.com' },
  ];

  return (
    <div className="z-50 text-gray-200 pt-24 pb-14 px-6 md:px-48 mb-12 md:mb-0">
      <div className="flex items-start justify-start mb-10 md:mb-12">
        <span
          style={{ fontFamily: 'Montserrat' }}
          className="text-xs font-semibold uppercase z-30 text-[#888888] tracking-[5px]"
        >
          CONNECT
        </span>
      </div>

      <div className=" md:flex z-30 justify-between">
        <div className="z-30">
          {socialLinksLeft.map((link, index) => (
            <div key={index} className="flex space-x-2 items-start">
              <span className="z-30 text-red-500 rotate-45 -mr-2"><RxTriangleUp /></span>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="z-30 font-semibold text-3xl md:text-3xl text-[#888888] hover:text-[#fff]"
              >
                {link.name}
              </a>
            </div>
          ))}
        </div>

        <div className="z-30">
          {socialLinksRight.map((link, index) => (
            <div key={index} className="flex space-x-2 items-start">
              <span className="z-30 text-red-500 rotate-45 -mr-2"><RxTriangleUp /></span>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="z-30 font-semibold text-3xl md:text-3xl text-[#888888] hover:text-[#fff]"
              >
                {/* <WordAnimation styleGiven=" text-[#888888] text-xs md:text-sm font-bold" gapProvided={3} projectList={[link.name]} /> */}
                {link.name}
              </a>
            </div>
          ))}
        </div>

        <div className=' flex mt-16 md:mt-0'>
          <div className="z-30 md:pr-32">
            <a href="mailto:vipul.patil@iitgn.ac.in" className="block mt-3 md:mt-0">
              <div className=''>
                <h3 className="z-30 text-xl md:text-lg -mb-2">Email</h3>
                <h3 className="z-30 text-[#888888] text-xl md:text-lg">vipul.patil@iitgn.ac.in</h3>
              </div>
            </a>
            <a href="tel:+918806549952" className="block mt-3 md:mt-0">
              <div className=' mt-3 md:mt-0'>
                <h3 className="z-30 text-xl md:text-lg -mb-2">Phone</h3>
                <h3 className="z-30  text-[#888888] text-xl md:text-lg">+91 88065 49952</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;
