// import Image from "next/image";
import Link from "next/link";
// import Header from "./components/common/header";

export default function Home() {
  return (
    <main className="flex lg:min-h-screen flex-col items-center justify-between lg:py-24 py-6 px-4">
      <div className="header-sec text-center">
        <h1 className="text-4xl md:text-6xl 2xl:text-8xl font-black text-white mb-8">Learn . Connect . Grow</h1>
        <p className="text-3xl lg:text-5xl font-normal text-slate-400 mb-5">The Professional Knowledge Hub</p>
        <Link href="join" className="text-white join-btn lg:text-2xl text-2xl lg:py-6 lg:px-20 px-5 py-4 inline-block my-8">Join Community</Link>
      </div>
      <div className="second-sec ">
        <h2 className="lg:text-5xl text-3xl font-black text-white text-center">Where do you belong?</h2>
      </div>
    </main>
  );
}
