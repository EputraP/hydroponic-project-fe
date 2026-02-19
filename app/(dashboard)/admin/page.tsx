import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Page",
};

export default function AdminPage() {
    return (
        <div className="flex min-h-screen items-center justify-centerfont-sans">
            Admin Page
        </div>
    );

}