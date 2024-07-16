interface SectionTitleProps {
  title: string;
}
export function SectionTitle({ title }: SectionTitleProps) {
  return <h1 className="pb-[20px] text-2xl font-bold">{title}</h1>;
}
