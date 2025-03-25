import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(5);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += ")(*&^%$#@!~{}][?/><_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  const passwordRef = useRef(0);

  const copyPasswordToClipboard = () => {
    // will show password selected
    passwordRef.current?.select();
    // if want to ro give range how many elements should be select
    passwordRef.current?.setSelectionRange(0, 100);
    // used to copy password to the clipboard
    window.navigator.clipboard.writeText(password);
  };

  return (
    <>
      <div className="w-full h-screen bg-black pt-5">
        <div className="flex flex-wrap flex-col items-center gap-5 max-w-lg p-5 bg-gray-800  text-white mx-auto">
          <h1 className="text-2xl font-bold mb-2">Password Generator</h1>
          <div className="flex  justify-center w-full">
            <input
              className="outline-none flex w-[87%] bg-white rounded-l-2xl text-black font-bold p-2"
              type="text"
              placeholder="copy password"
              readOnly
              value={password}
              ref={passwordRef}
            />
            <button
              className="outline-none cursor-pointer rounded-r-2xl font-bold bg-blue-700 p-2"
              onClick={copyPasswordToClipboard}
            >
              Copy
            </button>
          </div>

          <div className="flex justify-between gap-5 flex-wrap w-full font-bold">
            <div className="flex flex-wrap items-center gap-2">
              <input
                type="range"
                min={0}
                max={100}
                value={length}
                className="cursor-pointer "
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length:{length}</label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="numbers"
                defaultChecked={numberAllowed}
                onClick={() => setNumberAllowed((prev) => !prev)}
              />
              <label htmlFor="numbers">Numbers</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="charactor"
                defaultChecked={charAllowed}
                onClick={() => setCharAllowed((prev) => !prev)}
              />
              <label htmlFor="charactor">charactors</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
