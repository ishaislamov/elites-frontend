import React from 'react'
import styles from './wrapper.module.css'

export const ContentWrapper = ({ children, className = '' }) => {
  return (
    <div className={ `${styles.contentWrapper} ${className}` }>{ children }</div>
  )
}
