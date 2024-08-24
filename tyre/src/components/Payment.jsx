import React from 'react'

const Payment = () => {
  return (
    <div className="mt-6 bg-white shadow-md rounded-md p-4">
    <h2 className="text-xl font-bold mb-4">Payment Mode</h2>
    <div className="flex flex-col md:flex-row">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
        <div className="flex items-center">
          <svg
            className="w-6 h-6 text-green-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span>Deposit to Account</span>
        </div>
        <div className="flex items-center">
          <svg
            className="w-6 h-6 text-green-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span>Net Banking</span>
        </div>
        <div className="flex items-center">
          <svg
            className="w-6 h-6 text-green-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span>Credit Card/Debit Card</span>
        </div>
        <div className="flex items-center">
          <svg
            className="w-6 h-6 text-green-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span>UPI</span>
        </div>
        <div className="flex items-center">
          <svg
            className="w-6 h-6 text-green-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span>Wallets (PayTM/PhonePe/Amazon etc.)</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Payment
