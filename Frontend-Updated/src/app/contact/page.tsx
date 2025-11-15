"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email address"
    ),
  phone: z
    .string()
    .regex(/^(?:\+91|0)?[6-9]\d{9}$/, "Invalid Indian phone number")
    .optional()
    .or(z.literal("")),
  companyName: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

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

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    const toastId = toast.loading("📨 Sending your message...");

    try {
      const res = await fetch("https://atpac-backend-2.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send message. Please try again.");

      toast.success("✅ Message sent successfully! We'll get back to you soon.", {
        id: toastId,
      });

      reset();
    } catch (err: any) {
      toast.error(err.message || "❌ Something went wrong.", { id: toastId });
    }
  };

  const mapSrc =
    "https://www.google.com/maps?q=Sardar+Vallabhbhai+National+Institute+of+Technology,+Surat&output=embed";

  const inputBaseStyle =
    "w-full px-4 py-3 bg-gray-100 dark:bg-gray-700/50 border-2 border-transparent text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 transition-all duration-300";
  const inputErrorStyle = "border-red-500 ring-red-500";
  const inputFocusStyle = "focus:ring-blue-500";

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="py-[107px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            We're here to help and answer any question you might have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Left Side: Form */}
          <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  {...register("name")}
                  className={`${inputBaseStyle} ${
                    errors.name ? inputErrorStyle : inputFocusStyle
                  }`}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register("email")}
                  className={`${inputBaseStyle} ${
                    errors.email ? inputErrorStyle : inputFocusStyle
                  }`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Phone <span className="text-xs text-gray-500">(Optional)</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  {...register("phone")}
                  className={`${inputBaseStyle} ${
                    errors.phone ? inputErrorStyle : inputFocusStyle
                  }`}
                  disabled={isSubmitting}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Company Name <span className="text-xs text-gray-500">(Optional)</span>
                </label>
                <input
                  id="companyName"
                  type="text"
                  placeholder="Your Company"
                  {...register("companyName")}
                  className={`${inputBaseStyle} ${
                    errors.companyName ? inputErrorStyle : inputFocusStyle
                  }`}
                  disabled={isSubmitting}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help you today?"
                  {...register("message")}
                  className={`${inputBaseStyle} ${
                    errors.message ? inputErrorStyle : inputFocusStyle
                  } resize-none`}
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button with Spinner */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center py-3 px-4 font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 transition-all"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          {/* Right Side: Map */}
          <div className="relative min-h-[400px] lg:min-h-full p-2">
            <div className="rounded-xl overflow-hidden shadow-lg w-full h-full ring-1 ring-gray-200 dark:ring-gray-700">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
