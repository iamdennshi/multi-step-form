

export default function AboutSelf() {
    return (
        <>
        <h2 className='text-gray-900 font-thin text-2xl text-center uppercase mb-10'>
            Заполните информацию о себе
        </h2>
        <div className="flex flex-row justify-between flex-wrap md:flex-nowrap">
            <div className="w-full md:mr-5">
                <label htmlFor="firstName" className="block mb-2 text-xs font-bold text-gray-900 uppercase">
                    ФИО <span className="text-red-500">*</span>
                </label>
                <input placeholder="Иванов Иван Иванович" type="text" name="firstName" id="firstName" className='bg-white border-2 border-gray-300 text-gray-900 text-xs rounded-lg focus:border-green-600 outline-none block w-full p-2.5 mb-5'/>
            </div>
            <div className="w-full">
                <label htmlFor="secondName" className="block mb-2 text-xs font-bold text-gray-900 uppercase">
                    Дата рождения <span className="text-red-500">*</span>
                </label>
                <input placeholder="Иван" type="date" name="secondName" id="secondName" className='bg-white border-2 border-gray-300 text-gray-900 text-xs rounded-lg focus:border-green-600 outline-none block w-full p-2.5 mb-5'/>
            </div>
        </div>
        <div className="w-full">
                <label htmlFor="address" className="block mb-2 text-xs font-bold text-gray-900 uppercase">
                    Домашний адрес <span className="text-red-500">*</span>
                </label>
                <input placeholder="г. Пермь, ул. Луначарского 1" type="text" name="address" id="address" className='bg-white border-2 border-gray-300 text-gray-900 text-xs rounded-lg focus:border-green-600 outline-none block w-full p-2.5 mb-5'/>
        </div>
        <div className="flex flex-row justify-between flex-wrap md:flex-nowrap">
            <div className="w-full md:mr-5">
                <label htmlFor="telNumber" className="block mb-2 text-xs font-bold text-gray-900 uppercase">
                    Номер телефона <span className="text-red-500">*</span>
                </label>
                <input placeholder="+7 (___) ___-__-__" type="tel" pattern="+7 ([0-9]{3}) [0-9]{3}-[0-9]{2}-[0-9]{2}" name="telNumber" id="telNumber" className='bg-white border-2 border-gray-300 text-gray-900 text-xs rounded-lg focus:border-green-600 outline-none block w-full p-2.5 mb-5'/>
            </div>
            <div className="w-full">
                <label htmlFor="email" className="block mb-2 text-xs font-bold text-gray-900 uppercase">
                    E-mail
                </label>
                <input placeholder="example@mail.ru" type="email" name="email" id="email" className='bg-white border-2 border-gray-300 text-gray-900 text-xs rounded-lg focus:border-green-600 outline-none block w-full p-2.5 mb-5'/>
            </div>
        </div>
        <div className="w-full">
                <label htmlFor="notes" className="block text-xs font-bold text-gray-900 uppercase mb-2">
                    Заметки
                </label>
                <textarea name="notes" id="notes" className='bg-white border-2 border-gray-300 text-gray-900 text-xs rounded-lg focus:border-green-600 outline-none block w-full p-2.5'/>
        </div>
        </>
    )
}