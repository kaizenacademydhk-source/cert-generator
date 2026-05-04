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

  const downloadCertificate = async () => {
    const certificate = document.getElementById("certificate");

    const dataUrl = await htmlToImage.toJpeg(certificate, {
      quality: 1,
      backgroundColor: "#ffffff",
    });

    const link = document.createElement("a");
    link.download = "certificate.jpg";
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">
        Kaizen Academy Certificate Generator
      </h1>

      {/* Inputs */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />
        <select
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="1st">1st</option>
          <option value="2nd">2nd</option>
          <option value="3rd">3rd</option>
        </select>

        <select 
        value={reason} 
        onChange={(e) => setReason(e.target.value)}
        className="border p-2 rounded"
        >
          <option value="in best handwriting for the month of April 2026">in best handwriting for the month of april 2026</option>
          <option value="in discipline student for the month of April 2026">in discipline student for the month of april 2026</option>
          <option value="in neat and organized student for the month of April 2026">in neat and organized student for the month of april 2026</option>
          <option value="in silent achiever student for the month of April 2026">in silent achiever student for the month of april 2026</option>
        </select>
      </div>

      {/* Certificate */}
      <div
        id="certificate"
        className="w-[1000px] h-[700px] bg-white relative shadow-2xl flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #fff7ed, #ffffff)",
        }}
      >
        {/* Outer Border */}
        <div className="border-[12px] border-yellow-700 w-full h-full p-3">
          {/* Inner Border */}
          <div className="border-4 border-yellow-400 w-full h-full flex flex-col items-center justify-between p-10 relative">
            {/* Watermark */}
            <img
              src={logo}
              className="absolute opacity-10 w-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              alt=""
            />

            {/* Top Logo */}
            <img src={logo} className="w-20 absolute top-6 left-6" />

            {/* Title */}
            <div className="text-center mt-6">
              <h2
                className="text-5xl font-bold tracking-[6px]"
                style={{ fontFamily: "serif", color: "#92400e" }}
              >
                KAIZEN ACADEMY
              </h2>
              <div className="w-40  bg-yellow-600 mx-auto my-4"></div>

              <h3
                className="text-2xl font-semibold tracking-[3px]"
                style={{ color: "#92400e" }}
              >
                CERTIFICATE OF APPRECIATION
              </h3>
            </div>

            {/* Body */}
            <div className="text-center text-lg leading-loose px-16">
              <p>This certificate is proudly presented to</p>

              <h3 className="text-4xl font-semibold my-4">
                {name || "Student Name"}
                <div className="w-auto h-0.5 bg-yellow-600 mx-auto "></div>
              </h3>
              

              <p>
                for achieving <span className="font-bold">{position}</span>{" "}
                position
              </p>

              <p className="italic mt-2 text-gray-600">
                {reason}
              </p>
            </div>

            {/* Signatures */}
            <div className="flex justify-around w-full px-10 mt-10">
              {/* Secretary */}
              <div className="flex flex-col items-center mt-4">
                <img src={sigs} className="w-32 mb-2" />
                <div className="border-t w-40"></div>
                <p className="mt-2 font-medium">Secretary, Kaizen Academy</p>
              </div>

              {/* Principal */}
              <div className="flex flex-col items-center">
                <img src={sigp} className="w-32 mb-2" />
                <div className="border-t w-40"></div>
                <p className="mt-2 font-medium">Principal Kaizen Academy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={downloadCertificate}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:opacity-90"
      >
        Download as JPG
      </button>
    </div>
  );
}

export default App;
