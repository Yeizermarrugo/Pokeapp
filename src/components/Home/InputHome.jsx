import React from 'react'
import { useForm } from 'react-hook-form'
import { setNameGlobal } from '../../store/slices/nameUser.slice'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const InputHome = () => {
    const {handleSubmit, reset, formState:{errors}, register } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const submit = data => {
        dispatch(setNameGlobal(data.nameUser))
        reset({
            nameUser: ""
        })
        navigate('/pokedex')
    }
  return (
    <form onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder="Insert name" 
        {...register('nameUser',{
          required: true
        })}/>  {errors.nameUser?.type=== 'required' && <p>El campo nombre es requerido</p>}
        <button>Go to Pokedex</button>
    </form>
  )
}

export default InputHome