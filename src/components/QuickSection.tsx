import { ChangeEvent, useState } from "react";
import QRCode from "react-qr-code";

export default function QuickSection() {
  const [link, setLink] = useState('saf');

  function handleQrcode(e: React.FormEvent<HTMLInputElement> ){
    setLink(e.currentTarget.value);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="p-2 border bg-white">
        <QRCode value={link} />
      </div>
      <input
        className="rounded mt-3 text-black w-[270px]"
        placeholder="Link, Text, Etc.."
        value={link}
        onChange={ (e) => handleQrcode(e)}
      />
    </div>
  );
}
