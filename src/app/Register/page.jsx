'use client'
import React, { useEffect, useState } from 'react'
import './register.scss'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useSingInMutation } from '@/redux/services/userService'
import { notify } from '@/services/notify'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '@/redux/features/usersSlice'

const minPass = /^.{6,}$/
const upperPass = /[A-Z]/
const specialPass = /[\W_]/
const page = () => {
  const [singin, { data, isLoading }] = useSingInMutation()
  const { user } = useSelector((state) => state.user)
  const [errorPass, setErrorPass] = useState('')
  const [passWord, setPassWord] = useState('')
  const dispatch = useDispatch()
  const { back, push } = useRouter()

  const error = {}

  const {
    formState: { errors },
    handleSubmit,
    setError,
    register,
    clearErrors,
  } = useForm()

  const validatePass = (value) => {
    if (!minPass.test(value)) {
      setErrorPass('Debe contener mínimo 6 dígitos')
    } else if (!upperPass.test(value)) {
      setErrorPass('debe contener mínimo una mayúscula')
    } else if (!specialPass.test(value)) {
      setErrorPass('debe contener un carácter especial')
    } else {
      setErrorPass('')
      setPassWord(value)
    }
  }

  const validatePasswords = (passwordConf) => {
    if (passWord !== passwordConf) {
      setError('passwordConf', {
        type: 'validate',
        message: 'Las contraseñas no coinciden',
      })
    } else {
      clearErrors('passwordConf') // Limpia el error si las contraseñas coinciden
    }
  }

  useEffect(() => {
    if (errors.status === true) {
      notify(error.message, '#d80416', '#d80416')
    }
    if (!user.token) {
      if (data?.token) {
        dispatch(setUser(data))
        push('/home')
      }
    }
  }, [isLoading, data])

  const onSubmit = (data) => {
    singin(data)
  }

  return (
    <motion.section
      initial={{ x: '100%' }}
      transition={{ duration: 1, ease: 'easeIn' }}
      exit={{ x: window.innerWidth }}
      animate={{ x: '0%' }}
      className='registerSec'
    >
      <AiOutlineArrowLeft onClick={() => back()} className='arrowLeft' />
      <form onSubmit={handleSubmit(onSubmit)} className='registerSec__form'>
        <label htmlFor='' className='registerSec__label'>
          <input
            {...register('email', { required: 'El email es requerido' })}
            className='registerSec__input'
            type='email'
            placeholder='Email'
          />
          Email
          {errors.email ? (
            <span className='errorMsg'>{errors.email.message}</span>
          ) : (
            <></>
          )}
        </label>

        <label htmlFor='' className='registerSec__label'>
          <input
            {...register('city', { required: 'La Ciudad es requerida' })}
            className='registerSec__input'
            placeholder='Ciudad'
            type='text'
          />
          Ciudad
          {errors.location ? (
            <span className='errorMsg'>{errors.location.message}</span>
          ) : (
            <></>
          )}
        </label>

        <label htmlFor='' className='registerSec__label'>
          <input
            {...register('name', { required: 'El nombre es requerido' })}
            placeholder='Nombre de usuario'
            className='registerSec__input'
            type='text'
          />
          Nombre de usuario
          {errors.name ? (
            <span className='errorMsg'>{errors.name.message}</span>
          ) : (
            <></>
          )}
        </label>

        <label htmlFor='' className='registerSec__label'>
          <select
            {...register('type', { required: 'El rol es requerido' })}
            className='registerSec__input'
          >
            <option value='comp'>Establecimiento</option>
            <option value='art'>Artista</option>
          </select>
          Rol
          {errors.name ? (
            <span className='errorMsg'>{errors.name.message}</span>
          ) : (
            <></>
          )}
        </label>

        <label htmlFor='' className='registerSec__label'>
          <input
            onInput={(e) => validatePass(e.target.value)}
            className='registerSec__input'
            placeholder='Contraseña'
            type='password'
          />
          Contraseña
          {errors.password ? (
            <span className='errorMsg'>{errors.password.message}</span>
          ) : (
            <></>
          )}
          {errorPass !== '' ? (
            <span className='errorMsg'>{errorPass}</span>
          ) : (
            ''
          )}
        </label>

        <label htmlFor='' className='registerSec__label'>
          <input
            {...register('password', { required: 'se requiere contraseña' })}
            onInput={(e) => validatePasswords(e.target.value)}
            placeholder='Confirmar contraseña'
            className='registerSec__input'
            type='password'
          />
          Confirmar contraseña
          {errors.passwordConf ? (
            <span className='errorMsg'>{errors.passwordConf.message}</span>
          ) : (
            <></>
          )}
        </label>

        <button type='submit' className='registerSec__btn'>
          CREAR CUENTA
        </button>
      </form>
    </motion.section>
  )
}

export default page
