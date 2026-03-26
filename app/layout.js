import { Outfit, Ovo, Kaushan_Script, Prata } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ['400', '500', '600', '700']
});

const ovo = Ovo({
  subsets: ["latin"], weight: '400'
});

const kaushan_script = Kaushan_Script({
  subsets: ["latin"], weight: '400'
});

const prata = Prata({
  subsets: ["latin"], weight: '400'
});

export const metadata = {
  title: "Priyanshu Singh | Frontend Developer | React Developer",
  description: "Professional Frontend Developer specializing in React.js, and Tailwind CSS. Building high-performance, responsive web applications with a focus on clean code and user experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} ${kaushan_script.className} ${prata.className} antialiased leading-8 overflow-x-hidden bg-[#030712]`}
      >
        {children}
      </body>
    </html>
  );
}
