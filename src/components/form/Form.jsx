import { useState } from "react";
import { TextInput } from "./TextInput";
import downloadImage from "../../utils/DownloadImage";
import QRCode from "react-qr-code";
import "../../index.css";

export const Form = () => {
  const [qr, setQr] = useState(() => {
    return {
      url: "http://example.com",
      size: 256,
    };
  });
  const [apply, setApply] = useState(() => {
    return false;
  });

  return (
    <div className="container-xl h-[90vh] w-screen flex flex-wrap items-center justify-evenly p-7">
      <form className="bg-gray-200 dark:bg-[#141616] text-black dark:text-white p-4 m-4 rounded-md flex flex-col items-center justify-center w-full md:w-1/3">
        <TextInput
          label="url"
          type="text"
          placeholder="http://example.com"
          value="http://example.com"
          onChange={(e) => {
            setApply(false);
            setQr({ url: e.target.value });
          }}
        />
        <TextInput
          label="size"
          type="text"
          placeholder="256(recommended)"
          value={256}
          onChange={(e) => {
            setApply(false);
            setQr({ size: Number.parseInt(e.target.value) });
          }}
        />

        <div className="flex">
          <button
            onClick={(e) => {
              e.preventDefault();
              setApply(true);
            }}
            className="rounded-full px-6 m-4 py-1 font-bold text-xl bg-slate-300 ease-in duration-300 hover:bg-yellow-400 dark:bg-gray-800 dark:hover:bg-yellow-400 dark:hover:text-gray-800 "
          >
            Generate
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              downloadImage();
            }}
            className="rounded-full px-6 m-4 py-1 font-bold text-xl bg-slate-300 ease-in duration-300 hover:bg-yellow-400 dark:bg-gray-800 dark:hover:bg-yellow-400 dark:hover:text-gray-800"
          >
            Downlad
          </button>
        </div>
      </form>
      <div className="p-1 flex justify-center items-center">
        {apply ? (
          <QRCode
            id="QRCode"
            value={qr.url ? qr.url : "http://example.com"}
            size={qr.size ? qr.size : 256}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
