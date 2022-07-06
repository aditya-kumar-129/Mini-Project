import "./ocr.css";
import { useEffect } from "react";
import { useState } from "react";
import Tesseract from "tesseract.js";
import axios from 'axios';

function App() {
  const [file, setFile] = useState();
  const [progress, setProgress] = useState(0);
  const [language, setLanguage] = useState("eng");
  const [result, setResult] = useState([]);
  const [meds, setMeds] = useState([]);
  const [searchTerm,setSearchTerm] = useState("");

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
      },    }).then(({ data: { text } }) => {
      // setResult(text);
      setResult(text);
      //console.log(result);
      // const splitarr=result.split(" ");
      // console.log(splitarr);
    });
  };

  useEffect(()=>{
    const getMeds = async () => {
      try{
        const res = await axios.get('/medData');
        setMeds(res.data);
        console.log(meds);
      }catch(err){
        console.log('err');
      }
    };
    getMeds();
  }, []);


  return (

    
    <>
    <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"/>
      <link href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" rel="icons" />
    </head>
    <div className="App">
      <form className="row domain-search bg-pblue" />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <h2 className="form-title">Sportify</h2>
            <p>Search products</p>
          </div>
          <div className="col-md-9">
            <div className="input-group"> <input type="text" placeholder='Search medicines or substances!' className="form-control" value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value);}}/> <span className="input-group-addon"><input type="submit" value="Search" className="btn btn-primary" /></span> </div>
            {meds.filter((val)=>{
              if(searchTerm==="")
                  return "";
              if(val.name.toLowerCase().includes(searchTerm.toLowerCase()))
              {
                return val;
              }
              }).map((val,key)=>{
            return (
              <div className="searchRes" key={key}>
                <p>{val.type}</p>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    
     <input type="file" onChange={onFileChange} /><select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="eng">English</option>
        <option value="tel">Telugu</option>
        <option value="hin">Hindi</option>
        <option value="kan">Kannada</option>
      </select><div style={{ marginTop: 25 }}>
        <input type="submit" value="Submit" onClick={processImage} />
      </div>
      <div>
        <progress value={progress} max={1} />
      </div>
      {result !== "" && (
        <div style={{ marginTop: 30, fontSize:20 }}>
          Result: {result}
        </div>
      )}
    </div>

    </>
  );
}

export default App;
