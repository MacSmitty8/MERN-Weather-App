import { useState, useEffect } from "react"
import { FaUser } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { toast } from 'react-toastify'
import {register, reset} from '../features/auth/authSlice'
import Spinner from "../components/Spinner"
//Make a ReadME, focus on styling, and POST Route
function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        zipcode: '',
        password: '',
        confirmPassword: '',
    })
    //^ Entries needed in order to register for an account.
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
      //This will take you back to the dashboard, assuming the login is successful.
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
    //If the password you put in the first password entry doesn't match with the second password entry then it'll return an error. Otherwise, it'll capture all the entered fields into data.
    if (isLoading) {
      return <Spinner />
    }
    //While the things are loaded a spinner will show on screen.
  return (
    <>
      <section>
        <h1>
            <FaUser /> Register
        </h1>
        <p>Please create an account</p>
        <section className="form">
            <form onSubmit={onSubmit}>
            <div className="form-group">
                <input type='text' 
                id='name' 
                name='name' 
                value={name} 
                placeholder='Enter your name' 
                onChange={onChange}    
                />
                </div>
                <div className="form-group">
                  <input type='text' 
                id='email' 
                name='email' 
                value={email} 
                placeholder='Enter your email' 
                onChange={onChange}    
                />
                </div>
                <div className="form-group">
                  <input type='text' 
                id='zipcode' 
                name='zipcode' 
                value={zipcode} 
                placeholder='Enter your zipcode' 
                onChange={onChange}    
                /> 
                </div>
                <div className="form-group">
                  <input type='text' 
                id='password' 
                name='password' 
                value={password} 
                placeholder='Enter your password' 
                onChange={onChange}    
                />
                </div>
                <div className="form-group">
                  <input type='text' 
                id='confirmPassword' 
                name='confirmPassword' 
                value={confirmPassword} 
                placeholder='Please confirm your password' 
                onChange={onChange}    
                />
                </div>
                <div className="form-group">
                <div>
                    <button type='submit' className='btn btn-block'>
                        Submit
                    </button>
                </div>
                </div>
            </form>
        </section>
      </section>
    </>
  )
}

export default Register
