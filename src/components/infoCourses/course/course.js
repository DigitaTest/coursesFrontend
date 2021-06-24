import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import BasicInfo from './basicInfo'
import VidPlayer from './video'
import './course.css'
import data from '../../../assets/dataKursevi'
import courseInfoData from '../../../assets/courseInfo'

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

  const { id } = useParams()

  //Postavljamo ime opis i sliku tacnog kursa na koji je korisnik kliknuo
  useEffect(() => {
    // const newCourse = ;
    setCourse(data.find((cours) => cours.id === parseInt(id)))

    setCourseInfo(
      courseInfoData.find((courseInf) => courseInf.id === parseInt(id))
    )
  }, [id])

  return (
    <>
      <section>
        <BasicInfo {...course} />

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
              return <li>{gain}</li>
            })}
          </ul>
        </div>

        {/* Ovde dodati listu sadrzaja kursa */}
        {/* Iskustva polaznika */}
        {/* Opcija placanja ofc */}
        <div>
          <Link to='/courses' className='button'>
            Nazad
          </Link>
        </div>
      </section>
    </>
  )
}

export default Course
