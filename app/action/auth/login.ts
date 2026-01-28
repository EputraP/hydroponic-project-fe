"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const cookieStore = await cookies();

    console.log({ email, password });
    if(email === "admin@iothydroponiclab.com" && password === "admin@@123"){
        cookieStore.set("refresh-token", "refresh-token-123", { httpOnly: true,secure: true, path: "/" });  
        cookieStore.set("auth-token", "auth-token-123", { httpOnly: true,secure: true, path: "/" });
        redirect("/");
    }

//     // Call internal backend (hidden from browser)
//   const res = await fetch("http://localhost/backend/login", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email, password }),
//   });

//   if (!res.ok) {
//     throw new Error("Invalid credentials");
//   }

//   const { token } = await res.json();



//   redirect("/dashboard");
    
}