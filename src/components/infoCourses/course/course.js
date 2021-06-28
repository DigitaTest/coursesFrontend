import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import BasicInfo from './basicInfo'
import VidPlayer from './video'
import './course.css'
import data from '../../../assets/dataKursevi'
import courseInfoData from '../../../assets/courseInfo'
import tableOfContent from '../../../assets/tableOfContent'

import { FiCheck } from 'react-icons/fi'

const Course = () => {
  const [course, setCourse] = useState({
    id: '',
    name: '',
    image: '',
    desc: '',
    instructor: '',
    price: '',
    rating: '',
    language: '',
    numOfUsers: '',
    update: '',
    video: '',
  })

  const [courseInfo, setCourseInfo] = useState({ id: '', name: '', gains: [] })
  const [tableContent, setTableContent] = useState({ id: '', name: '', sections: [] })
  const { id } = useParams()

  //Postavljamo ime opis i sliku tacnog kursa na koji je korisnik kliknuo
  useEffect(() => {
    // const newCourse = ;
    setCourse(data.find((cours) => cours.id === parseInt(id)))

    setCourseInfo(
      courseInfoData.find((courseInf) => courseInf.id === parseInt(id))
    )
    setTableContent(
      tableOfContent.find((courseContent) => courseContent.id === parseInt(id))
    )

  }, [id])

  return (
    <>
      <BasicInfo {...course} />
      <div className='coursePage'>
        <div className='sellingCard'>
          <div onContextMenu={(e) => e.preventDefault()}>
            {/* promo spot, free epizoda  */}
            <div className='sellingCardVideo'>
              <VidPlayer {...course} />
            </div>
            <div className='sellingCardOffer'>
              <h2>{course.price}</h2>
              <div className='sellingCardOffer-buttons'>
                <Link to='/#' className='button'>
                  Dodaj u korpu
                </Link>
                <Link to='/#' className='button'>
                  Dodaj u korpu
                </Link>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <div className='gainCard'>
          <h2>Šta dobijaš ovim kursom</h2>
          <ul>
            {courseInfo.gains.map((gain) => {
              return (
                <li>
                  <FiCheck></FiCheck> {gain}
                </li>
              )
            })}
          </ul>
        </div>

        
          <div className="courseContent">
            <h2>{tableContent.name}</h2>
            {tableContent.sections.map( (sect) => {
              return (
                <div className="courseSection">
                  <div className="sectionHedline">
                    {sect.name}
                  </div>
                  
                  <div className="sectionBody">
                    {sect.lectures.map( (lecture) => {
                      const {orderNumber, name, duration, resourse} = lecture;
                      return (
                        <p>{name}</p>
                          
                      )
                    })}
                  </div>
                </div>
              )
            } )}

          </div>
        
        {/* Ovde dodati listu sadrzaja kursa */}
        {/* Iskustva polaznika */}
        {/* Opcija placanja ofc */}
      </div>
    </>
  )
}

export default Course
