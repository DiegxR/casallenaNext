'use client'
import React, { useState } from 'react'
import Layout from '../Layout'
import './profile.scss'
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from 'react-redux';
import EventCreate from '@/components/forms/EventCreate';

const profile = () => {
  const {user} = useSelector(store => store.user)
  const [modal, setModal] = useState(false)
  return (
    <Layout>
      <section className='content'>
        <div className='user'>
          <FaUserCircle className='img'/>
          <h1>{user.name}</h1>
        </div>
        <button onClick={()=> setModal(true)} className='buttonCreate'>Crear Evento</button>
      </section>
      <EventCreate state={modal} setState={setModal}/>
    </Layout>
  )
}

export default profile