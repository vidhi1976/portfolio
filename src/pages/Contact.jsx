import  { Suspense, useRef } from 'react'
import { useState } from 'react';

import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Loader  from '../components/Loader';
import Fox from '../models/Fox';
import useAlert from '../hooks/useAlert';

import Alert from '../components/Alert';
const Contact = () => {
  const formRef = useRef(null);
  const [isLoading, setisLoading] = useState(false)
  const [form, setform] = useState({name:'',email:'',message:''});
  const [currentAnimation, setcurrentAnimation] = useState('idle');
  const { alert , showAlert , hideAlert} = useAlert();


  const handleChange=(e)=>{

    setform({...form , [e.target.name]: e.target.value })

  };
  const handleFocus=()=>{
    setcurrentAnimation('walk');
  };
  const handleBlur = ()=>{
    setcurrentAnimation('idle');
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    setisLoading(true);
    setcurrentAnimation('hit');
    emailjs.send(
     import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
     import.meta.env. VITE_APP_EMAILJS_TEMPLATE_ID,
     {
      from_name : form.name,
      to_name: "Vidhi",
      from_email: form.email,
      to_email:'vidhisingh1956@gmail.com',
      message: form.message
     },
     import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      
    ).then(()=>{
      setisLoading(false);
      showAlert({show: true , text : 'Message sent successfully!',type: 'success'})

      setTimeout(()=>{
        hideAlert();
        setcurrentAnimation('idle');
        setform({name:'',email:'',message: ''});
      },[3000])
    }).catch((error)=>{
      setisLoading(false);
      console.log(error);
      setcurrentAnimation('idle');
      //todo : show error msg
      showAlert({show:true , text:'I didnt receive your message',
        type:'danger'
      })
      
    }
    )
  }
  return (
    
      <div  className='bg-blue-200 h-[100vh]'>
        <section className='relative flex  bg-blue-200 flex-col lg:flex-row max-container'>
          {alert.show && <Alert {...alert}/>}
          <div className='flex-1 min-w-[50%] flex flex-col'>
            <h1 className='head-text'>Get in Touch</h1>
            <form className='w-full flex flex-col gap-7 mt-4' onSubmit={handleSubmit}>
              <label className='text-black-500 font-semibold'>
                Name
                <input
                type="text"
                name='name'
                className='input'
                placeholder='John'
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                />
              </label>
              <label className='text-black-500 font-semibold'>
                Email
                <input
                type="email"
                name='email'
                className='input'
                placeholder='john@doe.com'
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                />
              </label>
              <label className='text-black-500 font-semibold'>
                Your Message
                <textarea
                name='message'
                rows={4}
                className='textarea'
                placeholder='Let me know how I can help you!'
                required
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                />
              </label>
              <button type='submit'
              className='btn'
              disabled={isLoading}
              onFocus={handleFocus}
              onBlur={handleBlur}
              >
              {isLoading? 'Sending...' :'Send Message'}
              </button>
            </form>
          </div>
          <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px] '>
            <Canvas
            camera={{
              position:[0,1,5],
              fov:75,
              near:0.1,
              far:1000
            }}>
              <directionalLight intensity={2.5} position={[0,0,1]}/>
              <ambientLight intensity={0.5}/>
              <Suspense fallback ={<Loader/>}>
              <Fox
                position={[0.5,0.35,0]}
                rotation = {[12.6,-0.6,0]}
                scale ={[0.5,0.5,0.5]}
                currentAnimation={currentAnimation}
              />
              </Suspense>
            </Canvas>
          </div>
        </section>
      </div>
    
  )
}

export default Contact
