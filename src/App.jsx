import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [allowedNumber, setAllowedNumber] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [allowedChar, setAllowedChar] = useState(false);
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "";
    let upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    if (upperCase) str += upperCaseChar;
    if (lowerCase) str += lowerCaseChar;
    if (allowedNumber) str += "0123456789";
    if (allowedChar) str += "!@#$%^&*__+= [ ] { }~`";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length) + 1;
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, allowedChar, allowedNumber, upperCase, lowerCase, setPassword]);

  const passwordRef = useRef(null);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
setShowAlert(true);
setTimeout(() => {
  setShowAlert(false);
}, 3000);

  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, allowedChar, allowedNumber, upperCase, lowerCase]);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800">
      <h1 className="text-center text-white text-3xl py-2">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          // className="outline-none w-full py-1 px-3"
          className=" outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 py-1 px-3"
          readOnly
          value={password}
          placeholder="password"
          ref={passwordRef}
        />
        <button
          className="rounded-md bg-indigo-600 ml-2 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={copyPassword}
        >
          Copy
        </button>
      </div>
      <div className=" flex text-sm gap-x-2">
        <div>
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer"
            />
            <label className="text-white">Length {length}</label>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-x-1 ">
            <input
              type="checkbox"
              defaultChecked={allowedNumber}
              onChange={() => setAllowedNumber((prev) => !prev)}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <lable className="text-white">Number</lable>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={allowedChar}
              onChange={() => setAllowedChar((prev) => !prev)}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <lable className="text-white">Charector</lable>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-x-1">
            <input
              defaultChecked={upperCase}
              onChange={() => setUpperCase((prev) => !prev)}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              type="checkbox"
            />
            <lable className="text-white">UpperCase</lable>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              defaultChecked={lowerCase}
              onChange={() => setLowerCase((prev) => !prev)}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <lable className="text-white">LowerCase</lable>
          </div>
        </div>
      </div>
      {showAlert && (
        <div className="absolute top-0 right-0 mt-2 mr-2 p-3 bg-green-500 text-white rounded shadow-md">
          Password copied!
        </div>
      )}
    </div>
  );
}

export default App;
