import { useCallback, useEffect, useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let password = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) string += "0123456789";
    if (charAllowed) string += "~!#$%^&*{}[]=_-+;:?,/`.";

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * string.length);
      password += string.charAt(charIndex);
    }

    setPassword(password);
  }, [length, numberAllowed, charAllowed]);

  useEffect(()=>{
    generatePassword()
  },[length,numberAllowed,charAllowed,generatePassword])

  // useeffect ko use krte hai...ki wo password baar baar generate kre
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-xl px-4 my-8 text-orange-500 text-lg bg-gray-800">
        <h1 className="color-orange-700 px-4 italic text-3xl">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 px-6 py-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-6 rounded-lg"
            placeholder="Password"
            readOnly
          />
          <button
            className="outline-none bg-blue-700 text-white py-1 italic px-4 shrink-0 rounded-lg hover:bg-sky-600"
            onClick={() => navigator.clipboard.writeText(password)}
          >
            Copy
          </button>
        </div>
        <div className="flex flex-col text-sm gap-y-4">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label className="text-xl">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberinput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label className="text-md">Numbers: {numberAllowed ? "Yes" : "No"}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={charAllowed}
              id="characterinput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label className="text-md">Characters: {charAllowed ? "Yes" : "No"}</label>
          </div>
          <button
            onClick={generatePassword}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-500"
          >
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

