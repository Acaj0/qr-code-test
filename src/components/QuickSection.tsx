"use client";
import { ChangeEvent, useState } from "react";
import QRCode from "react-qr-code";
import Image from "next/image";

export default function QuickSection() {
  const [link, setLink] = useState("");

  function handleQrcode(e:any) {
    setLink(e.target.value);
  }

  return (
    <div className="flex flex-col justify-center items-center text-white">
      <div className="w-[270px]">
        <h1 className="text-3xl text-center">QUICK GENERATE</h1>
        <h1 className="text-center text-sm">
          Here you can generate the quick way, you can download it but cant save
          it.
        </h1>
      </div>
      <a>
        <Image src={"/angle-down-solid.svg"} alt="arrow down" width={40} height={40}/>
      </a>
      <div className="p-2 border bg-white mt-1">
        <QRCode value={link} />
      </div>
      <input
        className="rounded mt-3 text-black w-[270px]"
        placeholder="Link, Text, Etc.."
        value={link}
        onChange={(e) => handleQrcode(e)}
      />
    </div>
  );
}
