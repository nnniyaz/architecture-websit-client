import s from "./PopupForm.module.scss";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import MyInput from "../../UI/my-input/MyInput";
import MyButton from "../../UI/my-button/MyButton";
import MyTextarea from "../../UI/my-textarea/MyTextarea";
import check from "../../../assets/svgs/check.svg";
import { useState } from "react";
import axios from "../../../api/axios";

const PopupForm = ({ setSended }) => {
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

  const onSubmit = async (data) => {
    if (isChecked) {
      await axios.post('/api/client/client', {
        name: data.firstName,
        email: data.email,
        message: data.message
      })
      reset();
      setIsChecked(false);
      setSended(true);
      setTimeout(() => setSended(false), 3000);
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        {inputs.map((i) =>
          i.type === "textarea" ? (
            <MyTextarea
              key={i.id}
              data={i}
              register={register}
              errors={errors}
            />
          ) : (
            <MyInput key={i.id} data={i} register={register} errors={errors} />
          )
        )}
        <label className={s.checkbox} onClick={() => setIsChecked(!isChecked)}>
          {isChecked ? (
            <div className={s.checked}>
              <img src={check} alt="" />
            </div>
          ) : (
            <div className={s.noChecked}></div>
          )}
          <span>
            Я согласен с условиями <a href="#">обработки данных</a>.
          </span>
        </label>
      </div>

      <MyButton
        theme={"dark"}
        style={{
          width: "100%",
          padding: "20px 0",
          fontSize: "14px",
        }}
      >
        Отправить
      </MyButton>
    </form>
  );
};

export default PopupForm;
