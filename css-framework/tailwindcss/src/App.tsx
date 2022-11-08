import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { Select } from "antd";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="App">
      <Select className="w-40 bg-slate-500">
        <Select.Option>1</Select.Option>
        <Select.Option>2</Select.Option>
        <Select.Option>3</Select.Option>
        <Select.Option>4</Select.Option>
      </Select>

      <div className="mx-auto flex max-w-sm items-center space-x-4 rounded-xl bg-white p-6 shadow-lg">
        <div className="shrink-0">
          <img className="h-12 w-12" src={logo} alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
      <br />
      <div className="rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800">
        <div>
          <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
            <svg
              className="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            />
          </span>
        </div>
        <h3 className="mt-5 text-base font-medium tracking-tight text-slate-900 dark:text-white">
          Writes Upside-Down
        </h3>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>
      <button className="btn-primary">Save changes</button>
    </div>
  );
}

export default App;
