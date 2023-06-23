import React from 'react'

function Newsletter() {
    return (
        <div>
        <div className="">
      <h2 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h2>
      <form className="flex flex-col">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
    </div>
    )
}
export default Newsletter