import React, { useContext, useState } from 'react'
import { StepperContext } from '../../contexts/StepperContext'
import { services } from '../../data/services';
import { doctors } from '../../data/doctors';


export default function ServiceAndDoctor() {
  const {handleChange, userData} = useContext(StepperContext);

  const [service, setService] = useState(services);
  const [doctor, setDoctor] = useState(doctors);

  const displayServices = service.map((s, index) => {
    return (
      <option key={index} value={index}>{s}</option>
    )
  })

  const displayDoctors = doctor.map((s, index) => {
    return (
      <option key={index} className="uppercase" value={index}>{s}</option>
    )
  })

  return (
    <>
      <h2 className='text-gray-900 font-thin text-2xl text-center uppercase mb-10'>
        Веберете услугу и врача
      </h2>
      <div className='mb-10'>
        <label htmlFor="service" className="block mb-2 text-xs font-bold text-gray-900 uppercase">
          Выберите услугу
        </label>
        <select name="service" onChange={handleChange} id="service" className='bg-white border-2 border-gray-300 text-gray-900 text-xs rounded-lg focus:border-green-600 outline-none block w-full p-2.5'>
          {displayServices}
        </select>

      </div>

      <div>
        <label htmlFor="doctor" className="block mb-2 text-xs font-bold text-gray-900 uppercase">
          Выберите врача
        </label>
        <select id="doctor" name="doctor" onChange={handleChange} className='bg-white border-2 border-gray-300 text-gray-900 text-xs uppercase rounded-lg focus:border-green-600 outline-none block w-full p-2.5'>
          {displayDoctors}
        </select>
      </div>
    </>
  )
}
