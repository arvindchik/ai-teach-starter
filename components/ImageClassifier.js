// components/ImageClassifier.js
import React, { useState, useEffect } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs";

export default function ImageClassifier() {
  const [model, setModel] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await mobilenet.load();
      setModel(loadedModel);
    };
    loadModel();
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageURL(url);
      setPredictions([]);
    }
  };

  const classifyImage = async () => {
    if (model && imageURL) {
      const imgElement = document.getElementById("uploaded-image");
      const results = await model.classify(imgElement);
      setPredictions(results);
    }
  };

  return (
    <div className="space-y-4">
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {imageURL && (
        <>
          <img
            id="uploaded-image"
            src={imageURL}
            alt="Upload Preview"
            className="max-w-xs rounded shadow"
          />
          <button
            onClick={classifyImage}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Predict
          </button>
        </>
      )}
      {predictions.length > 0 && (
        <ul>
          {predictions.map((p, i) => (
            <li key={i}>
              {p.className} — {(p.probability * 100).toFixed(2)}%
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
