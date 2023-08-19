import React from "react";
import { useForm } from "react-hook-form";
import { StepperContext } from "../../contexts/StepperContext";
import { services } from "../../data/services";
import { doctors } from "../../data/doctors";

export default function ServiceAndDoctor() {
  const { handleChange, userData } = React.useContext(StepperContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      service: userData.service || -1,
      doctor: userData.doctor || -1,
    },
  });

  const displayServices = services.map((s, index) => {
    return (
      <option key={index + 100} value={index}>
        {s.name} - {s.price} ₽
      </option>
    );
  });

  const displayDoctors = doctors.map((s, index) => {
    return (
      <option key={index + 200} value={index}>
        {s}
      </option>
    );
  });

  return (
    <form onSubmit={handleSubmit((data) => handleChange(data, "next"))}>
      <h2 className="title">Выберите услугу и врача</h2>

      <div className="mb-10">
        <label htmlFor="service" className="label">
          Выберите услугу
        </label>
        <select
          {...register("service", { min: 0 })}
          id="service"
          className={`input ${
            errors.service
              ? "border-red-500 focus:border-red-600"
              : "border-gray-300 dark:border-slate-400 focus:border-green-600"
          }`}
        >
          <option disabled value="-1">
            Нажмите чтобы выбрать услугу
          </option>
          {displayServices}
        </select>
        {errors.service && (
          <p className="text-red-500 text-sm font-bold">⚠ Выберите услугу</p>
        )}
      </div>

      <div>
        <label htmlFor="doctor" className="label">
          Выберите врача
        </label>
        <select
          {...register("doctor", { min: 0 })}
          id="doctor"
          className={`input ${
            errors.doctor
              ? "border-red-500"
              : "border-gray-300 dark:border-slate-400 focus:border-green-600"
          }`}
        >
          <option disabled value="-1">
            Нажмите чтобы выбрать врача
          </option>
          {displayDoctors}
        </select>
        {errors.doctor && (
          <p className="text-red-500 text-sm font-bold">⚠ Выберите врача</p>
        )}
      </div>
      <div className="flex justify-around mt-10">
        <input
          type="submit"
          value="Далее"
          className="bg-green-500 text-white uppercase py-2 px-8 rounded-xl font-semibold cursor-pointer hover:bg-green-600 active:bg-green-700 transition duration-200 ease-in-out"
        />
      </div>
    </form>
  );
}
