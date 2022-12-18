import React from 'react'
import { StepperContext } from '../../contexts/StepperContext'
import { services } from '../../data/services';
import { doctors } from '../../data/doctors';

export default function Check() {

    const {userData} = React.useContext(StepperContext);

    return (
        <>
            <h2 className='text-gray-900 font-thin text-2xl text-center uppercase mb-10'>
                подтверждение записи
            </h2>
            <div className='flex flex-row items-start'>
                <div className='w-1/2 pr-2'>
                    <p className="uppercase font-bold text-gray-900">{services[userData.service]}</p>
                    <p>{doctors[userData.doctor]}</p>
                    <p>{userData.date} {userData.time}</p>
                </div>
                <div className='w-1/2 pl-2'>
                    <p className='uppercase font-bold text-gray-900'>{userData.firstName}</p>
                    <p>Телефон: {userData.telNumber}</p>
                    <p>E-mail: {userData.email}</p>
                    <p>Домашний адрес: {userData.address}</p>
                    <p>Дата рождения: {userData.dateOfBirth}</p>
                </div>
            </div>
        </>
    );
}