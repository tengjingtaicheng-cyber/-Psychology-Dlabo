import {
  type ButtonHTMLAttributes,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Link, type LinkProps } from 'react-router-dom';

type Tone = 'primary' | 'secondary' | 'ghost';

const buttonBase =
  'luxury-focus inline-flex min-h-11 items-center justify-center gap-2 rounded-[6px] px-5 py-2.5 text-sm font-medium tracking-[0.08em] transition duration-300';

const buttonTones: Record<Tone, string> = {
  primary:
    'border border-[#b89b5e] bg-[#1f1d1a] text-[#fffdf9] shadow-[0_14px_30px_rgba(31,29,26,0.12)] hover:bg-[#8d7138]',
  secondary:
    'border border-[#d8c6a6] bg-[#fffdf9] text-[#1f1d1a] hover:border-[#b89b5e] hover:text-[#8d7138]',
  ghost:
    'border border-transparent bg-transparent text-[#736d64] hover:border-[#e8dcc8] hover:text-[#1f1d1a]',
};

type ButtonLinkProps = LinkProps & {
  tone?: Tone;
};

export function ButtonLink({ className = '', tone = 'primary', ...props }: ButtonLinkProps) {
  return <Link className={`${buttonBase} ${buttonTones[tone]} ${className}`} {...props} />;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: Tone;
};

export function Button({ className = '', tone = 'primary', ...props }: ButtonProps) {
  return <button className={`${buttonBase} ${buttonTones[tone]} ${className}`} {...props} />;
}

type SectionProps = HTMLAttributes<HTMLElement> & {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeader({ eyebrow, title, description, align = 'left', className = '' }: SectionProps) {
  const centered = align === 'center';

  return (
    <header className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#b89b5e]">{eyebrow}</p>
      ) : null}
      <h2
        className={`font-serif-jp champagne-rule text-balance text-3xl leading-tight text-[#1f1d1a] md:text-5xl ${
          centered ? 'after:mx-auto' : ''
        }`}
      >
        {title}
      </h2>
      {description ? <p className="mt-6 text-base leading-8 text-[#736d64]">{description}</p> : null}
    </header>
  );
}

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  interactive?: boolean;
};

export function Card({ children, className = '', interactive = false, ...props }: CardProps) {
  return (
    <div
      className={`rounded-[8px] border border-[#e8dcc8] bg-white/82 shadow-[0_18px_45px_rgba(31,29,26,0.06)] ${
        interactive ? 'transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(31,29,26,0.1)]' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: number;
};

export function Reveal({ children, className = '', delay = 0, style: styleProp, ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const style = { ...styleProp, transitionDelay: `${delay}ms` } satisfies CSSProperties;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}

type IconBadgeProps = {
  src: string;
  alt: string;
  className?: string;
};

export function IconBadge({ src, alt, className = '' }: IconBadgeProps) {
  return (
    <span className={`inline-flex size-12 items-center justify-center rounded-full border border-[#e8dcc8] ${className}`}>
      <img className="size-6" src={src} alt={alt} />
    </span>
  );
}
