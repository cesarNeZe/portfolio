"use client"; // Ensure this runs only on the client side

import { useEffect, useState } from "react";
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
        <div className="relative p-6 rounded-xl bg-green-50">
            {animationData ? (
                <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    className="w-full h-auto cloud--lottie"
                />
            ) : (
                <p>Loading animation...</p>
            )}
            <h1 className="text-2xl font-bold text-center">Bubble Border</h1>
        </div>

    );
}

export default BubbleBorder
