import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaUserFriends,
  FaWhatsapp,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";
import logo from "../../../assets/logo.png";
import Image from "next/image";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Logo */}
          <div>
            <Image src={logo} alt="Craft Institute Logo" className="w-28" />
          </div>

          {/* Contact Info */}
          <div className="flex-1 space-y-2 text-sm">
            <h1 className="flex text-2xl">
              আমাদের যোগাযোগ মাধ্যম
            </h1>
            <p className="flex items-center gap-2">
              <FaPhone /> 01310726000
            </p>
            <p className="flex items-center gap-2">
              <FaPhone /> 01700999093
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> craftinstitutebd@gmail.com
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h3>Connect With Us</h3>
            <div className="flex items-center gap-4 mt-2 text-lg">
              <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
              <FaUserFriends className="hover:text-gray-300 cursor-pointer" />
              <FaWhatsapp className="hover:text-gray-300 cursor-pointer" />
              <FaYoutube className="hover:text-gray-300 cursor-pointer" />
              <FaTelegramPlane className="hover:text-gray-300 cursor-pointer" />
            </div>
          </div>

          {/* Address */}
          <div className="text-sm leading-relaxed">
            <p>ঠিকানা: আদর্শ নগর আধারমানik সঞ্চল নূরবাগ</p>
            <p>আবাসিক এলাকা, ২ নম্বর রোড চিটাগাং রোড,</p>
            <p>সিদ্ধিরগঞ্জ, নারায়ণগঞ্জ।</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
