"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast"; // 1. Import the toast library

// 2. Updated Zod schema with companyName (optional)
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string()
    .regex(/^(?:\+91|0)?[6-9]\d{9}$/, "Invalid Indian phone number")
    .optional()
    .or(z.literal('')),
  companyName: z.string().optional(), // Added company name field
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

// TypeScript type is automatically updated
type ContactFormInputs = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });

  // 3. Refactored onSubmit to use toast.promise
  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    await toast.promise(
      fetch("https://atpac-backend-2.onrender.com/api/contact", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then((res) => {
        if (!res.ok) {
          // If the server response is not OK, throw an error to be caught by the toast
          throw new Error("Failed to send message. Please try again.");
        }
        return res.json();
      }),
      {
        loading: 'Submitting your message...',
        success: () => {
          reset(); // Clears the form on success
          return 'Message sent successfully! We will get back to you soon.';
        },
        error: (err) => err.toString(), // Displays the specific error message
      }
    );
  };

  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.122849495834!2d72.78017267509936!3d21.18721488050183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e6352f416a1%3A0x2a5e4b52b9b03fa!2sSardar%20Vallabhbhai%20National%20Institute%20of%20Technology%2C%20Surat!5e0!3m2!1sen!2sin!4v1728148011111!5m2!1sen!2sin";

  const inputBaseStyle = "w-full px-4 py-3 bg-gray-100 dark:bg-gray-700/50 border-2 border-transparent text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 transition-all duration-300";
  const inputErrorStyle = "border-red-500 ring-red-500";
  const inputFocusStyle = "focus:ring-blue-500";

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="py-[107px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Get in Touch</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">We're here to help and answer any question you might have.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Left Side: Form */}
          <div className="p-8 md:p-12">
            {/* 4. Removed success/error state UI, form is always visible */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input id="name" type="text" placeholder="Your Name" {...register("name")} className={`${inputBaseStyle} ${errors.name ? inputErrorStyle : inputFocusStyle}`} disabled={isSubmitting} />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input id="email" type="email" placeholder="you@example.com" {...register("email")} className={`${inputBaseStyle} ${errors.email ? inputErrorStyle : inputFocusStyle}`} disabled={isSubmitting} />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone <span className="text-xs text-gray-500">(Optional)</span></label>
                <input id="phone" type="tel" placeholder="+91 98765 43210" {...register("phone")} className={`${inputBaseStyle} ${errors.phone ? inputErrorStyle : inputFocusStyle}`} disabled={isSubmitting} />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              {/* 5. Added Company Name input field */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Name <span className="text-xs text-gray-500">(Optional)</span></label>
                <input id="companyName" type="text" placeholder="Your Company" {...register("companyName")} className={`${inputBaseStyle} ${errors.companyName ? inputErrorStyle : inputFocusStyle}`} disabled={isSubmitting} />
                {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea id="message" rows={4} placeholder="How can we help you today?" {...register("message")} className={`${inputBaseStyle} ${errors.message ? inputErrorStyle : inputFocusStyle} resize-none`} disabled={isSubmitting}></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full flex justify-center items-center py-3 px-4 font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 ...">
                {isSubmitting ? "Submitting..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Right Side: Map */}
          <div className="relative min-h-[400px] lg:min-h-full p-2">
            <div className="rounded-xl overflow-hidden shadow-lg w-full h-full ring-1 ring-gray-200 dark:ring-gray-700">
              <iframe src={mapSrc} width="100%" height="100%" className="border-0" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}