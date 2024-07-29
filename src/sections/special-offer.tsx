import Image from "next/image";
import { offer } from "../../public/images";
import Button from "@/components/button";
import { arrowRight } from "../../public/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <Image
          src={offer}
          alt="Special offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value thar sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fullfill your unique
          desires, surpassing loftiest expectations. Your journey with us
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-5">
          <Button iconURL={arrowRight}>Shop now</Button>
          <Button type="outline">Learn more</Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
