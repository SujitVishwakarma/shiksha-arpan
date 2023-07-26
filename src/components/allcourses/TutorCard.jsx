
import React from 'react'
import "./courses.css"

import { tutor } from "../../dummydata"

const TutorCard = () => {
    return (
        <>
            <section className='tutorCard'>
                <div className='Container' style={{display: 'flex'}}>
                    {tutor.map((val) => (
                        <div className='items'>
                            <div className='img'>
                                <img src={val.cover} alt='' />
                            </div>
                            <div className='text'>
                                <h1>{val.title}</h1>
                                <p>{val.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default TutorCard
