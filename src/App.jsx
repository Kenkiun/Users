import axios from "axios"
import { useEffect, useState } from "react"
import Modal from "./components/Modal"
import Header from "./components/Header"
import { useForm } from "react-hook-form"
import UsersList from "./components/UsersList"


function App() {

  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    
    if(isDark){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
    
  },[isDark])

  const BASE_URL = "https://users-crud.academlo.tech"

  const [users, setUsers] = useState([])
  const [isUserIdToEdit, setIsUserIdToEdit] = useState()
  const [isShowForm, setIsShowForm] = useState(false)
  const {register, handleSubmit, reset, formState: {errors} } = useForm()

  const DEFAULT_VALUES = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: "",
    image_url: ""
  }

  const submit = (data) => {
    if(!data.birthday){
      data.birthday = null
    }
    if(!data.image_url){
      data.image_url = null
    }

    if(isUserIdToEdit){
      editUser(data) 
    } else {
      createUser(data)
    }
  }

  useEffect(() => {
    getAllUsers()
  },[])
  
  const getAllUsers = () => {
    const URL = BASE_URL + '/users/'

    axios.get(URL)
    .then((res) => setUsers(res.data))
    .catch((err) => console.log(err))
  }

  const createUser = (data) => {
    const URL = BASE_URL + '/users/'

    axios.post(URL, data)
    .then(() => {
      getAllUsers()
      reset(DEFAULT_VALUES),
      setIsShowForm(!isShowForm)
    })
    .catch((err) => console.log(err))
  }

  const deleteUser = (id) => {
    const URL = BASE_URL + `/users/${id}/`

    axios.delete(URL)
    .then(() => getAllUsers())
    .catch((err) => console.log(err))
  }

  const editUser = (data) => {
    const URL = BASE_URL + `/users/${isUserIdToEdit}/`

    axios.patch(URL, data)
    .then(() => {
      getAllUsers()
      reset(DEFAULT_VALUES)
      setIsShowForm(!isShowForm)
      setIsUserIdToEdit()
    })
    .catch((err) => console.log(err)) 
  }

  const handleClickEdit = (data) => {
    setIsShowForm((isShowForm) => !isShowForm)
    reset(data)
    setIsUserIdToEdit(data.id)
  }

// ------------------------------------------------------------------------------

  return (
    
    <main className="font-sans bg-slate-50 dark:bg-slate-700 min-h-screen relative">

      <Header setIsShowForm={setIsShowForm} setIsDark={setIsDark} isDark={isDark}/>
      <Modal 
      register={register} 
      isShowForm={isShowForm} 
      setIsShowForm={setIsShowForm}
      handleSubmit={handleSubmit} 
      submit={submit}
      reset={reset}
      DEFAULT_VALUES={DEFAULT_VALUES}
      setIsUserIdToEdit={setIsUserIdToEdit}
      isUserIdToEdit={isUserIdToEdit}
      errors={errors}/>
      <UsersList users={users} deleteUser={deleteUser} handleClickEdit={handleClickEdit}/>

    </main>

  )
}

export default App
