import s from "./PopupForm.module.scss";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import MyInput from "../../UI/my-input/MyInput";
import MyButton from "../../UI/my-button/MyButton";
import MyTextarea from "../../UI/my-textarea/MyTextarea";
import check from '../../../assets/svgs/check.svg';
import { useState } from "react";

const PopupForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const { inputs } = useSelector((state) => state.popup);

  const onSubmit = (data) => {
    if (isChecked) {
      console.log(data);
      reset()
      setIsChecked(false)
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        {inputs.map((i) => (
          i.type === 'textarea' ? (
            <MyTextarea key={i.id} data={i} register={register} errors={errors} />
          ) : (
            <MyInput key={i.id} data={i} register={register} errors={errors} />
          )
        ))}
        <label className={s.checkbox}>
          <div onClick={() => setIsChecked(!isChecked)} style={{
            width: '25px',
            height: '25px',
            border: '1px solid black',
            backgroundColor: 'white'
          }}>
            <div
              style={{
                width: isChecked ? '100%' : '',
                height: isChecked ? '100%' : '',
                backgroundColor: isChecked ? 'black' : '',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img src={check} alt="" />
            </div>
          </div>
          <span>
            Я согласен с условиями <a href="/conditionData">обработки данных</a>{" "}
          </span>
        </label>
      </div>

      <MyButton
        style={{
          background: "#000",
          color: "#fff",
          width: "100%",
        }}
      >
        Отправить
      </MyButton>
    </form>
  );
};

export default PopupForm;
