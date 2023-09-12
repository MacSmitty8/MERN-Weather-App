import { useState, useEffect } from "react"
import { FaSignInAlt } from "react-icons/fa"

const onSubmit = (e) => {
    e.preventDefault()
}
function Login() {
    const[formData, setFormData] = useState({
        email: '',
        password: '',

    })

    const{email, password} = formData

    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
    }
    return (
        <>
          <section>
            <h1>
              <FaSignInAlt /> Login
            </h1>
            <p>Login and see the weather!</p>
          </section>
    
          <section className='form'>
            <form onSubmit={onSubmit}>
              <div>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  name='email'
                  value={email}
                  placeholder='Enter your email'
                  onChange={onChange}
                />
              </div>
              <div>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  name='password'
                  value={password}
                  placeholder='Enter password'
                  onChange={onChange}
                />
              </div>
    
              <div className='form-group'>
                <button type='submit'>
                  Submit
                </button>
              </div>
            </form>
          </section>
        </>
      )
    }
    
    export default Login
