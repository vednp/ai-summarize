import React from "react";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import {useDispatch} from "react-redux"
import { setPrompt } from "../app/promptSlice";
import { useState } from "react";
function Input() {
  const [input, setInput] = useState('')
    const dispatch = useDispatch()

  const iconStyle = {
    color: "rgb(203 213 225"
  };

  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(setPrompt(input))
    setInput("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <input
            className="bg-black border border-slate-400 w-4/5 h-14 rounded-3xl pl-6 text-white"
            onChange={(e)=>setInput(e.target.value)}
            type="text"
            placeholder="Enter a prompt here"
          />
          <span onClick={handleSubmit} className="cursor-pointer">
          <SendSharpIcon className="mt-4 ml-4" style={iconStyle} />
          </span>
        </div>
      </form>
    </div>
  );
}

export default Input;
