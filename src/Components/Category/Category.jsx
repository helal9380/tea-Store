/** @format */

import image1 from "../../../public/image1.png";
import image2 from "../../../public/image2.png";
import image3 from "../../../public/image3.png";
import image4 from "../../../public/image4.png";
const Category = () => {
  return (
    <div className="bg-[#ECEAE3]">
      <div className="max-w-screen-lg mx-auto flex gap-3">
        <div className="space-y-2 border p-5 rounded">
          <img
            src={image1}
            alt=""
          />
          <h2 className="font-semibold text-lg">Awesome Aroma</h2>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="space-y-2 border p-5 rounded">
          <img
            src={image2}
            alt=""
          />
          <h2 className="font-semibold text-lg">Awesome Aroma</h2>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="space-y-2 border p-5 rounded">
          <img
            src={image3}
            alt=""
          />
          <h2 className="font-semibold text-lg">Awesome Aroma</h2>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="space-y-2 border p-5 rounded">
          <img
            src={image4}
            alt=""
          />
          <h2 className="font-semibold text-lg">Awesome Aroma</h2>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
