import React from 'react'

const Form = () => {
  return (
    <div className="md:w-2/3 md:p-12 p-4 md:min-w-fit min-w-full    shadow-2xl rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 ">Just Say Hello!</h2>
        <p className="mb-6 text-sm font-normal text-gray-700">Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.</p>
        <form className="space-y-4">
          <div className="flex md:flex-row flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="md:w-1/2     w-full p-3 border text-sm rounded-lg focus:outline outline-customBlue"
            />
            <input
              type="email"
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
