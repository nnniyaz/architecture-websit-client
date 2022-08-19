import s from "./PopupForm.module.scss";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import MyInput from "../../UI/my-input/MyInput";
import MyButton from "../../UI/my-button/MyButton";
import MyTextarea from "../../UI/my-textarea/MyTextarea";

const PopupForm = () => {
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
    console.log(data);
    reset()
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
          <input type="checkbox" {...register('condition', {
            required: true
          })} />
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
