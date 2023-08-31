'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './styles.scss'
import { useRouter } from 'next/navigation'

const pop = {
  pop: {
    scale: [1, 1.5, 0.8, 1.1, 1],
    transition: {
      duration: 0.8,
      delay: 1.2
    },
  },
}


const AppStart = () => {
  const [exit, setExit] = useState(false)
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      setExit(true)
    }, 2300)
    setTimeout(() => {
      router.push('/Register')
    }, 3000)
  }, [])
  return (
    <motion.section 
    animate={exit ? {opacity: -2, duration: 1} : ''}
    transition={{ duration: 1.2}}
    className='appstart'>
      <motion.svg
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        animate={{ opacity: 1 }}
        width="140" height="168" viewBox="0 0 140 168" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          d="M27.4237 63.3992C27.5525 63.2841 27.6975 63.1691 27.8263 63.0376L78.5334 16.2031C81.1098 13.8203 81.2708 9.7613 78.8876 7.18129L74.0407 1.92268C71.6897 -0.640893 67.8251 -0.640893 65.4741 1.92268L65.4258 1.97198L33.4783 37.139L11.4983 61.3121L1.53074 72.2895C-1.73808 75.8884 0.548486 81.9851 5.36316 82.0672C7.05393 82.1001 8.61589 81.4099 9.77527 80.276V80.4239L27.4237 63.4156V63.3992Z " fill="#EFEFEF" />
        <motion.path
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          d="M139.726 73.4887L122.592 54.722C120.741 52.6843 118.1 51.5176 115.379 51.5176C113.623 51.5176 111.884 52.0106 110.371 52.9144L81.1122 70.58C79.0028 71.8618 79.8884 75.1649 82.336 75.1649H139.001C139.178 75.1649 139.645 75.1649 139.903 74.5569C140.16 73.9488 139.838 73.5873 139.726 73.4559V73.4887Z" fill="#EFEFEF" />
        <motion.path
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          d="M50.6939 65.3055L50.7261 65.3383C51.3702 65.9464 52.3203 66.0778 53.0771 65.6177L101.288 36.4653C101.514 36.3667 101.723 36.2188 101.916 36.0873C102.061 35.9887 102.222 35.9558 102.335 35.8408C102.705 35.43 102.979 34.8877 102.979 34.2632C102.979 33.6388 102.721 33.0965 102.335 32.6692L102.254 32.5706L97.1177 26.9833C96.6668 26.5561 96.1193 26.3096 95.4913 26.3096C95.1049 26.3096 94.5413 26.4082 94.0099 26.8519L50.8389 62.3146C49.921 63.0706 49.8405 64.5002 50.7261 65.3219L50.6939 65.3055Z" fill="#EFEFEF" />
        <motion.path
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          d="M51.0806 120.241C47.4737 113.372 40.1953 109.116 32.1118 109.116H31.6287C27.2327 109.116 23.5935 112.584 23.5935 117.07V160.979C23.5935 164.529 26.4115 167.421 29.9057 167.421H59.7438C63.0932 167.421 66.3459 165.827 68.1172 162.935C69.9529 159.96 70.0656 156.312 68.4553 153.239L51.0967 120.258L51.0806 120.241Z" fill="#EFEFEF" />
        <motion.path
          initial={{ scale: 1 }}
          animate={"pop"}
          variants={pop}
          d="M25.6868 93.4221C27.603 95.9528 30.4854 97.3989 33.6093 97.3989C36.7332 97.3989 39.68 95.9199 41.5962 93.3235C42.9005 91.5487 43.609 89.4617 43.6251 87.2596V87.0624C43.6251 86.7174 43.5929 86.323 43.5285 85.8464C43.5124 85.6821 43.4802 85.5013 43.448 85.337C43.4158 85.1398 43.3675 84.9426 43.3192 84.7454C43.287 84.6468 43.2709 84.5317 43.2387 84.4331C42.9971 83.5622 42.659 82.7405 42.2081 81.9682C41.5962 80.9164 40.8394 80.0126 39.9698 79.2731C38.2791 77.8434 36.2179 77.0547 33.9797 76.9725C33.867 76.9725 33.7542 76.9725 33.6415 76.9561H33.561C29.1006 76.9561 25.1393 80.0455 23.9478 84.4496C23.8189 84.9097 23.7223 85.3863 23.674 85.8628C23.6096 86.3394 23.5774 86.7338 23.5774 87.0953C23.5774 87.161 23.5774 87.2103 23.5774 87.2761C23.5774 88.3607 23.7545 89.4124 24.1088 90.4477C24.463 91.5323 24.9944 92.5347 25.6868 93.4385V93.4221Z" fill="#EFEFEF" />
        <motion.path
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          d="M59.3572 93.012H59.3895L105.362 128.048C106.312 128.771 107.359 129.132 108.47 129.132C111.03 129.132 113.784 127.062 113.784 123.742V90.1855H60.3395C58.8742 90.1855 58.1818 92.1082 59.3411 93.012H59.3572Z" fill="#EFEFEF" />
        <motion.path
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          d="M104.01 147.587L74.2199 124.449C73.1893 123.644 71.8206 124.86 72.4647 126.01L92.126 161.752L92.4802 162.377L92.5124 162.426C92.5124 162.426 92.5447 162.459 92.5447 162.475C92.6413 162.639 92.754 162.804 92.8506 162.952C94.638 165.548 97.5848 167.241 100.934 167.241C106.393 167.241 110.821 162.722 110.821 157.151C110.821 155.08 110.209 153.158 109.163 151.564L104.01 147.57V147.587Z" fill="#EFEFEF" />
      </motion.svg>
    </motion.section>
  )
}

export default AppStart