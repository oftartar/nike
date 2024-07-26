"use client";

import ShoeCard from "@/components/shoe-card";
import { shoes } from "@/constants";
import Image from "next/image";
import { bigShoe1 } from "../../public/images";
import { useState } from "react";

const ShoeCourasel = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);

  return (
    <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
      <Image
        src={bigShoeImage}
        alt="shoe collection"
        width={610}
        height={500}
        className="object-contain relative z-10"
      />
      <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
        {shoes.map((shoe, index) => (
          <div key={index}>
            <ShoeCard
              imgURL={shoe}
              changeBigShoeImage={(shoe) => setBigShoeImage(shoe)}
              bigShoeImage={bigShoeImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoeCourasel;
