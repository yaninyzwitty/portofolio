import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";



type FormValues = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
type Props = {}


function ContactMe({}: Props) {



    const { register, handleSubmit } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = formData => {
        // customize the way you like
        window.location.href = `mailto: ianmwa143@gmail.com?subject=${formData.subject}&body=Hi My name is ${formData.name}, ${formData.message} is (${formData.email})`
    }
 
    return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
<h3 className='absolute top-0 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>
        <div className='flex flex-col space-y-3'>
            <h4 className='text-4xl font-semibold text-center pt-24'>
                I have just got what you need.{" "}
                <span className='decoration-[#F7AB0A]/50 underline'>Let`s talk</span>
            </h4>
            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className="text-[#F7AB0A] h-7 w-7 justify-evenly" />
                <p className='text-2xl'>+1234567</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 justify-evenly" />
                <p className='text-2xl'>ianmwa143@gmail.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className="text-[#F7AB0A] h-7 w-7 justify-evenly" />
                <p className='text-2xl'>123 Developer Lane</p>
                </div>
            </div>
                <form onSubmit={handleSubmit(onSubmit)} 
                className='flex flex-col space-y-2 w-fit mx-auto pb-10'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactInput' />
                    <button className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg' type='submit'>Submit</button>

                </form>
           
        </div>
   
    </div>
   
  )
}

export default ContactMe