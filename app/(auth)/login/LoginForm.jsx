"use client";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Headlogo from '../../../public/logo.png';

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      return Swal.fire("Error", "Email and password are required", "error");
    }

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        Swal.fire("Error", result.error, "error");
      } else {
        Swal.fire("Success", "Login successful", "success").then(() => {
          router.push("/dashboard"); // Redirect to dashboard on success
        });
      }
    } catch (error) {
      Swal.fire("Error", "An error occurred. Please try again.", "error");
    }
  };

  return (
    <div className="container max-w-xs mx-auto">
      <Image src={Headlogo} alt="" width="250" height="65" className="mx-auto " />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4 px-4 py-5 bg-slate-100 border-t-4 border-green-500 rounded-s-xl rounded-e-xl">
        <h3 className="text-xl my-4 text-center text-slate-700 font-semibold">Happy to see you again</h3>
        <label htmlFor="email" className="px-1">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-2 border border-gray-300 rounded"
          required
        />
        <label htmlFor="password" className="px-1">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded"
          required
        />
        <button type="submit" className="p-2 bg-green-500 text-white rounded hover:bg-green-600">
          Login
        </button>
      </form>
    </div>
  );
}
