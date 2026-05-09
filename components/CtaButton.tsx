type CtaButtonProps = {
  label: string;
  href?: string;
};

export default function CtaButton({ label, href = '#entry' }: CtaButtonProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center border border-[#A63A3A] px-8 py-3 text-sm tracking-[0.16em] text-[#A63A3A] transition hover:bg-[#A63A3A] hover:text-white"
    >
      {label}
    </a>
  );
}
