import React from "react";
import image from "./logo1.jpeg";

const App = () => {
  return (
    <div>
      <header className="h-28 border border-sky-500">
        <div className="flex justify-between items-center py-2 mx-2">
          <div className="flex items-center">
            <img className="w-12 " src={image} alt="logo" />
            <span className="text-xl font-bold">Sound Mate</span>
          </div>
          <nav className="bg-gradient-to-l hover:bg-gradient-to-r">
            <span className="text-2xl pr-2 hover:cursor-pointer">Home</span>
            <span className="text-2xl pr-2 hover:cursor-pointer">Features</span>
            <span className="text-2xl pr-2 hover:cursor-pointer">Download</span>
          </nav>
        </div>
      </header>
      <main>
        <section className="text-center my-2">
          <h1 className="font-bold text-3xl">MY Name is Raisul Islam Rony</h1>
          <p className="font-xl m-2">
            Student of Bangladesh Army University Of Engineering And technology
          </p>
          <button className="text-lg border p-3 rounded bg-orange-700">
            Know More
          </button>
        </section>
        <section>
          <div className="flex justify-center flex-wrap ">
            <div className="max-w-sm border rounded p-3 shadow-lg m-2">
              <img src={image} alt="logo" />
              <h1 className="text-center font-bold bg-transparent p-1">
                DM 10
              </h1>
              <p className="font-sans from-neutral-200"> Nice product</p>
            </div>
            <div className="max-w-sm border rounded p-3 shadow-lg m-2">
              <img src={image} alt="logo" />
              <h1 className="text-center font-bold bg-transparent p-1">
                DM 10
              </h1>
              <p className="font-sans from-neutral-200"> Nice product</p>
            </div>
            <div className="max-w-sm border rounded p-3 shadow-lg m-2">
              <img src={image} alt="logo" />
              <h1 className="text-center font-bold bg-transparent p-1">
                DM 10
              </h1>
              <p className="font-sans from-neutral-200"> Nice product</p>
            </div>
            <div className="max-w-sm border rounded p-3 shadow-lg m-2">
              <img src={image} alt="logo" />
              <h1 className="text-center font-bold bg-transparent p-1">
                DM 10
              </h1>
              <p className="font-sans from-neutral-200"> Nice product</p>
            </div>
            <div className="max-w-sm border rounded p-3 shadow-lg m-2">
              <img src={image} alt="logo" />
              <h1 className="text-center font-bold bg-transparent p-1">
                DM 10
              </h1>
              <p className="font-sans from-neutral-200"> Nice product</p>
            </div>
            <div className="max-w-sm border rounded p-3 shadow-lg m-2">
              <img src={image} alt="logo" />
              <h1 className="text-center font-bold bg-transparent p-1">
                DM 10
              </h1>
              <p className="font-sans from-neutral-200"> Nice product</p>
            </div>
            <div className="max-w-sm border rounded p-3 shadow-lg m-2">
              <img src={image} alt="logo" />
              <h1 className="text-center font-bold bg-transparent p-1">
                DM 10
              </h1>
              <p className="font-sans from-neutral-200"> Nice product</p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p className="text-2xl font-serif text-center my-5">
          Created By Raisul Islam Ronnie
        </p>
      </footer>
    </div>
  );
};

export default App;
