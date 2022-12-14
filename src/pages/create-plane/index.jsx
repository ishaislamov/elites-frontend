import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { ContentWrapper } from "../../components/content-wrapper/ContentWrapper";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useCallback } from "react";
import { createPlane } from "../../store/slices/onePlaneSlice";
import { path } from "../../path";

export const CreatePlanePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.plane);
  const [ name, setName ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ description, setDesc ] = useState("");
  const [ capacity, setCapacity ] = useState("");
  const [ planeImage, setPlaneImage ] = useState(null);

  const handleCreatePlane = useCallback(() => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("capacity", capacity);
    formData.append("planeImage", planeImage);

    dispatch(createPlane(formData)).then((res) => {
       if (!res.error) {
        navigate(`/`, { replace: true });
       } else console.log('Ошибка')
    });
  }, [capacity, description, dispatch, name, navigate, planeImage, price]);


  return (
    <ContentWrapper className={styles.createPlane}>
      <Button
        isBackButton={true}
        containerClassName={styles.backButtonContainer}
        onClick={() => navigate(-1)}
      >
        Назад
      </Button>
      <form className={styles.form}>
        <h1 className={styles.title}>Создать самолет</h1>
        <Input
          name="name"
          placeholder="Название самолета"
          error={errors && errors.name && errors.name.message}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          name="price"
          placeholder="Цена самолета"
          error={errors && errors.price && errors.price.message}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          name="description"
          placeholder="Описание самолета"
          error={errors && errors.description && errors.description.message}
          onChange={(e) => setDesc(e.target.value)}
        />
        <Input
          name="capacity"
          placeholder="Вместимость самолета"
          error={errors && errors.capacity && errors.capacity.message}
          onChange={(e) => setCapacity(e.target.value)}
        />
        <Input
          name="planeImage"
          type="file"
          placeholder="Изображение самолета"
          error={errors && errors.planeImage && errors.planeImage.message}
          onChange={(e) => setPlaneImage(e.target.files[0])}
        />
        <Button
          containerClassName={styles.buttonContainer}
          onClick={handleCreatePlane}
        >
          Создать
        </Button>
      </form>
    </ContentWrapper>
  );
};
