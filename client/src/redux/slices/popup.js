import { createSlice } from "@reduxjs/toolkit"

let initialState = {
  isOpen: false,
  inputs: [
    {
      id: Math.random(),
      type: "text",
      title: "Имя",
      name: "firstName",
      options: {
        required: {
          value: true,
          message: "Введите имя",
        },
        minLength: {
          value: 2,
          message: "Минимум 2 символа",
        },
        pattern: {
          value: /[A-Za-zА-Яа-яЁё]/,
          message: "Неверный формат",
        },
      },
    },
    {
      id: Math.random(),
      type: "email",
      title: "E-mail",
      name: "email",
      placeholder: "mail@example.ru",
      options: {
        required: {
          value: true,
          message: "Введите e-mail",
        },
        pattern: {
          value: /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/,
          message: "Неверный формат",
        },
      },
    },
    {
      id: Math.random(),
      type: "textarea",
      name: "message",
      title: "Сообщение",
      placeholder: "Сообщение",
      options: {
        required: {
          value: true,
          message: "Введите сообщение",
        },
        minLength: {
          value: 10,
          message: "Минимум 10 симоволов",
        },
      },
    },
  ],
};

let popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        setOpenPopup: (state, action) => {
            state.isOpen = action.payload
        }
    }
})

export const { setOpenPopup } = popupSlice.actions
export default popupSlice.reducer