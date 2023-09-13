import { useState, useEffect } from "react"
import { FaUser } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch, useSelector } from "react-redux/es/hooks/useSelector"
import { toast } from 'react-toastify'
import {register, reset} from '../features/auth/authService'
import Spinner from "../components/Spinner"

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        zipcode: '',
        password: '',
        confirmPassword: '',
    })

    const {name, email, zipcode, password, confirmPassword} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector(
      (state) => state.auth
    )

    useEffect(() => {
      if (isError) {
        toast.error(message)
      }
  
      if (isSuccess || user) {
        navigate('/')
      }
  
      dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(password !== confirmPassword){
          toast.error('Passwords do not match.')
        } else {
          const userData = {
            name, 
            email,
            zipcode,
            password,
          }
          dispatch(register(userData))
        }
    }
    if (isLoading) {
      return <Spinner />
    }

  return (
    <>
      <section>
        <h1>
            <FaUser /> Register
        </h1>
        <p>Please create an account</p>
        <section>
            <form onSubmit={onSubmit}>
                <input type='text' 
                id='name' 
                name='name' 
                value={name} 
                placeholder='Enter your name' 
                onChange={onChange}    
                />
                  <input type='text' 
                id='email' 
                name='email' 
                value={email} 
                placeholder='Enter your email' 
                onChange={onChange}    
                />
                  <input type='text' 
                id='password' 
                name='password' 
                value={password} 
                placeholder='Enter your password' 
                onChange={onChange}    
                />
                  <input type='text' 
                id='confirmPassword' 
                name='confirmPassword' 
                value={confirmPassword} 
                placeholder='Please confirm your password' 
                onChange={onChange}    
                />
                <div>
                    <button type='submit'>
                        Submit
                    </button>
                </div>
            </form>
        </section>
      </section>
    </>
  )
}

export default Register
