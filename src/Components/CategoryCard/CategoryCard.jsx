/** @format */

import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { MdEdit } from "react-icons/md";
import bgImage  from '../../../public/bgImage.png'
import { AiFillDelete } from "react-icons/ai";
import { FaBookOpenReader } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CategoryCard = () => {
  const [teas, setTeas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/teas")
      .then((res) => res.json())
      .then((data) => setTeas(data));
  }, []);
  return (
    <div style={{backgroundImage: `url(${bgImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} className="">
      <SectionTitle
        title={"Sip & Savor "}
        subTitle={"Our Popular Products"}></SectionTitle>

      <div className="max-w-screen-lg mx-auto">
        <Link to={'/addTea'}>
        <button className="btn btn-xl text-white hover:bg-[#4c2821] w-full bg-[#61332a]">Add Coffee</button>
        </Link>
        <div className="md:grid grid-cols-2 gap-5 my-5">
          {teas?.map((tea) => (
            <div key={tea._id}>
              <div className="flex gap-5 border-2 border-[#61332a] rounded-lg p-5 items-center">
                <div className="w-[40%]">
                  <img
                    className="w-full rounded-lg"
                    src={tea.photo}
                    alt=""
                  />
                </div>
                <div className="w-1/2">
                  <h3>
                    {" "}
                    <span className="font-semibold">Name : </span>
                    {tea.name}
                  </h3>
                  <h3>
                    {" "}
                    <span className="font-semibold">Chef : </span>
                    {tea.chef}
                  </h3>
                  <h3>
                    {" "}
                    <span className="font-semibold">Category : </span>
                    {tea.category}
                  </h3>
                  <h3>
                    {" "}
                    <span className="font-semibold">Price : $</span>
                    {tea.price || 36}
                  </h3>
                </div>
                <div className="join join-vertical space-y-4">
                  <button className="btn btn-sm bg-[#61332a] text-white"><MdEdit></MdEdit></button>
                  <button className="btn btn-sm bg-red-500 text-white"><AiFillDelete /></button>
                  <button className="btn btn-sm bg-[#61332a] text-white"><FaBookOpenReader></FaBookOpenReader></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
