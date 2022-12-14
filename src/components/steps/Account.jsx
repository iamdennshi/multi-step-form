import React, { useContext } from 'react'
import { StepperContext } from '../../contexts/StepperContext'

export default function Account() {
  const {userData, setUserData} = useContext(StepperContext);
  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData({...userData, [name]: value});
  };

  console.log(userData["username"]);
  return (
    <div>
          {/* <input
            onChange={handleChange}
            value={userData["username"] || ""}
            name="username"
            placeholder='Username'
            className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
          /> */}
          <div className='mb-10'>
            <label for="doctor" class="block mb-2 text-xs font-bold text-gray-900 uppercase">
              Выберите услугу
            </label>
            <select id="doctor" className='bg-white border-2 border-gray-300 text-gray-900 text-xs rounded-lg focus:border-green-600 outline-none block w-full p-2.5'>
              <option value={userData["username"] || ""}>Услуга1</option>
              <option value={userData["username"] || ""}>Услуга2</option>
              <option value={userData["username"] || ""}>Услуга3</option>
            </select>
          </div>

          <div>
            <label for="doctor" class="block mb-2 text-xs font-bold text-gray-900 uppercase">
              Выберите врача
            </label>
            <select id="doctor" className='bg-white border-2 border-gray-300 text-gray-900 text-xs rounded-lg focus:border-green-600 outline-none block w-full p-2.5'>
              <option value={userData["username"] || ""}>Любой врач</option>
              <option value={userData["username"] || ""}>Услуга2</option>
              <option value={userData["username"] || ""}>Услуга3</option>
            </select>
          </div>
    </div>
  )
}
