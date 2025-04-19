"use client"; // Ensure this runs only on the client side

import { useEffect, useState } from "react";
import Hero from "./Hero";
import Lottie from "lottie-react";

const BubbleBorder = () => {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        // Fetch animation JSON dynamically
        fetch("/cloud.json")
            .then((response) => response.json())
            .then((data) => setAnimationData(data))
            .catch((error) => console.error("Error loading Lottie JSON:", error));
    }, []);

    return (
        <div className="relative rounded-x w-full flex flex-col justify-center">
            {animationData ? (
                <div className="relative w-full">
                    <Lottie
                        animationData={animationData}
                        loop={true}
                        autoplay={true}
                        className="w-full h-full"
                    />
                    <Hero />

                </div>
            ) : (
                <p>Loading animation...</p>
            )}
        </div>

    );
}

export default BubbleBorder
