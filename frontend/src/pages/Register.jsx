import { useState, useEffect } from "react"
import { FaUser } from "react-icons/fa"

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const {name, email, password, confirmPassword} = formData

    const onChange = () => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
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
