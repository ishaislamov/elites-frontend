import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getOnePlane } from "../../store/slices/onePlaneSlice";
import styles from "./plane.module.css";
import { Spinner } from "../../components/spinner";
import { ContentWrapper } from "../../components/content-wrapper/ContentWrapper";
import { Button } from "../../components/button";

export const PlanePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { plane, isLoading } = useSelector((state) => state.plane);

  React.useEffect(() => {
    dispatch(getOnePlane(id));
  }, [dispatch, id]);

  if (isLoading) return <Spinner />;
  return (
    plane && (
      <ContentWrapper className={styles.plane}>
        <div className={styles.descContent}>
          <Button onClick={() => navigate(-1)} isBackButton> Назад </Button>
          <h1 className={styles.title}>{plane.name}</h1>
          <div className={styles.price}>{plane.price}</div>
          <Button
            containerClassName={styles.buyBtnContainer}
            onClick={() => navigate("/order")}
          >
            Оформить заказ
          </Button>
          <p className={styles.desc}>{plane.description}</p>
        </div>
        <div className={styles.imageContent}>
          <img className={styles.image} src={plane.planeImage} alt="" />
        </div>
      </ContentWrapper>
    )
  );
};
