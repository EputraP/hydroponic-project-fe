"use client";

import Link from "next/link";
import { loginAction } from "@/app/action";

export default function LoginPage() {

  return (
    <div className="container">
      <form action={loginAction} className="form">
        <h2>Login</h2>

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="input"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="input"
        />

        <button type="submit" className="button">
          Login
        </button>

        <p>
          Don’t have an account? <Link href="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}


