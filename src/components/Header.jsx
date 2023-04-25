import React from 'react'

const Header = ({setIsShowForm, setIsDark, isDark}) => {

  const handleClickShowModal = () => {
    setIsShowForm((isShowForm) => !isShowForm)
  }

  const handleChangeTheme = () => {
    setIsDark((isDark) => !isDark)
  }

  return (
    
    <header className='gap-14 sm:flex sm:justify-between dark:text-white dark:shadow-gray-950 duration-200 flex flex-col items-center sm:flex-row relative sm:max-h-max mb-[95px] sm:pt-5'>
      
      <h1 className={`text-[58px] sm:ml-[38px] mt-7 sm:mt-[5px] sm:drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] sm:border-b-1 max-w-max ${isDark? 'sm:border-0' : 'sm:border-b-2'} justify-center sm:text-[65px] sm:ml-[75px]`}>usuarios</h1>

      <button onClick={handleChangeTheme} className='absolute sm:static top-[15px] right-[15px] flex gap-2 items-center font-semibold'><i className='bx bx-moon text-[27px] sm:text-[45px]'></i>
      </button>
      
      <button onClick={handleClickShowModal} className='flex gap-[3px] items-center  bg-purple-p text-base text-white p-[11px] rounded-full hover:bg-purple-p/90 transition-colors sm:h-[34px] max-w-max sm:mr-28 sm:mt-11 dark:bg-amber-600 sm:text-[22px] sm:object-contain'><i className='bx bx-plus text-[19px]'></i>
        Crear nuevo usuario</button>

    </header>
  )
}

export default Header