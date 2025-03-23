import React from 'react';

const ConnectSection = () => {
  const socialLinksLeft = [
    { name: 'Dribbble', url: 'https://www.dribbble.com' },
    { name: 'Youtube', url: 'https://www.youtube.com' },
    { name: 'Linkedin', url: 'https://www.linkedin.com' }
  ];
  const socialLinksRight = [
    { name: 'Instagram', url: 'https://www.instagram.com' },
    { name: 'Facebook', url: 'https://www.facebook.com' },
    { name: 'Behance', url: 'https://www.behance.net' }
  ];

  return (
    <div className="z-50 text-gray-200 pt-24 pb-14 px-48">
      <div className="flex items-start justify-start mb-12">
        <span
          style={{ fontFamily: 'Montserrat' }}
          className="text-xs font-semibold uppercase z-30 text-[#888888] tracking-[5px]"
        >
          CONNECT
        </span>
      </div>

      <div className="flex z-30 justify-between">
        <div className="z-30">
          {socialLinksLeft.map((link, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-red-500">▸</span>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-3xl text-gray-200 hover:text-red-500"
              >
                {link.name}
              </a>
            </div>
          ))}
        </div>

        <div className="z-30">
          {socialLinksRight.map((link, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-red-500">▸</span>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-3xl text-gray-200 hover:text-red-500"
              >
                {link.name}
              </a>
            </div>
          ))}
        </div>

        <div className="z-30 pr-36">
          <div>
            <h3 className=" text-lg -mb-2">Email</h3>
            <h3 className="text-[#888888] text-lg">xxxxxxx.xxxxxx</h3>
          </div>
          <div>
            <h3 className=" text-lg -mb-2">Phone</h3>
            <h3 className="text-[#888888] text-lg">+91 xxxxxx xxxxx</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;
