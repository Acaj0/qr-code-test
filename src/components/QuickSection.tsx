"use client";
import React, { ChangeEvent, useState } from "react";
import QRCode from "react-qr-code";
import QRCodeLink from "qrcode";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ScrollArea } from "@/components/ui/scroll-area";

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

  const handleDelete = (link: any) => {
    const deleted = links.filter((t) => t.id !== link.id);
    setLinks(deleted);
    localStorage.setItem("localLinks", JSON.stringify(deleted));
  };

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
    <div className="flex flex-col md:flex-row gap-28 p-3">
      <div className="flex flex-col justify-center items-center text-white ">
        <div className="w-[270px]">
          <h1 className="text-3xl text-center">QUICK GENERATE</h1>
          <h1 className="text-center text-sm">
            Here you can generate the quick way, you can download and save it.
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
        <div className="p-4 text-black">
          <a
            href={qrcodeLink}
            download={"qrcode.png"}
            className="mt-4 bg-[#FEC85D] p-2 rounded-lg"
          >
            DOWNLOAD
          </a>
          <a
            onClick={saveQr}
            className="ml-1 mt-4 bg-white p-2 rounded-lg"
          >
            SAVE
          </a>
        </div>
      </div>
      <div className="flex justify-top flex-col items-center">
        <div className="flex flex-col w-[270px] items-center justify-center">
          <h1 className="text-3xl text-center">SAVE SECTION</h1>
          <h1 className="text-center text-sm">
            Here you have all your current saved codes.
          </h1>
          <a>
            <Image
              src={"/angle-down-solid.svg"}
              alt="arrow down"
              width={40}
              height={40}
            />
          </a>
        </div>
        <div className="h-full mt-2 max-h-screen overflow-y-auto flex flex-col flex-grow items-center">
          <div className="overflow-y-auto max-h-screen items-center">
            <ScrollArea className="h-[330px] w-[300px] rounded-md border p-4">
              {links.map((links) => (
                <React.Fragment key={links.id}>
                  <div className="mt-1 text-black w-[266px] gap-2">
                    <Accordion
                      className="flex flex-row bg-white rounded-lg items-center justify-center p-4 min-w-fit"
                      type="single"
                      collapsible
                    >
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="rounded-sm px-1">
                          {links.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col items-center justify-center mt-2">
                            <QRCode value={links.title} size={100} />
                            <button
                              className="mt-2 bg-[#780000] rounded-md px-6 text-white"
                              onClick={() => handleDelete(links)}
                            >
                              DELETE
                            </button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </React.Fragment>
              ))}
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
}
