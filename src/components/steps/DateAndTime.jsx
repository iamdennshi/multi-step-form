import React from 'react'

export default function DateAndTime() {

  function getNowDate() {
    let d = new Date();
    return `${d.getFullYear()}-${("0" + (d.getMonth() + 1)).slice(-2)}-${("0" + d.getDate()).slice(-2)}`;
  }

  return (
    <div className='flex flex-row justify-between items-start'>
      <input type="date" min={getNowDate()}/>
      <div className='bg-red-300 w-1/2 text-center'>
        <ul className='text-gray-400'>
          <li className='hover:text-green-400 hover:font-bold cursor-pointer'>11:30</li>
          <li>12:00</li>
          <li>13:00</li>
        </ul>
      </div>
    </div>
  )
}