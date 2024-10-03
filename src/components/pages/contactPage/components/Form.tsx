//@ts-nocheck
"use client"

import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';
const Form = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

const notify = () => toast('Thank you. we will get back to you .');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log("emial ",form)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send("service_i8nx3tc", "template_ogxv1mk", {
      from_name: form.name,
      to_name: 'Amitabh',
      from_email: form.email,
      to_email: 'amitabhkumar7668@gmail.com',
      message: form.message,
      },'z4hoXEgwutdJWTRNB')
      .then(() => {
        setLoading (false);
        // alert('Thank you. I will get back to you as soon as possible.');
        notify();
        setForm ({
        name:'',
        email:'',
        message:'',
        })
      }, (error) => {
        setLoading (false)
        console.log(error);
        alert('Something went wrong.')
        })
  };
  return (
    <div className="md:w-2/3 md:p-12 p-4 md:min-w-fit min-w-full border border-customBlue   shadow-2xl rounded-lg">
    <Toaster/>
        <h2 className="text-2xl font-semibold mb-4 ">Just Say Hello!</h2>
        <p className="mb-6 text-sm font-normal text-gray-700">Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.</p>
        <form className="space-y-4"           

          onSubmit={handleSubmit}
        >
          <div className="flex md:flex-row flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              name="name"

              value={form.name}
              onChange={handleChange}
              className="md:w-1/2     w-full p-3 border text-sm rounded-lg focus:outline outline-customBlue"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="md:w-1/2 w-full p-3 border text-sm rounded-lg focus:outline  outline-customBlue"
              placeholder="zakirsoft@gmail.com"
            />
          </div>
          <input type='text'
            placeholder="Hello"
            className="w-full p-3 border rounded-lg text-sm focus:outline outline-customBlue"
          />
          <textarea
            placeholder="Subjects"
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg text-sm focus:outline outline-customBlue"
          />
          <button
            type="submit"
            className="w-fit bg-customBlue rounded-full text-white px-3 py-2 font-semibold  hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
  )
}

export default Form
