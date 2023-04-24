import React from 'react'

const Modal = ({isShowForm, setIsShowForm, register, handleSubmit, submit, reset, DEFAULT_VALUES, setIsUserIdToEdit, isUserIdToEdit, errors}) => {

 const handleClickCloseModal = () => {

    setIsShowForm((isShowForm) => !isShowForm)
    reset(DEFAULT_VALUES),
    setIsUserIdToEdit()
 }
  return (

    <section className={`fixed h-full top-0 left-0 botton-0 right-0 bg-black/40 flex justify-center items-center transition-opacity ${isShowForm ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <form className='bg-white p-4 grid gap-4 w-[300px] relative' onSubmit={handleSubmit(submit)}>
        <h3 className='text-2xl font-bold'>{isUserIdToEdit? 'Editar usuario' : 'Nuevo usuario'}</h3>
        <div className='grid gap-1'>
          <label className='text-sm font-xs' htmlFor="first_name">{isUserIdToEdit? 'Nuevo nombre' : 'Nombre'}<span className='text-red-500'>*</span></label>
          <input className='border-[1px] rounded-sm bg-gray-100 p-1' id='first_name' type="text" {...register('first_name')}/>
        </div>
        <div className='grid gap-1'>
          <label className='text-sm font-xs' htmlFor="last_name">{isUserIdToEdit? 'Nuevo apellido' : 'Apellido'}<span className='text-red-500'>*</span></label>
          <input className='border-[1px] rounded-sm bg-gray-100 p-1' id='last_name' type="text" {...register('last_name')}/> 
        </div>
        <div className='grid gap-1'>
          <label className='text-sm font-xs' htmlFor="email">{isUserIdToEdit? 'Nuevo correo' : 'Correo'}<span className='text-red-500'>*</span></label>
          <input className='border-[1px] rounded-sm bg-gray-100 p-1' id='email' type="text" {...register("email")}/>
        </div>
        <div className='grid gap-1'>
          <label className='text-sm font-xs' htmlFor="password">{isUserIdToEdit? 'Nueva contraseña' : 'Contraseña'}<span className='text-red-500'>*</span></label>
          <input className='border-[1px] rounded-sm bg-gray-100 p-1' id='password' type="password" {...register("password")}/>
        </div>
        <div className='grid gap-1'>
          <label className='text-sm font-xs' htmlFor="birthday">{isUserIdToEdit? 'Nuevo cumpleaños' : 'Cumpleaños'}</label>
          <input className='border-[1px] rounded-sm bg-gray-100 p-1' id='birthday' type="date" {...register("birthday")}/>
        </div>
        <div className='grid gap-1'>
          <label className='text-sm font-xs' htmlFor="image_url">{isUserIdToEdit? 'Nueva imagen' : 'URL imagen'}</label>
          <input className='border-[1px] rounded-sm bg-gray-100 p-1' id="image_url" type="text" {...register("image_url", {
            pattern: {
              value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/,
              message: 'El formato de URL para imágenes es inválido'
            }
          })}/>
          <span>{errors.image_url && errors.image_url.message}</span>
        </div>
        <i onClick={handleClickCloseModal} className='bx bx-x absolute top-1 right-3 text-2xl hover:text-red-500 cursor-pointer'></i>
        <button className='bg-purple-p text-white p-2 hover:bg-purple-p/90 transition-colors text-sm'>{isUserIdToEdit? 'Guardar cambios' : 'Agregar nuevo usuario'}</button>
      </form>
    </section>
  )
}

export default Modal