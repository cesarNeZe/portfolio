import Lottie from 'lottie-react';
import React, { useEffect, useState } from 'react'

const Hero = () => {
    const [liftingData, setLiftingData] = useState(null);
    const [jetData, setJetData] = useState(null);
    useEffect(() => {
        fetch("/coding.json")
            .then((response) => response.json())
            .then((data) => setLiftingData(data))
            .catch((error) => console.error("Error loading Lottie JSON:", error));
        fetch("/jet.json")
            .then((response) => response.json())
            .then((data) => setJetData(data))
            .catch((error) => console.error("Error loading Lottie JSON:", error));
    }, [])
    return (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center text-lg font-semibold text-blue z-10 p-14 w-full">

            <p className="text-secondary italic font-playfair font-thin ">I'm Cesar Zaitoun Frontend Developer</p>
            <p className="text-secondary font-playfair text-6xl ">Welcome to my Portfolio</p>
            <div className="flex justify-between items-center mt-10">
                <Lottie
                    animationData={liftingData}
                    loop={true}
                    autoPlay={true}
                    className="w-full h-80 cloud--lottie"
                />
                <p className="font-sans text-secondary w-full">If you're looking for Frontend expert to build your charmingly interactive & animated website<br /> make yourself comfortable—you've come to the right place.</p>
                <Lottie
                    animationData={jetData}
                    loop={true}
                    autoPlay={true}
                    className="w-full h-80 cloud--lottie"
                />
            </div>
            <div className='flex justify-center gap-2'>

                <a href="https://calendly.com/cesarzaitoun/1to1-meeting">
                    Lets talk
                </a>
                <button className='cross-button'>
                    Chat
                </button>

            </div>

        </div>
    )
}

export default Hero
