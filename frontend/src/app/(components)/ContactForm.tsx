"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { User, Phone, Mail, MessageSquare } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number can't exceed 15 digits")
    .regex(/^\d+$/, "Phone number must contain only digits"),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .max(500, "Message can't exceed 500 characters")
    .optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const backend = process.env.NEXT_PUBLIC_API_URL;
      const resp = await fetch(`${backend}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!resp.ok) throw new Error("Something went wrong");

      toast.success("Thank you! We’ve received your message.");
      reset();
    } catch {
      toast.error("Network error. Please try again later.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-lg space-y-6 p-6 rounded-2xl bg-white shadow-xl border border-gray-100 relative overflow-hidden"
    >
      {/* Decorative gradient border glow */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-yellow-500/10 blur-2xl" />

      {/* Name Field */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">Name</label>
        <div className="flex items-center border rounded-full px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400 transition">
          <User className="w-5 h-5 text-gray-400 mr-2" />
          <input
            {...register("name")}
            placeholder="e.g. Gates"
            type="text"
            className="w-full bg-transparent outline-none"
          />
        </div>
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">
          Phone Number
        </label>
        <div className="flex items-center border rounded-full px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400 transition">
          <Phone className="w-5 h-5 text-gray-400 mr-2" />
          <input
            {...register("phone")}
            placeholder="Type here"
            type="tel"
            className="w-full bg-transparent outline-none"
          />
        </div>
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">Email ID</label>
        <div className="flex items-center border rounded-full px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400 transition">
          <Mail className="w-5 h-5 text-gray-400 mr-2" />
          <input
            {...register("email")}
            placeholder="e.g. gates@mail.com"
            type="email"
            className="w-full bg-transparent outline-none"
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">
          Your Message
        </label>
        <div className="flex items-start border rounded-2xl px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400 transition">
          <MessageSquare className="w-5 h-5 text-gray-400 mt-2 mr-2" />
          <textarea
            {...register("message")}
            placeholder="Type here"
            rows={4}
            className="w-full bg-transparent outline-none resize-none"
          />
        </div>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-yellow-400 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition"
      >
        {isSubmitting ? "Sending..." : "Let's Connect"}
      </button>
    </form>
  );
}

export default ContactForm;
