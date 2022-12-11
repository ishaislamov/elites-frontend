import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlanes } from "../../store/slices/planeSlice";
import { Spinner } from '../spinner'
import { ContentWrapper } from '../content-wrapper/ContentWrapper'
import { PlaneItem } from "../planeItem";
import styles from './planes.module.css'
import { Link } from "react-router-dom";
import {path} from '../../path';
import { Button } from "../button";
import { useSortPlanes } from "../../hooks/useSortPlanes";

export const Planes = () => {
  const dispatch = useDispatch();
  const { planes, isLoading } = useSelector((state) => state.planes);
  const { isDescSort, sortedPlanes, setIsDectSort} = useSortPlanes(planes || []);
  
  React.useEffect(() => {
    dispatch(getPlanes())
  }, [dispatch]);

  if(isLoading) {
    return <Spinner />
  }
  return (
    <div>
      <div className={ styles.sort }>
        <ContentWrapper className={styles.planesHeader}>
          <Button
          onClick={() => setIsDectSort(!isDescSort)}
          className={styles.sortBtn}>
            Сортировать по цене {`${isDescSort ? '+' : '-'}`}
          </Button>
          <Link to={path.createPlane} 
                className={styles.createPlaneBtn}>Добавить самолет</Link>
        </ContentWrapper>
      </div>
    <ContentWrapper className={styles.planesGrid}>
        { sortedPlanes && sortedPlanes.map((plane) => <PlaneItem key={plane._id} {...plane} />)}
    </ContentWrapper>
    </div>
    )
};
