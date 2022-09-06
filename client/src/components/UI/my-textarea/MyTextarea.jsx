import { useState } from 'react';
import s from './MyTextarea.module.scss'

const MyTextarea = ({ data, register, errors }) => {
  const [isFocused, setFocused] = useState(false)

  let getOptions = (options) => {
    let resOpt = {};
    for (let key in options) {
      switch (key) {
        case "required": resOpt.required = options.required; continue;
        case "minLength": resOpt.minLength = options.minLength; continue;
        case "pattern": resOpt.pattern = options.pattern; continue;
        case "maxLength": resOpt.maxLength = options.maxLength; continue;
        default: resOpt.error = "ERROR, no values in options";
      }
    }
    return resOpt;
  };

  let getError = (name, errors) => {
    for (let key in errors) {
      if (key === name) {
        return errors[name].message;
      }
    }
  };

  return (
    <label
      className={[s.wrapper, getError(data.name, errors) && s.error].join(" ")}
    >
      <div>
        <textarea
          onFocus={() => setFocused(true)}
          className={isFocused ? s.focused : ''}
          style={{
            borderColor: isFocused ? 'black' : '',
            borderColor: getError(data.name, errors) ? 'red' : ''
          }}
          type={data.type}
          {...register(data.name, getOptions(data.options))}
        ></textarea>
        <span className={s.title}>
          {data.title}
        </span>
      </div>
      <p>{data.subContent}</p>
    </label>
  );
}

export default MyTextarea