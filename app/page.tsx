// import Image from "next/image";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1 className="text-5xl font-bold font-mono underline text-center py-20">
        Title!
      </h1>
      <div className="flex flex-row justify-between mb-6">
        <div className="bg-slate-800 min-w-10">1</div>
        <div className="bg-stone-500 min-w-10">2</div>
        <div className="bg-slate-500 min-w-10">3</div>
      </div>
      <hr />
      <h2 className="text-2xl font-serif font-extrabold py-5 px-20 bg-stone-300">Subtitle</h2>
    </>
  );
}
