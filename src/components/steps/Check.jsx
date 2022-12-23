import React from 'react'
import { StepperContext } from '../../contexts/StepperContext'
import { services } from '../../data/services';
import { doctors } from '../../data/doctors';

export default function Check() {
    const {userData, handleClick} = React.useContext(StepperContext);
    const getReadableDate = (date) => `${date.slice(8,10)}.${date.slice(5,7)}.${date.slice(0,4)}`;

    return (
        <form>
            <h2 className='text-gray-900 font-thin text-2xl text-center uppercase mb-10'>
                подтверждение записи
            </h2>
            <div className='flex flex-row items-start'>
                <div className='w-1/2 pr-2'>
                    <p className="uppercase font-bold text-gray-900">{services[userData.service]}</p>
                    <p>{doctors[userData.doctor]}</p>
                    <p>{getReadableDate(userData.date)} {userData.time}</p>
                </div>
                <div className='w-1/2 pl-2'>
                    <p className='uppercase font-bold text-gray-900'>{userData.name}</p>
                    <p>Телефон: {userData.phone}</p>
                    <p className={!userData.email ? 'hidden' : ''}>E-mail: {userData.email}</p>
                    <p>Домашний адрес: {userData.address}</p>
                    <p>Дата рождения: {getReadableDate(userData.date)}</p>
                </div>
            </div>
            <div className='flex justify-around mt-10'>
                <input onClick={() => handleClick("back")} type="button" value='Назад'
                    className='bg-gray-500 text-white uppercase py-2 px-8 rounded-xl font-semibold cursor-pointe hover:bg-gray-600 active:bg-gray-700 transition duration-200 ease-in-out'/>
                <input onClick={() => handleClick("next")} type="submit" value='Подтвердить'
                    className='bg-green-500 text-white uppercase py-2 px-8 rounded-xl font-semibold cursor-pointe hover:bg-green-600 active:bg-green-700 transition duration-200 ease-in-out'/>
            </div>
        </form>
    );
}