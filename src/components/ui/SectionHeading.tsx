import { Reveal } from "./Reveal";

interface Props {
  id?: string;
  index?: string;
  eyebrow: string;
  title: string;
  text?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  as?: "h1" | "h2";
}

export function SectionHeading({ id, index, eyebrow, title, text, tone = "light", align = "left", as: Tag = "h2" }: Props) {
  const dark = tone === "dark";
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`label flex items-center gap-3 ${align === "center" ? "justify-center" : ""} ${dark ? "text-volt-light" : "text-volt-dark"}`}>
        {index && <span className={dark ? "text-steel-400" : "text-steel-500"}>{index}</span>}
        <span aria-hidden className={`h-px w-8 ${dark ? "bg-volt-light/60" : "bg-volt-dark/50"}`} />
        {eyebrow}
      </p>
      <Tag id={id} className={`mt-4 text-3xl font-bold sm:text-4xl ${dark ? "text-white" : "text-navy-900"}`}>{title}</Tag>
      {text && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? "text-steel-300" : "text-steel-600"}`}>{text}</p>}
    </Reveal>
  );
}
