import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import icon1 from '../../assets/program-icon-1.png'
import icon2 from '../../assets/program-icon-2.png'
import icon3 from '../../assets/program-icon-3.png'




const Programs = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={program_1} alt="" />
            <div className="captions">
                <img src={icon1} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_2} alt="" />
            <div className="captions">
                <img src={icon2} alt="" />
                <p>Master Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_3} alt="" />
            <div className="captions">
                <img src={icon3} alt="" />
                <p>Post Degree</p>
            </div>
        </div>
    </div>
  )
}

export default Programs