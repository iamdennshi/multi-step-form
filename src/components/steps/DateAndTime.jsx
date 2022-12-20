import React from 'react'
import { StepperContext } from '../../contexts/StepperContext'

export default function DateAndTime() {
  const {handleChange, userData} = React.useContext(StepperContext);

  function getNowDate() {
    let d = new Date();
    return `${d.getFullYear()}-${("0" + (d.getMonth() + 1)).slice(-2)}-${("0" + d.getDate()).slice(-2)}`;
  }

  return (
    <div>
      <h2 className='text-gray-900 font-thin text-2xl text-center uppercase mb-10'>
        Выберете дату и время приема
      </h2>
      <div className='mb-10'>
        <label htmlFor="date" className="block mb-2 text-xs font-bold text-gray-900 uppercase">
            Выберете дату
        </label>
        <input onChange={handleChange} value={userData.date} name="date" className='bg-white border-2 border-gray-300 text-gray-900 text-xs rounded-lg
        focus:border-green-600 outline-none block w-full p-2.5' type="date" defaultValue={getNowDate()} min={getNowDate()}/>
      </div>

      <label htmlFor="time" className="block mb-2 text-xs font-bold text-gray-900 uppercase">
          Выберите время
      </label>
      <input onChange={handleChange} value={userData.time} name="time" className='bg-white border-2 border-gray-300 text-gray-900 text-xs rounded-lg
       focus:border-green-600 outline-none block w-full p-2.5' defaultValue="12:00" type="time"/>
    </div>
  )
}