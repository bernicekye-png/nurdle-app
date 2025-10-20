import React, { useState, useRef, useEffect } from "react";
import NavBar from "../components/NavBar";
import * as tf from "@tensorflow/tfjs";

export default function NurdleIdentifierPage() {
  const [imageURL, setImageURL] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [model, setModel] = useState(null);
  const imageRef = useRef();

  // Load your custom Teachable Machine model
  useEffect(() => {
    const loadModel = async () => {
      try {
        const tmModel = await tf.loadLayersModel("/model/model.json");
        setModel(tmModel);
        console.log("✅ Model loaded successfully");
      } catch (error) {
        console.error("❌ Error loading model:", error);
      }
    };
    loadModel();
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageURL(URL.createObjectURL(file));
      setPrediction("");
    }
  };

  const identifyImage = async () => {
    if (!model || !imageRef.current) return;

    // Match Teachable Machine preprocessing
    const img = tf.browser
      .fromPixels(imageRef.current)
      .resizeBilinear([224, 224])
      .toFloat()
      .div(127.5)
      .sub(1.0)
      .expandDims(0);

    const predictions = await model.predict(img).data();
    console.log("Predictions:", predictions); // Debugging

    // Match label order from metadata.json
    const labels = ["Nurdle", "No Nurdle"];

    const maxIndex = predictions.indexOf(Math.max(...predictions));
    const predictedLabel = labels[maxIndex];

    setPrediction(
      predictedLabel === "Nurdle"
        ? "✅ Nurdles detected!"
        : "❌ No nurdles detected."
    );

    tf.dispose(img);
  };

  return (
    <>
      <NavBar />
      <div
        style={{
          fontFamily: "'Nunito', sans-serif",
          padding: "20px",
          animation: "fadeIn 1.2s ease-in-out",
        }}
      >
        {/* Header image */}
        <img
          src="/identifier-header.png"
          alt="Nurdle Identifier"
          style={{
            width: "100%",
            maxHeight: "250px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "30px",
          }}
        />

        {/* Description paragraph */}
        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto 40px auto",
            textAlign: "center",
            fontSize: "18px",
            lineHeight: "1.6",
            color: "#333",
            opacity: 0,
            animation: "fadeInText 1.5s ease forwards",
            animationDelay: "0.3s",
          }}
        >
          <p>
            The <strong>Nurdle Identifier</strong> is an AI-powered web tool
            designed to help people identify and detect nurdles. Nurdles come in
            all shapes and sizes, and it’s sometimes hard to differentiate
            between objects and nurdles. Using a custom-trained{" "}
            <strong>Teachable Machine model</strong>, the tool allows anyone to
            upload an image and instantly determine whether nurdles are present.
            The purpose of this feature is to support citizen science and
            environmental monitoring by making nurdle identification accessible,
            fast, and accurate. The Identifier empowers users to document nurdle
            sightings, contribute to large-scale data collection, and raise
            awareness about the spread of microplastic pollution in waterways
            and coastal regions.
          </p>
        </div>

        {/* Image upload section */}
        <div style={{ textAlign: "center" }}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "16px",
              fontFamily: "'Nunito', sans-serif",
            }}
          />

          {imageURL && (
            <div style={{ marginTop: "20px" }}>
              <img
                src={imageURL}
                alt="Uploaded"
                ref={imageRef}
                crossOrigin="anonymous"
                style={{
                  maxWidth: "320px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              />
              <div>
                <button
                  onClick={identifyImage}
                  style={{
                    marginTop: "15px",
                    padding: "10px 18px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  Identify Nurdle
                </button>
              </div>
            </div>
          )}

          {prediction && (
            <div
              style={{
                marginTop: "25px",
                textAlign: "center",
                fontSize: "18px",
                fontWeight: "bold",
                color: prediction.includes("✅") ? "green" : "rgb(200, 0, 0)",
              }}
            >
              {prediction}
            </div>
          )}
        </div>

        {/* Keyframe animations */}
        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }

            @keyframes fadeInText {
              from { opacity: 0; transform: translateY(15px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
      </div>
    </>
  );
}
