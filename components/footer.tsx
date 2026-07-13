import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-[#2D2B2A] text-white">
      <div className="container-custom py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Logo */}
          <div>
            <h2 className="font-serif text-4xl text-[#B8794B]">Novem</h2>

            <p className="mt-4 text-gray-400 leading-7">
              Premium industrial freeze-drying and food manufacturing solutions
              from sourcing to distribution.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-5 font-semibold uppercase tracking-wider">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link href="#">Home</Link>
              <Link href="#applications">Applications</Link>
              <Link href="#capabilities">Capabilities</Link>
              <Link href="#services">Services</Link>
              <Link href="#why">Why Novem</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 font-semibold uppercase tracking-wider">
              Contact
            </h3>

            <p className="text-gray-400">info@novem.com</p>

            <p className="mt-2 text-gray-400">+1 (555) 123-4567</p>

            <div className="mt-6 flex gap-4">
              <FaFacebookF className="h-5 w-5 cursor-pointer hover:text-[#B8794B]" />
              <FaInstagram className="h-5 w-5 cursor-pointer hover:text-[#B8794B]" />
              <FaLinkedinIn className="h-5 w-5 cursor-pointer hover:text-[#B8794B]" />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Novem. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
