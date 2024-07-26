import { Inter, Lora, Inconsolata } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
const inconsolata = Inconsolata({ subsets: ["latin"] });

export type FontKey = "mono" | "sans" | "serif";

const fontsmap = {"serif": inter, "sans": lora, "mono": inconsolata}

export {inter, lora, inconsolata, fontsmap}