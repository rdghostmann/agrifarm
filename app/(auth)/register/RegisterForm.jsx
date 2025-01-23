"use client";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Headlogo from '../../../public/logo.png';


export default function RegisterForm() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (!username || !email || !password || !confirmPassword) {
      return Swal.fire("Error", "All fields are required", "error");
    }

    if (password !== confirmPassword) {
      return Swal.fire("Error", "Passwords do not match", "error");
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        Swal.fire("Success", "Registration successful", "success");
        router.push("/login");
        router.refresh();
      } else {
        const errorData = await response.json();
        Swal.fire("Error", errorData.message || "Registration failed", "error");
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
        <label htmlFor="username" className="px-1">Username</label>
        <input type="text" name="username" placeholder="Username" className="p-2 border border-gray-300 rounded" required />
        <label htmlFor="email" className="px-1">Email</label>
        <input type="email" name="email" placeholder="Email" className="p-2 border border-gray-300 rounded" required />
        <label htmlFor="password" className="px-1">Password</label>
        <input type="password" name="password" placeholder="Password" className="p-2 border border-gray-300 rounded" required />
        <label htmlFor="cpassword" className="px-1">Confirm Password</label>
        <input type="password" name="confirmPassword" placeholder="Confirm Password" className="p-2 border border-gray-300 rounded" required />
        <button type="submit" className="p-2 bg-green-500 text-white rounded hover:bg-green-600">
          Register
        </button>
      </form>
    </div>
  );
}
