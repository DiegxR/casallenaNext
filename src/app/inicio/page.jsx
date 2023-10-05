'use client'
import { useLoginMutation } from '@/redux/services/userService'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { AiOutlineGoogle } from 'react-icons/ai'
import { notify } from '../../services/notify'
import { AiOutlineEye } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import Image from 'next/image'
import './styles.scss'

import { setUser } from '@/redux/features/usersSlice'
import logo from '../../assets/logo.svg'

const SignInPage = () => {
  const [login, { data, isLoading, isError }] = useLoginMutation()
  const { user } = useSelector((state) => state.user)
  const [showPass, setShowPass] = useState(false)
  const dispatch = useDispatch()
  const { push } = useRouter()
  const router = useRouter()
  const error = {}

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm()

  useEffect(() => {
    if (!user.token) {
      if (data?.token) {
        console.log(data, user)
        dispatch(setUser(data))
        router.push('/home/events')
        notify(`Bienvenido ${user.name}`, 'green', 'black')
      }
    }
    if(isLoading){
      notify('cargando...', 'blue', 'gray')
    }
    if(isError){
      notify('Error al iniciar sesión, intentelo de nuevo', '#d80416', '#d80416')
    }
  }, [isLoading, data, isError])

  const onSubmit = (data) => {
    console.log('🚀 ~ file: page.jsx:45 ~ onSubmit ~ data:', data)
    login(data)
  }
  return (
    <motion.section
      transition={{ duration: 1, ease: 'easeIn' }}
      exit={{ x: -window.innerWidth }}
      initial={{ x: '100%' }}
      animate={{ x: '0%' }}
      className='login'
    >
      <article className='login_container'>
        <figure className='login_title'>
          <Image src={logo} />
          <h1>CasaLlena</h1>
        </figure>
        <form onSubmit={handleSubmit(onSubmit)} className='login_form'>
          <label>
            <input
              {...register('email', { required: 'El correo es requerido' })}
              placeholder='Correo electrónico'
              type='text'
            />
            <span>Usuario</span>
            {errors.email ? (
              <span className='errorMsg'>{errors.email.message}</span>
            ) : (
              <></>
            )}
          </label>
          <label>
            <input
              {...register('password', {
                required: 'La constraseña es requerida',
              })}
              type={`${showPass ? 'text' : 'password'}`}
              placeholder='Contraseña'
            />
            {!showPass ? (
              <AiOutlineEye
                className='login_iconShow'
                onClick={() => {
                  setShowPass(!showPass)
                }}
              />
            ) : (
              <AiOutlineEyeInvisible
                className='login_iconShow'
                onClick={() => {
                  setShowPass(!showPass)
                }}
              />
            )}
            <span>Contraseña</span>
            {errors.password ? (
              <span className='errorMsg'>{errors.password.message}</span>
            ) : (
              <></>
            )}
          </label>
          {error.status ? (
            <span className='errorMsg'>Datos invalidos</span>
          ) : (
            <></>
          )}
          <div className='login_buttons'>
            <button type='button' onClick={() => push('/Register')}>
              CREAR UNA CUENTA
            </button>
            <button type='submit'>ENTREMOS</button>
          </div>
        </form>
        <button
          onClick={() => dispatch(loginWithGoogle())}
          className='login_google'
        >
          <AiOutlineGoogle className='login_google-icon' />
          <span>Entrar con Google</span>
        </button>
        {/* <button onClick={uploadDataBase}>Subir a la base de datos</button> */}
      </article>
      {/*    {loading ? <Loading /> : <></>} */}
    </motion.section>
  )
}

export default SignInPage
