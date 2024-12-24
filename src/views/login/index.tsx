import { useState } from 'react'

export default function Login() {
  const [title, setTitle] = useState<string>('Sign In Chat Room')
  const [currentTab, setCurentTab] = useState<string>('signin')
  const handleSignUp = () => {
    setTitle('Sign Up Chat Room')
    setCurentTab('signup')
  }
  const handleSignIn = () => {
    setTitle('Sign In Chat Room')
    setCurentTab('signin')
  }
  return (
    <div className="login-page w-full h-full flex justify-between items-center  ">
      <div className="login-page-bg bg-blue-50 relative w-full h-full bg-hero-pattern">
        <div className="login-page-bg-img absolute top-36 right-52 bg-cover bg-center bg-no-repeat border w-100 h-100 bg-tr-50 p-4 rounded-md bg-trt opacity-75">
          <div>
            <div className="text-3xl text-gray-700">{title}</div>
            <div className=""></div>
            {currentTab === 'signin' ? <div>Login</div> : <div>Sign Up</div>}
          </div>
          {currentTab === '</button>' ? (
            <button
              onClick={handleSignUp}
              className="bg-blue-500 cursor-pointer"
            >
              Sign Up
            </button>
          ) : (
            <button
              onClick={handleSignIn}
              className="bg-blue-500 cursor-pointer"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
