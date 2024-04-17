"use client";
import React, { ChangeEvent, useState } from "react";
import QRCode from "react-qr-code";
import QRCodeLink from "qrcode";
import Image from "next/image";

export default function QuickSection() {
  const [link, setLink] = useState("");
  const [qrcodeLink, setQrcodeLink] = useState("");
  const [links, setLinks] = useState<any[]>([]);

  const saveQr = (e: any) => {
    if (link) {
      const newLink = { id: new Date().getTime().toString(), title: link };
      setLinks([...links, newLink]);
      localStorage.setItem("localLinks", JSON.stringify([...links, newLink]));
    }
  };

  const handleDelete= (link:any)=>{
    const deleted = links.filter((t)=>t.id !== link.id)
    setLinks(deleted)
    localStorage.setItem("localLinks", JSON.stringify(deleted))
  }

  function handleGenerate(link_url: any) {
    QRCodeLink.toDataURL(
      link_url,
      {
        width: 600,
        margin: 3,
      },
      function (err, url) {
        setQrcodeLink(url);
      }
    );
  }

  function handleQrcode(e: any) {
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }

  return (
    <div className="grid grid-cols-2 gap-28">
      <div className="flex flex-col justify-center items-center text-white">
        <div className="w-[270px]">
          <h1 className="text-3xl text-center">QUICK GENERATE</h1>
          <h1 className="text-center text-sm">
            Here you can generate the quick way, you can download it but cant
            save it.
          </h1>
        </div>
        <a>
          <Image
            src={"/angle-down-solid.svg"}
            alt="arrow down"
            width={40}
            height={40}
          />
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
        <div className="p-4">
          <a
            href={qrcodeLink}
            download={"qrcode.png"}
            className="mt-4 underline bg-indigo-700/70 p-2 rounded-lg"
          >
            {" "}
            DOWNLOAD{" "}
          </a>
          <button
            onClick={saveQr}
            className="mt-4 underline bg-red-500/70 p-2 rounded-lg"
          >
            SAVE
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="w-[270px]">
          <h1 className="text-3xl text-center">Save Section</h1>
          <h1 className="text-center text-sm">
            Here you can save the actual link and qr-code to use it latter.
          </h1>
        </div>
        <div>
          {links.map((links) => (
            <React.Fragment key={links.id}>
              <div className="col-11">
                <span
                  className=" form-control bg-white btn mt-2 text-black rounded-sm"
                  style={{ textAlign: "left", fontWeight: "bold" }}
                >
                  {links.title}
                </span>
                <QRCode value={links.title} size={50}/>
              </div>
              <div className="col-1">
                <button className="mt-2 btn btn-warning "
                onClick={()=> handleDelete(links)}>DELETE</button>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
