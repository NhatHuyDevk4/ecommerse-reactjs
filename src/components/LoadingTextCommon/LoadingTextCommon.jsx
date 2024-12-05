
import { MdOutlineDownloading } from "react-icons/md";
import React from 'react'
import style from './style.module.scss'
const LoadingTextCommon = () => {

    const {rotate} = style

  return (
    <div> <MdOutlineDownloading className={rotate} /></div>
  )
}

export default LoadingTextCommon