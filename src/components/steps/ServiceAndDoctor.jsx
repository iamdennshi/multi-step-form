import React, { useContext } from 'react'
import { StepperContext } from '../../contexts/StepperContext'

export default function ServiceAndDoctor() {
  const {handleChange, userData} = useContext(StepperContext);

  return (
    <>
      <div className='mb-10'>
        <label for="service" className="block mb-2 text-xs font-bold text-gray-900 uppercase">
          Выберите услугу
        </label>
        <select name="service" onChange={handleChange} id="service" className='bg-white border-2 border-gray-300 text-gray-900 text-xs rounded-lg focus:border-green-600 outline-none block w-full p-2.5'>
          <option value={"1"}>Услуга1</option>
          <option value={"2"}>Услуга2</option>
          <option value={"3"}>Услуга3</option>
        </select>
      </div>

      <div>
        <label for="doctor" className="block mb-2 text-xs font-bold text-gray-900 uppercase">
          Выберите врача
        </label>
        <select id="doctor" name="doctor" onChange={handleChange} className='bg-white border-2 border-gray-300 text-gray-900 text-xs rounded-lg focus:border-green-600 outline-none block w-full p-2.5'>
          <option value={"1"}>Любой врач</option>
          <option value={"2"}>Услуга2</option>
          <option value={"3"}>Услуга3</option>
        </select>
      </div>
    </>
  )
}
