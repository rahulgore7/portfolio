import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import rudra from '../public/assets/rudra.jpg'
import ProjectItems from './ProjectItems'
import starbucks from '../public/assets/starbucks.jpg'

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
                    <ProjectItems title='Blogging Website'
                        backgroundImg={rudra}
                        type='NextJs | TailWindCSS | GraphCMS'
                        projectUrl='https://rudra-rahulgore7.vercel.app/' />

                    <ProjectItems title='Starbucks Landing Page'
                        backgroundImg={starbucks}
                        type='HTML | CSS | JavaScript'
                        projectUrl='https://rahulgore7.github.io/Starbucks-Landing/' />
                </div>
            </div>

        </div>
    )
}

export default Projects