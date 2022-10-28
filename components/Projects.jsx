import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import propertyImage from '../public/assets/projects/property.jpg'
import ProjectItems from './ProjectItems'
import cryptoImg from '../public/assets/projects/crypto.jpg'

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                    Projects
                </p>
                <h2 className='py-4'>
                    What I've Built
                </h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItems title='Property Finder'
                        backgroundImg={propertyImage}
                        projectUrl='./property' />

                    <ProjectItems title='Crypto App'
                        backgroundImg={cryptoImg}
                        projectUrl='./property' />
                </div>
            </div>

        </div>
    )
}

export default Projects