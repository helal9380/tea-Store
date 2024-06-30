/** @format */
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaYoutube,
} from "react-icons/fa6";
import logo from "../../../public/logo1 1.png";
import { FaAddressCard, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-[#4c2821] text-white p-10">
      <aside>
        <img
          src={logo}
          alt=""
        />
        <h2 className="text-4xl font-semibold">Tea Store</h2>
        <p>
          Always ready to be your friend. Come & Contact <br /> with us to share
          your memorable moments, to share with your best companion.
        </p>
        <div className="flex gap-5 text-lg mt-5">
          <FaGoogle></FaGoogle>
          <FaFacebook></FaFacebook>
          <FaInstagram></FaInstagram>
          <FaYoutube></FaYoutube>
        </div>
        <div className="space-y-2 mt-5">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <div className="flex gap-2">
            <FaPhone></FaPhone>
            <h4>
              <span className="font-semibold">Phone : </span>01875639815
            </h4>
          </div>
          <div className="flex gap-2">
            <FaMailBulk></FaMailBulk>
            <h4>
              <span className="font-semibold">Email : </span>
              asadurrahman9380@gmail.com
            </h4>
          </div>
          <div className="flex gap-2">
            <FaAddressCard></FaAddressCard>
            <h4>
              <span className="font-semibold">Address : </span>Chattagram,
              Bangladesh
            </h4>
          </div>
        </div>
      </aside>

      <div className="mt-5">
        <h6 className="footer-title">Connect with Us</h6>
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Name.."
            className="bg-transparent border-white input input-bordered w-full"
          />
          <input
            type="email"
            placeholder="Email.."
            className="bg-transparent border-white input input-bordered w-full"
          />
          <textarea
            placeholder="Massege"
            className="bg-transparent border-white textarea textarea-bordered textarea-lg w-full"></textarea>
            <input className="btn btn-sm bg-[#9f9f9f] mt-5 w-full" type="submit" value="Massege" />
        </form>
      </div>
    </footer>
  );
};

export default Footer;
