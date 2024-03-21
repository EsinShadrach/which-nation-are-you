export function cn(...args: string[]) {
  return args.filter(Boolean).join(" ");
}

interface TypographyProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export function TypographyH2({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <h2
      {...props}
      className={cn(
        "pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        `${className}`
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH4({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <h4
      {...props}
      className={cn(
        "text-xl font-semibold tracking-tight scroll-m-20",
        `${className}`
      )}
    >
      {children}
    </h4>
  );
}
