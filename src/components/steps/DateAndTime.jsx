import React from "react";
import { StepperContext } from "../../contexts/StepperContext";
import { useForm } from "react-hook-form";

export default function DateAndTime() {
  const { handleChange, userData } = React.useContext(StepperContext);
  const getNowDate = (shift) => {
    let date = new Date();
    if (shift > 0) date.setDate(date.getDate() + shift);
    return date.toISOString().slice(0, 10);
  };
  const getReadableDate = (date) =>
    `${date.slice(8, 10)}.${date.slice(5, 7)}.${date.slice(0, 4)}`;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      time: userData.time || "13:00",
      date: userData.date || getNowDate().toString(),
    },
  });

  return (
    <form onSubmit={handleSubmit((data) => handleChange(data, "next"))}>
      <h2 className="title">Выберите дату и время приема</h2>

      <div className="flex flex-row justify-between flex-wrap md:flex-nowrap mb-10">
        <div className="w-full mb-5 md:mr-5">
          <label htmlFor="date" className="label">
            Выберите дату
          </label>
          <input
            {...register("date", {
              required: true,
              min: getNowDate(),
              max: getNowDate(30),
            })}
            name="date"
            className={`input
            ${
              errors.date
                ? "border-red-500 focus:border-red-600"
                : "border-gray-300 dark:border-slate-400 focus:border-green-600"
            }`}
            type="date"
          />

          {errors.date && (
            <p className="text-red-500 text-sm font-bold">
              ⚠ Неверно выбрана дата. Выберите от{" "}
              {getReadableDate(getNowDate())} до{" "}
              {getReadableDate(getNowDate(30))}
            </p>
          )}
        </div>
        <div className="w-full mb-5">
          <label htmlFor="time" className="label">
            Выберите время
          </label>
          <input
            {...register("time", {
              required: true,
              min: "10:00",
              max: "17:00",
            })}
            name="time"
            className={`input
            ${
              errors.date
                ? "border-red-500 focus:border-red-600"
                : "border-gray-300 dark:border-slate-400 focus:border-green-600"
            }`}
            type="time"
          />

          {errors.time && (
            <p className="text-red-500 text-sm font-bold">
              ⚠ Неверно выбрано время. Выберите от 10:00 до 17:00
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-between sm:justify-around mt-10">
        <input
          onClick={() => handleChange(null, "back")}
          type="button"
          value="Назад"
          className="bg-gray-500 text-white uppercase cursor-pointer py-2 px-8 rounded-xl font-semibold cursor-pointe hover:bg-gray-600 active:bg-gray-700 transition duration-200 ease-in-out"
        />
        <input
          type="submit"
          value="Далее"
          className="bg-green-500 text-white uppercase cursor-pointer py-2 px-8 rounded-xl font-semibold cursor-pointe hover:bg-green-600 active:bg-green-700 transition duration-200 ease-in-out"
        />
      </div>
    </form>
  );
}
