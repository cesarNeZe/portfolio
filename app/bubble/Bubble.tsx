"use client"; // Ensure this runs only on the client side

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

const BubbleBorder = () => {
    const [animationData, setAnimationData] = useState(null);
    const [liftingData, setLiftingData] = useState(null);
    const [jetData, setJetData] = useState(null);
    useEffect(() => {
        // Fetch animation JSON dynamically
        fetch("/cloud.json")
            .then((response) => response.json())
            .then((data) => setAnimationData(data))
            .catch((error) => console.error("Error loading Lottie JSON:", error));
        fetch("/coding.json")
            .then((response) => response.json())
            .then((data) => setLiftingData(data))
            .catch((error) => console.error("Error loading Lottie JSON:", error));
        fetch("/jet.json")
            .then((response) => response.json())
            .then((data) => setJetData(data))
            .catch((error) => console.error("Error loading Lottie JSON:", error));
    }, []);

    return (
        <div className="relative rounded-x">
            {animationData ? (
                <div className="relative h-full w-full p-10">
                    <Lottie
                        animationData={animationData}
                        loop={true}
                        autoplay={true}
                        className="w-full cloud--lottie"
                    />
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center text-lg font-semibold text-blue z-10 p-14 w-full">
                        <div>
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

                        </div>
                    </div>

                </div>
            ) : (
                <p>Loading animation...</p>
            )}
        </div>

    );
}

export default BubbleBorder
