// import "./ocr.css";
import { useEffect } from "react";
import { useState } from "react";
import Tesseract from "tesseract.js";
import axios from "axios";
import styles from "./ocr.module.css";

function App() {
  const [file, setFile] = useState();
  const [progress, setProgress] = useState(0);
  const [language, setLanguage] = useState("eng");
  const [result, setResult] = useState([]);
  const [meds, setMeds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const processImage = () => {
    setResult([" "]);
    setProgress(0);
    Tesseract.recognize(file, language, {
      logger: (m) => {
        if (m.status === "recognizing text") {
          setProgress(m.progress);
        }
      },
    }).then(({ data: { text } }) => {
      setResult(text);
    });
  };

  useEffect(() => {
    const getMeds = async () => {
      try {
        const res = await axios.get("/medData");
        setMeds(res.data);
      } catch (err) {
        console.log("err");
      }
    };
    getMeds();
  }, [meds]);

  return (
    <>
      <div className={styles.App}>
        <form className="row domain-search bg-pblue" />
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-3">
              <p className={styles.textSearch}>Search By Medicine Name OR Product Name</p>
            </div>
            <div className="col-md-9">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search medicines or products!"
                  className={styles.searchInput}
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                />
                <button className={styles.btn}>Search</button>
              </div>
              {meds
                .filter((val) => {
                  if (searchTerm === "") return "";
                  if (val.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    return val;
                })
                .map((val, key) => {
                  return (
                    <div className="searchRes" key={key}>
                      <p>{val.type}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        <h3 className={styles.title}>Have images?? No Worries</h3>
        <p className={styles.text}>Please enter your scanned image</p>
        <input type="file" onChange={onFileChange} />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className={styles.select}
        >
          <option value="eng">English</option>
          <option value="tel">Telugu</option>
          <option value="tamil">Tamil</option>
          <option value="malyalam">Malyalam</option>
          <option value="hin">Hindi</option>
          <option value="kan">Kannada</option>
        </select>
        <div style={{ marginTop: 25 }}>
          <input
            type="submit"
            value="Submit"
            onClick={processImage}
            className={styles.btn1}
          />
        </div>
        <div>
          <progress value={progress} max={1} />
        </div>
        {result !== "" && (
          <div style={{ marginTop: 30, fontSize: 20 }}>Result: {result}</div>
        )}
      </div>
    </>
  );
}

export default App;
