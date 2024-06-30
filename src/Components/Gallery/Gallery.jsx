/** @format */

import SectionTitle from "../SectionTitle/SectionTitle";

const Gallery = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-8">
      <SectionTitle
        title={"Follow Us Now"}
        subTitle={"Follow on Instagram"}
      ></SectionTitle>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="w-full h-[200px] overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="https://i.ibb.co/GnrWgLC/jessica-lewis-thepaintedsquare-k-T9-E4-Gb-UQc-unsplash.jpg"
            alt=""
          />
        </div>

        <div className="w-full h-[200px] overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="https://i.ibb.co/3WdvGvY/fahmi-fakhrudin-nzyz-AUsb-V0-M-unsplash.jpg"
            alt=""
          />
        </div>

        <div className="w-full h-[200px] overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="https://i.ibb.co/vqrWzvg/nathan-dumlao-pnm-Rt-THWq-DM-unsplash.jpg"
            alt=""
          />
        </div>

        <div className="w-full h-[200px] overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="https://i.ibb.co/qkszWSh/jessica-lewis-thepaintedsquare-Am2kj-OEKADs-unsplash.jpg"
            alt=""
          />
        </div>

        <div className="w-full h-[200px] overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="https://i.ibb.co/CMCGdTk/rene-porter-efs8-MIJr-h-Q-unsplash.jpg"
            alt=""
          />
        </div>

        <div className="w-full h-[200px] overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="https://i.ibb.co/NZ1K5Nk/mike-kenneally-t-NALo-IZhq-VM-unsplash-1.jpg"
            alt=""
          />
        </div>

        <div className="w-full h-[200px] overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="https://i.ibb.co/GsY7jwb/mario-la-pergola-Uw-W-x-AVIy-GM-unsplash.jpg"
            alt=""
          />
        </div>

        <div className="w-full h-[200px] overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="https://i.ibb.co/D48FmqC/mike-kenneally-TD4-DBagg2w-E-unsplash.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
