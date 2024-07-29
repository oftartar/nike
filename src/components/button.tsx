import Image from "next/image";

const button = ({
  children,
  iconURL,
}: {
  children: React.ReactNode;
  iconURL?: string;
}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border border-coral-red bg-coral-red rounded-full font-montserrat text-lg leading-none text-white">
      {children}
      {iconURL && (
        <Image src={iconURL} alt="Icon" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default button;
