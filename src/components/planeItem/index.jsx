import React from 'react';
import styles from './planeItem.module.css';
import { Link } from 'react-router-dom';
import { path } from '../../path'
export const PlaneItem = ({
    name = '',
    price = 0,
    planeImage = '',
    _id = '',
    capacity = ''
}) => {
  return (
    <Link to={`${path.plane}/${_id}`} className={styles.planeItem}>
    <div className={styles.capacity}> {capacity} </div>
    {planeImage && <img className={styles.planeImage} src={planeImage} alt=''/>}
    <div className={styles.info}>
        <h2 className={styles.title}>{name}</h2>
        <span className={styles.price}>{price}</span>
    </div>
    </Link>
  )
}
