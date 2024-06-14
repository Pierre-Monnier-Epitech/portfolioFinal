import { Metadata } from "next";
import Image from 'next/image';
import Apple from "@/assets/images/apple.png";


export const metadata: Metadata = {
  title: "MVBD - Accueil",
  description: "",
};

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#4B4B4B]">
      <div className="w-1/4 p-[10px]">
        <div className="bg-[#F0F0F0] h-full rounded-tr-[5rem] rounded-b-[5rem]">
          <div className="flex">
            <div className="top-0 left-0 w-[6rem] h-[6rem] bg-[#4B4B4B] rounded-br-[3rem] relative overflow-hidden items-center flex">
              <Image src={Apple} alt="Logo" objectFit="cover" />
            </div>
            <div className="bg-[#4B4B4B] w-[6rem] h-full">
              <div className="left-0 h-12 bg-[#F0F0F0] rounded-tl-[6rem]"></div>
            </div>
            <div className="">
            <h1 className="font-[Poetsen_One] text-black">Whereas </h1> 
            </div>
          </div>
          <div className="bg-[#4B4B4B] w-[6rem]">
            <div className="left-0 h-12 bg-[#F0F0F0] rounded-tl-[9rem]"></div>
          </div>
        </div>
      </div>




      <div className="w-2/3 p-[10px]">
        <div className="bg-green-500 p-4 h-full">Colonne 2</div>
      </div>
      <div className="w-1/5 p-[10px]">
        <div className="bg-blue-500 p-4 h-full">Colonne 3</div>
      </div>
    </main>
  );
}
