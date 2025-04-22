import React from 'react';

const Map = () => {
    return (
        <div className="flex flex-col justify-center items-center p-2">
            <h1 className="text-5xl text-[#8444dc] font-bold mb-2">ম্যাপ</h1>
            <div className="w-full max-w-6xl aspect-video">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15596.226322142955!2d90.49229850304327!3d23.69518535429834!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b77e13f12695%3A0x83546d61ef6169e8!2sShwapno(Nimai%20kashari%20Bazar)!5e1!3m2!1sen!2sbd!4v1745154645391!5m2!1sen!2sbd"
                    className="w-full h-full rounded-xl border-none"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Map;
