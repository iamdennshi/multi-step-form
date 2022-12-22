import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form"; 
import { StepperContext } from '../../contexts/StepperContext'
import { services } from '../../data/services';
import { doctors } from '../../data/doctors';


export default function ServiceAndDoctor() {
  const {handleChange, userData} = useContext(StepperContext);
  const [service, setService] = useState(services);
  const [doctor, setDoctor] = useState(doctors);
  const { register, handleSubmit, formState: { errors }} = useForm({
    mode: 'onSubmit',
    defaultValues: {
      service: userData.service || -1,
      doctor: userData.doctor || -1,
    }

  });


  const displayServices = service.map((s, index) => {
    return ( 
      <option key={index + 100} value={index}>{s}</option>
    )
  })

  const displayDoctors = doctor.map((s, index) => {
    return ( 
      <option key={index + 200} value={index}>{s}</option> 
    )
  })



  return (
    <form onSubmit={handleSubmit(handleChange)}>
      <h2 className='text-gray-900 font-thin text-2xl text-center uppercase mb-10'>
        Веберете услугу и врача
      </h2>
      <div className='mb-10'>
        <label htmlFor="service" className="block mb-2 text-xs font-bold text-gray-900 uppercase">
          Выберите услугу
        </label>
        <select {...register("service", {min: 0})} id="service" className={`bg-white border-2 ${errors.service ? "border-red-500" : "border-gray-300"} text-gray-900 text-xs rounded-lg ${errors.service ? "focus:border-red-600" : "focus:border-green-600"} outline-none block w-full p-2.5`}>
          <option disabled value="-1">Нажмите чтобы выбрать услугу</option>
          {displayServices}
        </select>
        {errors.service && <p className='text-red-500 text-sm font-bold'>⚠ Веберете услугу</p>}
      </div>

      <div>
        <label htmlFor="doctor" className="block mb-2 text-xs font-bold text-gray-900 uppercase">
          Выберите врача
        </label>
        <select {...register("doctor", {min: 0})} id="doctor" className={`bg-white border-2 ${errors.doctor ? "border-red-500" : "border-gray-300"} text-gray-900 text-xs rounded-lg ${errors.doctor ? "focus:border-red-600" : "focus:border-green-600"} outline-none block w-full p-2.5`}>
          <option disabled value="-1">Нажмите чтобы выбрать врача</option>
          {displayDoctors}
        </select>
        {errors.doctor && <p className='text-red-500 text-sm font-bold'>⚠ Веберете врача</p>}
      </div>
      <div className='flex justify-around mt-10'>
      <input type="submit" value='Далее'
        className='bg-green-500 text-white uppercase py-2 px-8 rounded-xl font-semibold cursor-pointe hover:bg-green-600 active:bg-green-700 transition duration-200 ease-in-out'/>
      </div>
  </form>
  )
}