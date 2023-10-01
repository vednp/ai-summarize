import React, { useState, useEffect,useCallback, useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Display() {
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState("");
  const prompt = useSelector((state) => state.prompt);
  const summaryRef = useRef(null);
  const copytoclipboard = useCallback(()=>{
    summaryRef.current?.select()
    window.navigator.clipboard.writeText(summary)
  })
  useEffect(() => {
    setLoading(true);
    const options = {
      method: 'GET',
      url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
      params: {
        url: prompt,
        length: '3'
      },
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
      }
    };

    axios.request(options)
      .then(response => {
        console.log(response.data.summary);
        setSummary(response.data.summary); // assuming response.data contains the summary
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [prompt]); // this ensures the API is called once every time the prompt changes

  return (
    
    <div className="h-[80vh] p-9 text-white overflow-auto" >
    <button className="cursor-pointer" onClick={copytoclipboard}></button>
    {loading ? (
      <span>Loading...</span>
    )
    : (
      <span ref={summaryRef}>{summary}</span>
    )
    }

    </div>
  );
}

export default Display;
