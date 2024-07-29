import Image from "next/image";

const button = ({
  children,
  iconURL,
  type,
}: {
  children: React.ReactNode;
  iconURL?: string;
  type?: "outline";
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border rounded-full font-montserrat text-lg leading-none ${
        type === "outline"
          ? "bg-white border-slate-gray text-slate-gray"
          : "bg-coral-red border-coral-red text-white"
      }`}
    >
      {children}
      {iconURL && (
        <Image src={iconURL} alt="Icon" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default button;
