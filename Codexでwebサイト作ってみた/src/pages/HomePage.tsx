import { Link } from 'react-router-dom';
import heroImage from '../assets/generated/hero-lounge.png';
import spaceImage from '../assets/generated/interior-sheet.png';
import menuImage from '../assets/generated/menu-sheet.png';
import emileImage from '../assets/generated/cats/ren.png';
import lucienImage from '../assets/generated/cats/kohaku.png';
import charlotteImage from '../assets/generated/cats/byakuya.png';

const cats = [
  ['ルシアン', 'サイベリアン', '窓辺で光を眺めるのが好きな、穏やかな男の子。', lucienImage],
  ['シャルロット', 'ブリティッシュショートヘア', '好奇心旺盛で、人のそばにそっと寄り添います。', charlotteImage],
  ['エミール', 'ラグドール', 'のんびり屋で、午後のラウンジによく似合う子。', emileImage],
];

const menuItems = [
  ['ブレンドコーヒー', '980'],
  ['カフェラテ', '990'],
  ['ダージリンティー', '880'],
  ['ベイクドチーズケーキ', '990'],
  ['ガトーショコラ', '990'],
  ['季節のタルト', '1,100'],
];

export function HomePage() {
  return (
    <div className="bg-[#fbfaf7] text-[#27231f]">
      <section className="relative min-h-[calc(100vh-88px)] overflow-hidden border-b border-[#c6a15a]/50">
        <img className="luxury-image absolute inset-0 h-full w-full object-cover" src={heroImage} alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbfaf7] via-[#fbfaf7]/82 to-transparent" />
        <div className="relative mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-center px-6 py-24 md:px-12">
          <div className="max-w-xl animate-[fadeUp_.9s_ease-out_both]">
            <p className="mb-6 text-xs uppercase tracking-[0.32em] text-[#b08a3c]">Maison Neko</p>
            <h1 className="font-serif text-5xl leading-tight md:text-7xl">
              静けさの中で、
              <br />
              猫と過ごす上質な午後。
            </h1>
            <p className="mt-8 max-w-md leading-9 text-[#5f574d]">
              白を基調とした落ち着いた空間で、選び抜かれたドリンクと猫たちとの穏やかな時間を。
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link className="border border-[#b08a3c] bg-[#b08a3c] px-10 py-4 text-sm text-white transition hover:bg-[#987630]" to="/reservation">
                予約する
              </Link>
              <Link className="border border-[#c6a15a]/70 bg-white/70 px-10 py-4 text-sm text-[#4a4035] transition hover:border-[#b08a3c]" to="/space">
                空間を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[0.8fr_1.2fr] md:px-12">
        <div className="animate-[fadeUp_.9s_ease-out_both]">
          <p className="text-xs uppercase tracking-[0.32em] text-[#b08a3c]">Concept</p>
          <h2 className="mt-6 font-serif text-4xl leading-snug">大人のための静かな猫カフェ</h2>
          <p className="mt-8 leading-9 text-[#5f574d]">
            Maison Nekoは、日常の喧騒を離れ、静けさの中で猫たちと親やかな時間を過ごすための空間です。
            インテリア、香り、音、すべてにこだわり、上質な時間を提供します。
          </p>
        </div>
        <img className="luxury-image h-full min-h-80 w-full border border-[#d9c7a4] object-cover" src={spaceImage} alt="白く明るい猫カフェのラウンジ" />
      </section>

      <section className="border-y border-[#d9c7a4] bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:px-12">
          <img className="luxury-image min-h-96 w-full border border-[#d9c7a4] object-cover" src={spaceImage} alt="白と光に包まれたラウンジ" />
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.32em] text-[#b08a3c]">Space</p>
            <h2 className="mt-6 font-serif text-4xl leading-snug">白と光に包まれるラウンジ</h2>
            <p className="mt-8 leading-9 text-[#5f574d]">
              自然光が優しく差し込むラウンジは、猫たちが自由にくつろげるよう設計された特別な空間です。
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 text-sm text-[#6b6257] md:grid-cols-4">
              {['自然光のやさしさ', '洗練された家具', '静かな音楽', 'ゆったりした時間'].map((item) => (
                <div className="border-l border-[#d9c7a4] pl-4" key={item}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-[#b08a3c]">Cats</p>
          <h2 className="mt-4 font-serif text-4xl">今日をともに過ごす猫たち</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {cats.map(([name, breed, text, image]) => (
            <article className="overflow-hidden border border-[#d9c7a4] bg-white transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(79,62,37,.08)]" key={name}>
              <img className="luxury-image h-64 w-full object-cover" src={image} alt={`${name}の写真`} />
              <div className="p-7">
                <h3 className="font-serif text-2xl">{name}</h3>
                <p className="mt-3 text-xs text-[#8b7b66]">{breed}</p>
                <p className="mt-5 leading-8 text-[#5f574d]">{text}</p>
                <Link className="mt-6 inline-block text-sm text-[#9b752e]" to="/cats">詳しく見る</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#d9c7a4] bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1.1fr_.9fr] md:px-12">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#b08a3c]">Menu</p>
            <h2 className="mt-4 font-serif text-4xl">Drink & Sweets</h2>
            <div className="mt-10 grid gap-x-12 gap-y-5 md:grid-cols-2">
              {menuItems.map(([name, price]) => (
                <div className="flex justify-between border-b border-[#eadfca] pb-3 text-sm" key={name}>
                  <span>{name}</span>
                  <span>¥{price}</span>
                </div>
              ))}
            </div>
          </div>
          <img className="luxury-image h-full min-h-80 w-full border border-[#d9c7a4] object-cover" src={menuImage} alt="コーヒーとスイーツ" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12">
        <div className="grid gap-6 border border-[#d9c7a4] bg-white p-8 md:grid-cols-[1fr_1fr_1.2fr]">
          <div>
            <h2 className="font-serif text-2xl">ご予約</h2>
            <p className="mt-4 leading-8 text-[#5f574d]">事前予約制となっております。下記ボタンよりご予約ください。</p>
            <Link className="mt-6 inline-block border border-[#b08a3c] bg-[#b08a3c] px-10 py-3 text-sm text-white" to="/reservation">予約する</Link>
          </div>
          <div>
            <h2 className="font-serif text-2xl">アクセス</h2>
            <p className="mt-4 leading-8 text-[#5f574d]">東京都港区白金台4-12-10 表参道メゾン 2F</p>
          </div>
          <img className="luxury-image h-56 w-full object-cover" src={spaceImage} alt="Maison Nekoのエントランス" />
        </div>
      </section>
    </div>
  );
}
