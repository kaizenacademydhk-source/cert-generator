import { useState } from "react";
import html2canvas from "html2canvas";
import logo from "./assets/image.png";
import sigp from "./assets/principal.jpeg";
import sigs from "./assets/secretary.jpeg";
import * as htmlToImage from "html-to-image";

function App() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("1st");
  const [reason, setReason] = useState(" ");
  const [month, setMonth] = useState(" ");

  const downloadCertificate = async () => {
    const certificate = document.getElementById("certificate");

    const dataUrl = await htmlToImage.toJpeg(certificate, {
      quality: 1,
      backgroundColor: "#ffffff",
    });

    const link = document.createElement("a");
    link.download = `${name}-certificate.jpg`;
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen p-4 md:p-6 bg-gray-100">
      <h1 className="text-xl md:text-2xl font-bold mb-6 text-center">
        Kaizen Academy Certificate Generator
      </h1>

      {/* Inputs */}
      <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-6 w-full max-w-xl">
        <input
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <select
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="border p-2 rounded w-full md:w-auto"
        >
          <option value="1st">1st</option>
          <option value="2nd">2nd</option>
          <option value="3rd">3rd</option>
        </select>

        <select
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="border p-2 rounded w-full md:w-auto"
        >
          <option value="">Choose reason</option>
          <option value="in best handwriting for the month of ">
            in best handwriting for the month of
          </option>
          <option value="in discipline student for the month of ">
            in discipline student for the month of
          </option>
          <option value="in neat and organized student for the month of ">
            in neat and organized student for the month of
          </option>
          <option value="in silent achiever student for the month of ">
            in silent achiever student for the month of
          </option>
        </select>

        <input
          type="text"
          placeholder="Enter month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="border p-2 rounded w-full md:w-auto"
        />
      </div>

      {/* Certificate */}
      <div
        id="certificate"
        className="w-full max-w-[1000px] aspect-[10/7] bg-white relative shadow-2xl flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #fff7ed, #ffffff)",
        }}
      >
        {/* Outer Border */}
        <div className="border-[8px] md:border-[12px] border-yellow-700 w-full h-full p-2 md:p-3">
          {/* Inner Border */}
          <div className="border-2 md:border-4 border-yellow-400 w-full h-full flex flex-col items-center justify-between p-4 md:p-10 relative">
            {/* Watermark */}
            <img
              src={logo}
              className="absolute opacity-10 w-[200px] md:w-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              alt=""
            />

            {/* Top Logo */}
            <img src={logo} className="w-12 md:w-20 absolute top-4 md:top-6 left-4 md:left-6" />

            {/* Title */}
            <div className="text-center mt-6">
              <h2
                className="text-3xl md:text-5xl font-bold tracking-[2px] md:tracking-[6px]"
                style={{ fontFamily: "serif", color: "#92400e" }}
              >
                KAIZEN ACADEMY
              </h2>
              <div className="w-24 md:w-40 bg-yellow-600 mx-auto my-2 md:my-4"></div>

              <h3
                className="text-lg md:text-2xl font-semibold tracking-[1px] md:tracking-[3px]"
                style={{ color: "#92400e" }}
              >
                CERTIFICATE OF APPRECIATION
              </h3>
            </div>

            {/* Body */}
            <div className="text-center text-sm md:text-lg leading-relaxed md:leading-loose px-4 md:px-16">
              <p>This certificate is proudly presented to</p>

              <h3 className="text-2xl md:text-4xl font-semibold my-4">
                {name || "Student Name"}
                <div className="w-auto h-0.5 bg-yellow-600 mx-auto "></div>
              </h3>

              <p>
                for achieving <span className="font-bold">{position}</span>{" "}
                position
              </p>

              <p className="italic mt-2 text-gray-600">
                {reason} {month} 2026
              </p>
            </div>

            {/* Signatures */}
            <div className="flex flex-col md:flex-row justify-around w-full px-4 md:px-10 mt-6 md:mt-10 gap-6 md:gap-0">
              {/* Secretary */}
              <div className="flex flex-col items-center mt-4 md:mt-0">
                <img src={sigs} className="w-24 md:w-32 mb-2" />
                <div className="border-t w-32 md:w-40"></div>
                <p className="mt-2 text-sm md:text-base font-medium">
                  Secretary, Kaizen Academy
                </p>
              </div>

              {/* Principal */}
              <div className="flex flex-col items-center">
                <img src={sigp} className="w-24 md:w-32 mb-2" />
                <div className="border-t w-32 md:w-40"></div>
                <p className="mt-2 text-sm md:text-base font-medium">
                  Principal Kaizen Academy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={downloadCertificate}
        className="mt-6 bg-blue-600 text-white px-4 md:px-6 py-2 rounded hover:opacity-90"
      >
        Download as JPG
      </button>
    </div>
  );
}

export default App;
