import React from 'react'

const UserCard = ({user, deleteUser, handleClickEdit}) => {

  return (

    <article className='p-4 border-[1px] border-gray-700 rounded-[2px] gap-3 grid dark:text-slate-300 dark:border-gray-800'>

      <div>
        <img className='w-[100px] aspect-[3/5] object-cover mx-auto rounded-md' src={user.image_url? user.image_url : "/images/noProfile.jpg"} alt="User image"/>
      </div>
      <h3 className='text-center font-medium'>{user.first_name} {user.last_name}</h3>
      <ul className='grid gap-2'>
        <li className='text-center'>
        <h4 className='text-center'>Correo</h4>
        <span className='font-medium'>{user.email}</span>
        </li>
        <li className='text-center'>
          <h4 className='text-center'>Cumpleaños</h4>
          <span className='font-medium'>
            <i className='bx bxs-gift'></i>
            {user.birthday}
          </span>
        </li>
      </ul>
      <div className='flex justify-end gap-3'>
        <button className=''>
        <i onClick={() => deleteUser(user.id)} className='bx bxs-trash text-red-500'></i>
        </button>
        <button onClick={() => handleClickEdit(user)}>
        <i className='bx bxs-pencil text-amber-400'></i>
        </button>
      </div>

    </article>

  )
}

export default UserCard