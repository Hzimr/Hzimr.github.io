interface TitleProps {
  title: string
}

export function TitlePage({ title }: TitleProps) {
  return <h1 className="animate-pulse text-2xl md:text-4xl">{title}</h1>
}
