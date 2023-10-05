'use client'
import NavBar from '@/components/navBar/NavBar'
import React from 'react'

export default function Layout({ children }) {
    return (
      <>
        <main>{children}</main>
        <NavBar />
      </>
    )
  }
