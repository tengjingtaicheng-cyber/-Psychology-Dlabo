import { Menu, X } from 'lucide-react';
import { type ReactNode, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { brand, footerColumns, navigation } from '../data/siteData';
import { ButtonLink } from './ui';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `luxury-focus text-sm tracking-[0.12em] transition ${
      isActive ? 'text-[#8d7138]' : 'text-[#4d4740] hover:text-[#8d7138]'
    }`;

  return (
    <div className="min-h-screen bg-[#fffdf9] text-[#1f1d1a]">
      <header className="sticky top-0 z-50 border-b border-[#e8dcc8]/80 bg-[#fffdf9]/92 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <Link to="/" className="luxury-focus group inline-flex flex-col" onClick={() => setOpen(false)}>
            <span className="font-serif-jp text-xl tracking-[0.18em] text-[#1f1d1a]">Maison Neko</span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[#b89b5e]">Premium Cat Cafe</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="メインナビゲーション">
            {navigation.map((item) => (
              <NavLink key={item.href} to={item.href} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ButtonLink to="/reservation" tone="secondary">
              予約する
            </ButtonLink>
          </div>

          <button
            className="luxury-focus inline-flex size-11 items-center justify-center rounded-[6px] border border-[#e8dcc8] text-[#1f1d1a] lg:hidden"
            type="button"
            aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>

        {open ? (
          <nav className="border-t border-[#e8dcc8] bg-[#fffdf9] px-5 py-5 lg:hidden" aria-label="モバイルナビゲーション">
            <div className="mx-auto grid max-w-7xl gap-4">
              {navigation.map((item) => (
                <NavLink key={item.href} to={item.href} className={navLinkClass} onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="border-t border-[#e8dcc8] bg-[#f8f4ec]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
          <div>
            <p className="font-serif-jp text-2xl tracking-[0.16em]">{brand.name}</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#736d64]">{brand.tagline}</p>
            <dl className="mt-6 grid gap-2 text-sm text-[#4d4740]">
              <div className="flex gap-3">
                <dt className="text-[#b89b5e]">Address</dt>
                <dd>{brand.address}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="text-[#b89b5e]">Hours</dt>
                <dd>{brand.hours}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="text-[#b89b5e]">Tel</dt>
                <dd>{brand.phone}</dd>
              </div>
            </dl>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b89b5e]">{column.title}</p>
              <ul className="mt-5 grid gap-3 text-sm text-[#4d4740]">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link className="luxury-focus transition hover:text-[#8d7138]" to={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[#e8dcc8] px-5 py-5 text-center text-xs tracking-[0.16em] text-[#736d64]">
          © 2026 Maison Neko
        </div>
      </footer>
    </div>
  );
}
