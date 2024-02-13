/* eslint-disable react/display-name */
import CardService from "./CardService";
import { forwardRef } from 'react';

const Service = forwardRef((props, ref) => {
  return (
    <div ref= {ref} className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-2xl font-semibold leading-7 text-violet-600">
            Service
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Layanan kami yang akan menjadi solusi bagi masalah anda
          </p>
        </div>
        <div className=" grid md:grid-cols-4 sm:grid-cols-1 gap-4 mt-24 ">
          <CardService
            title="Mobile App"
            image="./assets/user-interface.png"
          />
          <CardService
            title="Website"
            image="./assets/web-interface.png"
          />
          <CardService
            title="Videography"
            image="./assets/videography.png"
          />
          <CardService
            title="UI/UX Designer"
            image="./assets/uiux.png"
          />
        </div>
      </div>
    </div>
  );
});
export default Service