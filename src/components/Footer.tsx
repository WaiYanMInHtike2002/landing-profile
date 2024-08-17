import { Urbanist } from "next/font/google";
const ubuntu = Urbanist({ weight: "900", subsets: ["latin"] });
export default function Footer() {
  return (
    <div className={ubuntu.className}>
      <div className="text-gray-300">
        <div className="relative flex overflow-x-hidden">
          <div className="py-12 animate-marquee whitespace-nowrap">
            <span className="text-10xl mx-4">Wai yan min htike</span>
            <span className="text-10xl mx-4">Wai yan min htike</span>
            <span className="text-10xl mx-4">Wai yan min htike</span>
          </div>

          <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
            <span className="text-10xl mx-4">Wai yan min htike</span>
            <span className="text-10xl mx-4">Wai yan min htike</span>
            <span className="text-10xl mx-4">Wai yan min htike</span>
          </div>
        </div>
      </div>
      <div>
        <div className="text-gray-300">
          <div className="relative flex overflow-x-hidden">
            <div className="py-12 animate-marquee whitespace-nowrap font-medium">
              <span className="text-4xl mx-4">HTML</span>
              <span className="text-4xl mx-4">CSS</span>
              <span className="text-4xl mx-4">JAVASCRIPT</span>
              <span className="text-4xl mx-4">TYPESCRIPT</span>
              <span className="text-4xl mx-4">NODEJS</span>
              <span className="text-4xl mx-4">EXPRESSJS</span>
              <span className="text-4xl mx-4">REACTJS</span>
              <span className="text-4xl mx-4">NEXTJS</span>
              <span className="text-4xl mx-4">REDUXTOOLKIT</span>
              <span className="text-4xl mx-4">POSTGRESSQL</span>
              <span className="text-4xl mx-4">MYSQL</span>
              <span className="text-4xl mx-4">GITHUB</span>
              <span className="text-4xl mx-4">VERCEL</span>
            </div>

            <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
              <span className="text-4xl mx-4">HTML</span>
              <span className="text-4xl mx-4">CSS</span>
              <span className="text-4xl mx-4">JAVASCRIPT</span>
              <span className="text-4xl mx-4">TYPESCRIPT</span>
              <span className="text-4xl mx-4">NODEJS</span>
              <span className="text-4xl mx-4">EXPRESSJS</span>
              <span className="text-4xl mx-4">REACTJS</span>
              <span className="text-4xl mx-4">NEXTJS</span>
              <span className="text-4xl mx-4">REDUXTOOLKIT</span>
              <span className="text-4xl mx-4">POSTGRESSQL</span>
              <span className="text-4xl mx-4">MYSQL</span>
              <span className="text-4xl mx-4">GITHUB</span>
              <span className="text-4xl mx-4">VERCEL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
