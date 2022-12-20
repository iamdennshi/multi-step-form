import React from 'react'
import { StepperContext } from '../../contexts/StepperContext'
import {useForm} from 'react-hook-form';

export default function DateAndTime() {
  const {handleChange, userData} = React.useContext(StepperContext);
  const { register, handleSubmit, formState: { errors }} = useForm({
    mode: 'onSubmit',
    defaultValues: {
      time: "13:00",
      date: getNowDate().toString(),
    }

  });

  function getNowDate() {
    let d = new Date();
    return `${d.getFullYear()}-${("0" + (d.getMonth() + 1)).slice(-2)}-${("0" + d.getDate()).slice(-2)}`;
  }

  return (
    <form onSubmit={handleSubmit(handleChange)}>
      <h2 className='text-gray-900 font-thin text-2xl text-center uppercase mb-10'>
        Выберете дату и время приема
      </h2>
      <div className='mb-10'>
        <label htmlFor="date" className="block mb-2 text-xs font-bold text-gray-900 uppercase">
            Выберете дату
        </label>
        <input {...register("date")} value={userData.date} name="date" className='bg-white border-2 border-gray-300 text-gray-900 text-xs rounded-lg
        focus:border-green-600 outline-none block w-full p-2.5' type="date"/>
      </div>

      <label htmlFor="time" className="block mb-2 text-xs font-bold text-gray-900 uppercase">
          Выберите время
      </label>
      <input {...register("time")} value={userData.time} name="time" className='bg-white border-2 border-gray-300 text-gray-900 text-xs rounded-lg
       focus:border-green-600 outline-none block w-full p-2.5' type="time"/>
      <div className='flex justify-around mt-10'>
      <input type="submit" value='Далее'
        className='bg-green-500 text-white uppercase py-2 px-8 rounded-xl font-semibold cursor-pointe hover:bg-green-600 active:bg-green-700 transition duration-200 ease-in-out'/>
      </div>
    </form>
  )
}