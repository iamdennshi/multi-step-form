import React from 'react'
import { StepperContext } from '../../contexts/StepperContext'
import { useForm } from 'react-hook-form';

export default function AboutSelf() {
    const {handleChange, userData} = React.useContext(StepperContext);
    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: 'onBlur',
        defaultValues: {
            name: userData.name || '',
            dateOfBirth: userData.dateOfBirth || '',
            address: userData.address || '',
            phone: userData.phone || '',
            email: userData.email || '',
            note: userData.note || '',
        }
    });
    const formatPhoneNumber = (value) => {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;
        
        if (phoneNumberLength <= 3)
            return phoneNumber;
    
        if (phoneNumberLength <= 6)
            return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3)}`;
        if (phoneNumberLength <= 8)
            return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6)}`;
        return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6,8)}-${phoneNumber.slice(8,10)}`;
    }

    return (
        <form onSubmit={handleSubmit(data => handleChange(data, "next"))}>
            <h2 className='text-gray-900 font-thin text-2xl text-center uppercase mb-10'>
                Заполните информацию о себе
            </h2>
            <div className="flex flex-row justify-between flex-wrap md:flex-nowrap">
                <div className="w-full mb-5 md:mr-5">
                    <label htmlFor="name" className="block mb-2 text-xs font-bold text-gray-900 uppercase">
                        ФИО <span className="text-red-500">*</span>
                    </label>
                    <input {...register("name", {
                        required: true,
                        minLength: 6,
                        maxLength: 100,
                    })} placeholder="Иванов Иван Иванович" type="text" id="name" className={`bg-white border-2 ${errors.name ? "border-red-500" : "border-gray-300"} text-gray-900 text-xs rounded-lg ${errors.name ? "focus:border-gray-600" : "focus:border-green-600"} outline-none block w-full p-2.5`}/>
                   
                    {errors.name && 
                    <p className='text-red-500 text-sm font-bold'>
                        ⚠ Введите корректное ФИО
                    </p>}
                </div>
                <div className="w-full mb-5">
                    <label htmlFor="dateOfBirth"  className="block mb-2 text-xs font-bold text-gray-900 uppercase">
                        Дата рождения <span className="text-red-500">*</span>
                    </label>
                    <input {...register("dateOfBirth", {
                        required: true,
                        max: "2022-01-01",
                    })} type="date" id="dateOfBirth" className={`bg-white border-2 ${errors.dateOfBirth ? "border-red-500" : "border-gray-300"} text-gray-900 text-xs rounded-lg  ${errors.dateOfBirth ? "focus:border-gray-600" : "focus:border-green-600"} outline-none block w-full p-2.5`}/>
                    
                    {errors.dateOfBirth && 
                    <p className='text-red-500 text-sm font-bold'>
                        ⚠ Введите корректную дату рождения
                    </p>}
                </div>
            </div>

            <div className="w-full mb-5">
                <label htmlFor="address" className="block mb-2 text-xs font-bold text-gray-900 uppercase">
                    Домашний адрес <span className="text-red-500">*</span>
                </label>
                <input {...register("address", {
                    required: true,
                    minLength: 6,
                    maxLength: 100,
                })} placeholder="г. Пермь, ул. Луначарского 1" type="text" id="address" className={`bg-white border-2 ${errors.address ? "border-red-500" : "border-gray-300"} text-gray-900 text-xs rounded-lg  ${errors.address ? "focus:border-gray-600" : "focus:border-green-600"} outline-none block w-full p-2.5`}/>
            
                {errors.address && 
                <p className='text-red-500 text-sm font-bold'>
                    ⚠ Введите корректный домашний адрес
                </p>}
            </div>

            <div className="flex flex-row justify-between flex-wrap md:flex-nowrap ">
                <div className="w-full mb-5 md:mr-5">
                    <label htmlFor="phone" className="block mb-2 text-xs font-bold text-gray-900 uppercase">
                        Номер телефона <span className="text-red-500">*</span>
                    </label>
                    <div className='flex'>
                        <div className={`text-center text-gray-900 border-2 rounded-l-lg border-r-0 border-gray-300 bg-gray-50 text-xs p-2.5 w-10`}>+7</div>
                        <input 
                            className={`bg-white border-2 ${errors.phone ? "border-red-500" : "border-gray-300"} text-gray-900 text-xs rounded-r-lg ${errors.phone ? "focus:border-gray-600" : "focus:border-green-600"} outline-none block w-full p-2.5`} 
                            {...register("phone", {
                                required: true,
                                onChange: e => {e.target.value=formatPhoneNumber(e.target.value)}, 
                                minLength: 15,
                            })} 
                            placeholder="(___) ___-__-__" 
                            type="tel"
                            id="phone"/>
                    </div>
                    {errors.phone && 
                    <p className='text-red-500 text-sm font-bold'>
                        ⚠ Введите корректный номер телефона
                    </p>}
                </div>
                <div className="w-full">
                    <label htmlFor="email" className="block mb-2 text-xs font-bold text-gray-900 uppercase">
                        E-mail <span className='normal-case text-gray-500 font-normal'>(не обязательно)</span>
                    </label>
                    <input {...register("email", {
                        required: false,
                    })} placeholder="example@mail.ru" type="email" id="email" className='bg-white border-2 border-gray-300 text-gray-900 text-xs rounded-lg focus:border-green-600 outline-none block w-full p-2.5 mb-5'/>
                </div>
            </div>

            <div className="w-full">
                <label htmlFor="note" className="block text-xs font-bold text-gray-900 uppercase mb-2">
                    Заметки <span className='normal-case text-gray-500 font-normal'>(не обязательно)</span>
                </label>
                <textarea {...register("note", {
                    required: false,
                })} placeholder='Дополнительные сведения, которые вы бы хотели передать специалисту ...' id="note" rows={3} className='bg-white border-2 border-gray-300 text-gray-900 text-xs rounded-lg focus:border-green-600 outline-none block w-full p-2.5'/>
            </div>

            <div className='flex justify-between sm:justify-around mt-10'>
                <input onClick={() => handleChange(null, "back")} type="button" value='Назад'
                    className='bg-gray-500 cursor-pointer text-white uppercase py-2 px-8 rounded-xl font-semibold cursor-pointe hover:bg-gray-600 active:bg-gray-700 transition duration-200 ease-in-out'/>
                <input type="submit" value='Далее'
                    className='bg-green-500 cursor-pointer text-white uppercase py-2 px-8 rounded-xl font-semibold cursor-pointe hover:bg-green-600 active:bg-green-700 transition duration-200 ease-in-out'/>
            </div>
        </form>
    )
}