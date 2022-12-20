import React from 'react'
import { StepperContext } from '../../contexts/StepperContext'


export default function AboutSelf() {
    const {handleChange, userData} = React.useContext(StepperContext);
    
    return (
        <>
        <h2 className='text-gray-900 font-thin text-2xl text-center uppercase mb-10'>
            Заполните информацию о себе
        </h2>
        <div className="flex flex-row justify-between flex-wrap md:flex-nowrap">
            <div className="w-full md:mr-5">
                <label htmlFor="name" className="block mb-2 text-xs font-bold text-gray-900 uppercase">
                    ФИО <span className="text-red-500">*</span>
                </label>
                <input onChange={handleChange} placeholder="Иванов Иван Иванович" value={userData.name} type="text" name="name" id="name" className='bg-white border-2 border-gray-300 text-gray-900 text-xs rounded-lg focus:border-green-600 outline-none block w-full p-2.5 mb-5'/>
            </div>
            <div className="w-full">
                <label htmlFor="dateOfBirth"  className="block mb-2 text-xs font-bold text-gray-900 uppercase">
                    Дата рождения <span className="text-red-500">*</span>
                </label>
                <input onChange={handleChange} value={userData.dateOfBirth} type="date" name="dateOfBirth" id="dateOfBirth" className='bg-white border-2 border-gray-300 text-gray-900 text-xs rounded-lg focus:border-green-600 outline-none block w-full p-2.5 mb-5'/>
            </div>
        </div>
        <div className="w-full">
                <label htmlFor="address" className="block mb-2 text-xs font-bold text-gray-900 uppercase">
                    Домашний адрес <span className="text-red-500">*</span>
                </label>
                <input onChange={handleChange} value={userData.address} placeholder="г. Пермь, ул. Луначарского 1" type="text" name="address" id="address" className='bg-white border-2 border-gray-300 text-gray-900 text-xs rounded-lg focus:border-green-600 outline-none block w-full p-2.5 mb-5'/>
        </div>
        <div className="flex flex-row justify-between flex-wrap md:flex-nowrap">
            <div className="w-full md:mr-5">
                <label htmlFor="phone" className="block mb-2 text-xs font-bold text-gray-900 uppercase">
                    Номер телефона <span className="text-red-500">*</span>
                </label>
                <input onChange={handleChange} value={userData.phone} placeholder="+7 (___) ___-__-__" type="tel" pattern="+7 ([0-9]{3}) [0-9]{3}-[0-9]{2}-[0-9]{2}" name="phone" id="phone" className='bg-white border-2 border-gray-300 text-gray-900 text-xs rounded-lg focus:border-green-600 outline-none block w-full p-2.5 mb-5'/>
            </div>
            <div className="w-full">
                <label htmlFor="email" className="block mb-2 text-xs font-bold text-gray-900 uppercase">
                    E-mail
                </label>
                <input onChange={handleChange} value={userData.email} placeholder="example@mail.ru" type="email" name="email" id="email" className='bg-white border-2 border-gray-300 text-gray-900 text-xs rounded-lg focus:border-green-600 outline-none block w-full p-2.5 mb-5'/>
            </div>
        </div>
        <div className="w-full">
                <label htmlFor="note" className="block text-xs font-bold text-gray-900 uppercase mb-2">
                    Заметки
                </label>
                <textarea onChange={handleChange} value={userData.note} name="note" id="note" className='bg-white border-2 border-gray-300 text-gray-900 text-xs rounded-lg focus:border-green-600 outline-none block w-full p-2.5'/>
        </div>
        </>
    )
}