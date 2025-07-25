// components/ContactModal.js
import React from 'react';
import ContactForm from './contact-form';


export default function ContactModal({ isOpen, onClose }: any) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-md mx-4 p-6 rounded-lg shadow-xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-lg font-semibold mb-4 text-gray-800">Book a Service</h2>
        <ContactForm />
      </div>
    </div>
  );
}
