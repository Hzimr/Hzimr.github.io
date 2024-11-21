import { ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
  className?: string;
}

export function DefaultLayout({ children, className }: DefaultLayoutProps) {
  return (
    <div className={`${className} flex max-w-[1200px] flex-col`}>
      {children}
    </div>
  );
}
