// app/layout.jsx
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Vista Roaster & Restobar",
  description: "Artisan Coffee & Community Gathering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0f0a05] text-amber-100">
        <Navbar />
        <div className="relative min-h-screen overflow-hidden">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
