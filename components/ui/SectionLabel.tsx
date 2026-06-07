type SectionLabelProps = {
  children: string;
  index?: string;
};

export function SectionLabel({ children, index }: SectionLabelProps) {
  return (
    <div className="flex items-center justify-between border-t border-line pt-5">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
        {children}
      </p>
      {index ? (
        <span className="text-xs font-medium tracking-[0.16em] text-muted">
          {index}
        </span>
      ) : null}
    </div>
  );
}
