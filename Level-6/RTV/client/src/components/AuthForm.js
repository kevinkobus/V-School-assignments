import React from 'react'

function AuthForm(props){
  const {
    handleChange, 
    handleSubmit, 
    btnText,
    errMsg, 
    inputs: {
      username, 
      password
    } 
  } = props
  
  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <input 
        type="text" 
        value={username} 
        name="username" 
        onChange={handleChange} 
        placeholder="Username"/>
      <input 
        type="text" 
        value={password} 
        name="password" 
        onChange={handleChange} 
        placeholder="Password"/>
      <button className="authForm-btn">{ btnText }</button>
      <p style={{color: "red"}}>{ errMsg }</p>
    </form>
  )
}

export default AuthForm