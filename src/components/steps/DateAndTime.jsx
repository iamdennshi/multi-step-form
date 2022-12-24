import React from 'react'
import { StepperContext } from '../../contexts/StepperContext'
import { useForm } from 'react-hook-form';

export default function DateAndTime() {
  const {handleChange, userData} = React.useContext(StepperContext);
  const getNowDate = (shift) => {
    let date = new Date();
    if (shift > 0)
      date.setDate(date.getDate() + shift);
    return date.toISOString().slice(0, 10);
  }
  const getReadableDate = (date) => `${date.slice(8,10)}.${date.slice(5,7)}.${date.slice(0,4)}`;
  const { register, handleSubmit, formState: { errors }} = useForm({
    mode: 'onChange',
    defaultValues: {
      time: userData.time || "13:00",
      date: userData.date || getNowDate().toString(),
    }
  });

  return (
    <form onSubmit={handleSubmit(data => handleChange(data, "next"))}>
      <h2 className='text-gray-900 font-thin text-2xl text-center uppercase mb-10'>
        Выберете дату и время приема
      </h2>

      <div className='flex flex-row justify-between flex-wrap md:flex-nowrap mb-10'>
        <div className="w-full mb-5 md:mr-5">
          <label htmlFor="date" className="block mb-2 text-xs font-bold text-gray-900 uppercase">
              Выберете дату
          </label>
          <input {...register("date", {
            required: true,
            min: getNowDate(),
            max: getNowDate(30)})} name="date" className={`bg-white border-2 ${errors.date ? "border-red-500" : "border-gray-300"} text-gray-900 text-xs rounded-lg ${errors.date ? "focus:border-red-600" : "focus:border-green-600"} outline-none block w-full p-2.5`} type="date"/>
          
          {errors.date && 
          <p className='text-red-500 text-sm font-bold'>
            ⚠ Неверно выбрана дата. Выберете от {getReadableDate(getNowDate())} до {getReadableDate(getNowDate(30))}
          </p>}
        </div>
        <div className="w-full mb-5">
          <label htmlFor="time" className="block mb-2 text-xs font-bold text-gray-900 uppercase">
              Выберите время
          </label>
          <input {...register("time", {
            required: true,
            min: "10:00",
            max: "17:00"
          })} name="time" className={`bg-white border-2 ${errors.time ? "border-red-500" : "border-gray-300"} text-gray-900 text-xs rounded-lg ${errors.time ? "focus:border-red-600" : "focus:border-green-600"} outline-none block w-full p-2.5`} type="time"/>
          
          {errors.time &&
          <p className='text-red-500 text-sm font-bold'>
            ⚠ Неверно выбрано время. Выберете от 10:00 до 17:00
          </p>}
        </div>
      </div>
      
      <div className='flex justify-between sm:justify-around mt-10'>
        <input onClick={() => handleChange(null, "back")} type="button" value='Назад'
          className='bg-gray-500 text-white uppercase cursor-pointer py-2 px-8 rounded-xl font-semibold cursor-pointe hover:bg-gray-600 active:bg-gray-700 transition duration-200 ease-in-out'/>
        <input type="submit" value='Далее'
          className='bg-green-500 text-white uppercase cursor-pointer py-2 px-8 rounded-xl font-semibold cursor-pointe hover:bg-green-600 active:bg-green-700 transition duration-200 ease-in-out'/>
      </div>
    </form>
  )
}