import type { LucideIcon } from 'lucide-react';
import { ArrowRight, Coffee, Crown, Soup, Utensils } from 'lucide-react';
import menuHero from '../assets/generated/menu-sheet.png';
import menuHeroWide from '../assets/generated/menu-hero.png';

type MenuSection = {
  title: string;
  lead: string;
  icon: LucideIcon;
  imageSide: 'left' | 'right';
  items: [string, string, string][];
};

const menuSections: MenuSection[] = [
  {
    title: '季節のお茶',
    lead: '季節の移ろいを映したお茶を、静かに味わうひとときを。',
    icon: Coffee,
    imageSide: 'right',
    items: [
      ['白桃と和紅茶のブレンド', '白桃のやさしい香りと、和紅茶のまろやかな余韻。', '¥1,100'],
      ['深煎り珈琲', '香ばしく深いコク。静かな午後によく合う一杯。', '¥990'],
      ['カモミールブレンド', 'りんごのような甘い香りで、心をほどくハーブティー。', '¥990'],
      ['抹茶オレ', '宇治抹茶の豊かな香りと、ミルクのまろやかさ。', '¥1,100'],
    ],
  },
  {
    title: '菓子',
    lead: '丁寧に仕立てた甘味とともに、贅沢な余韻を。',
    icon: Crown,
    imageSide: 'left',
    items: [
      ['季節のタルト', '旬の果実を贅沢に。内容はスタッフにお尋ねください。', '¥1,210'],
      ['抹茶のテリーヌ', '濃厚でなめらかな口どけ。抹茶の香りが広がります。', '¥990'],
      ['ガトーショコラ', 'カカオの深い余韻としっとりした食感。', '¥990'],
      ['自家製スコーン', 'クロテッドクリームと季節のジャムを添えて。', '¥880'],
    ],
  },
  {
    title: '軽食',
    lead: '軽やかにお楽しみいただける、上質な軽食をご用意しています。',
    icon: Utensils,
    imageSide: 'right',
    items: [
      ['小さなキッシュ', '季節の具材を使った、食べやすいサイズのキッシュ。', '¥880'],
      ['スモークサーモンのオープンサンド', 'サワークリームとディルの香り。', '¥990'],
      ['季節のスープ', '素材の味わいを生かした、やさしいスープ。', '¥770'],
    ],
  },
  {
    title: 'コース料金',
    lead: '猫たちとの時間を、より豊かにお過ごしいただくためのコースです。',
    icon: Soup,
    imageSide: 'left',
    items: [
      ['ラウンジ90分コース', 'お好きなドリンク1杯付き。静かなラウンジでゆったりと。', '¥2,200'],
      ['ペアアフタヌーンコース', 'ドリンク2杯と季節の菓子プレート付き。お二人で優雅な時間を。', '¥5,000'],
    ],
  },
];

export function MenuPage() {
  return (
    <main className="bg-[#fbfaf7] text-[#24211e]">
      <section className="relative min-h-[420px] overflow-hidden border-b border-[#c7a35a]/40 bg-white">
        <img className="luxury-image absolute inset-0 h-full w-full object-cover object-center opacity-70" src={menuHeroWide} alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/10" />
        <div className="relative mx-auto flex min-h-[420px] max-w-6xl items-center px-6 py-24">
          <div className="animate-[fadeIn_0.8s_ease-out] max-w-xl">
            <div className="mb-8 flex items-center gap-5 text-[#b48a3a]">
              <span className="h-px w-24 bg-[#c7a35a]/60" />
              <Coffee size={22} strokeWidth={1.25} />
              <span className="h-px w-24 bg-[#c7a35a]/60" />
            </div>
            <p className="mb-5 text-sm tracking-[0.24em] text-[#b48a3a]">DRINK & SWEETS</p>
            <h1 className="font-serif text-5xl font-normal tracking-[0.18em] md:text-6xl">メニュー</h1>
            <p className="mt-8 text-lg leading-9 tracking-[0.12em] text-[#4c4741]">
              季節のお茶と、静かな時間に寄り添う甘味。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-14 flex items-center justify-center gap-6">
          <span className="h-px w-20 bg-[#c7a35a]/60" />
          <h2 className="font-serif text-3xl tracking-[0.12em]">Drink & Sweets</h2>
          <span className="h-px w-20 bg-[#c7a35a]/60" />
        </div>

        <div className="space-y-16">
          {menuSections.map((section, index) => {
            const Icon = section.icon;
            const imageFirst = section.imageSide === 'left';

            const textBlock = (
              <div className="animate-on-scroll">
                <div className="mb-6 flex items-center gap-4 text-[#b48a3a]">
                  <Icon size={34} strokeWidth={1.2} />
                  <div>
                    <h3 className="font-serif text-3xl tracking-[0.12em]">{section.title}</h3>
                    <p className="mt-3 text-sm leading-7 tracking-[0.08em] text-[#5d5650]">{section.lead}</p>
                  </div>
                </div>
                <div className="divide-y divide-[#d8c7a3]/60 border-t border-[#d8c7a3]/60">
                  {section.items.map(([name, description, price]) => (
                    <div className="grid grid-cols-[1fr_auto] gap-6 py-5" key={name}>
                      <div>
                        <p className="font-serif text-lg tracking-[0.08em]">{name}</p>
                        <p className="mt-2 text-sm leading-6 tracking-[0.06em] text-[#6f6760]">{description}</p>
                      </div>
                      <p className="font-serif text-lg tracking-[0.06em]">{price}</p>
                    </div>
                  ))}
                </div>
              </div>
            );

            const imageBlock = (
              <div className="animate-on-scroll overflow-hidden rounded-[6px] border border-[#d8c7a3]/70 bg-white shadow-sm">
                <img
                  className="luxury-image h-72 w-full object-cover transition duration-700 hover:scale-[1.03]"
                  src={menuHero}
                  alt=""
                  style={{ objectPosition: `${index % 2 === 0 ? '68%' : '42%'} ${24 + index * 13}%` }}
                />
              </div>
            );

            return (
              <article className="grid items-center gap-12 md:grid-cols-2" key={section.title}>
                {imageFirst ? imageBlock : textBlock}
                {imageFirst ? textBlock : imageBlock}
              </article>
            );
          })}
        </div>

        <div className="animate-on-scroll mt-20 grid items-center gap-8 border border-[#c7a35a]/70 bg-white px-8 py-8 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="font-serif text-2xl tracking-[0.12em]">ご予約はオンラインで承っております</h2>
            <p className="mt-3 text-sm leading-7 tracking-[0.08em] text-[#6b625b]">
              混雑時はお席のご希望に添えない場合がございます。お早めのご予約をおすすめいたします。
            </p>
          </div>
          <a
            className="inline-flex items-center justify-center gap-3 rounded-[6px] bg-[#b48a3a] px-12 py-4 text-sm tracking-[0.16em] text-white transition hover:bg-[#9a742d]"
            href="/reservation"
          >
            席を予約する
            <ArrowRight size={18} strokeWidth={1.5} />
          </a>
        </div>

        <p className="mt-8 text-xs leading-6 tracking-[0.08em] text-[#7a7169]">
          ※ 表示価格はすべて税込です。<br />
          ※ メニューは季節により内容を変更する場合がございます。
        </p>
      </section>
    </main>
  );
}
