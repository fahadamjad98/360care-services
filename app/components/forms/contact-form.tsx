import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xldnqazz");

  if (state.succeeded) {
    return <p className="text-green-600 font-semibold">Our representative will call you shortly!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Phone Number */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          className="mt-1 w-full border rounded-md px-3 py-2"
          required
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      </div>

      {/* Select a Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700">
          Select a Service
        </label>
        <select
          id="service"
          name="service"
          className="mt-1 w-full border rounded-md px-3 py-2"
          required
        >
          <option value="">-- Please choose a service --</option>
          <option value="Air Conditioner">Air Conditioner</option>
          <option value="Electrical">Electrical</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Painting">Painting</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Other">Other</option>
        </select>
        <ValidationError prefix="Service" field="service" errors={state.errors} />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="mt-1 w-full border rounded-md px-3 py-2"
          required
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
}
