import React from 'react'
import Cards from '../components/Cards'

const ProjectSection = () => {
    return (
        <div className='flex flex-col  items-center justify-center font-playfair'>
            <h1 className='text-4xl'>
                Featured Website Projects
            </h1>
            <div className='flex flex-row gap-1 w-full'>

                <div className='card'>
                    <div className='card-body'>
                        <Cards />
                    </div>
                </div>
                <div className='card'>
                    <div className='card-body relative'>
                        <Cards />
                    </div>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <Cards />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection
