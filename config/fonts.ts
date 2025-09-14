import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Plus_Jakarta_Sans,
} from "next/font/google";

export const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
