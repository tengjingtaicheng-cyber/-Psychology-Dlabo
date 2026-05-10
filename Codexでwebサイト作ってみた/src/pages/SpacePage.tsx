import heroImage from '../assets/generated/hero-lounge.png';
import loungeImage from '../assets/generated/interior-sheet.png';

const features = [
  ['座席', 'ゆとりある配置の席は、プライバシーを大切にした設計。ひとりでも、誰かとでも、心地よくお過ごしいただけます。'],
  ['照明', '時間帯によって表情を変える自然光と、やさしい間接照明。まぶしさを抑え、落ち着ける明るさを保っています。'],
  ['香り', '空間全体に広がるのは、天然精油を使用したやさしい香り。猫たちにも人にも心地よい、上質な香りを選んでいます。'],
  ['音環境', '静けさを大切にした音環境で、会話や読書を妨げません。BGMは音量を抑え、穏やかな時間を演出します。'],
];

const spaces = [
  ['ラウンジ席', '大きなソファとクッションで、猫たちが自由にのびのびと過ごすメインラウンジ。自然光が差し込む開放的な空間です。'],
  ['窓辺のカウンター', '外の景色を眺めながら、静かに過ごせる人気のカウンター席。おひとり様にも最適です。'],
  ['プライベートテーブル', 'ゆったりと会話や読書を楽しめる半個室のテーブル席。周囲を気にせずお過ごしいただけます。'],
  ['静寂の書斎コーナー', '本やアートを愉しめる落ち着いたコーナー。静かに思索を深めるひとときに。'],
];

export function SpacePage() {
  return (
    <div className="bg-[#fbfaf7] text-[#27231f]">
      <section className="relative min-h-[620px] overflow-hidden border-b border-[#c6a15a]/50">
        <img className="luxury-image absolute inset-0 h-full w-full object-cover" src={heroImage} alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbfaf7] via-[#fbfaf7]/78 to-transparent" />
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 md:px-12">
          <div className="max-w-xl animate-[fadeUp_.9s_ease-out_both]">
            <h1 className="font-serif text-6xl md:text-7xl">空間</h1>
            <p className="mt-8 font-serif text-2xl leading-relaxed">白と光に包まれる、静かなラウンジ。</p>
            <div className="my-8 h-px w-24 bg-[#b08a3c]" />
            <p className="leading-9 text-[#5f574d]">
              洗練されたインテリアとやわらかな自然光が調和する、猫たちと穏やかに過ごすための特別な空間です。
              すべての素材や香り、音にまでこだわり、心からくつろげる時間をお届けします。
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9c7a4] bg-white">
        <div className="mx-auto grid max-w-7xl gap-0 px-6 py-20 md:grid-cols-4 md:px-12">
          {features.map(([title, text]) => (
            <article className="border-[#d9c7a4] py-10 md:border-l md:px-8 md:first:border-l-0" key={title}>
              <div className="mx-auto mb-8 h-12 w-12 border border-[#b08a3c] opacity-80" />
              <h2 className="text-center font-serif text-2xl">{title}</h2>
              <p className="mt-6 text-center text-sm leading-8 text-[#5f574d]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12">
        <div className="mb-14 flex items-center justify-center gap-8">
          <span className="h-px w-20 bg-[#b08a3c]" />
          <h2 className="font-serif text-4xl">空間のご紹介</h2>
          <span className="h-px w-20 bg-[#b08a3c]" />
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {spaces.map(([title, text], index) => (
            <article className="animate-[fadeUp_.9s_ease-out_both] border-b border-[#d9c7a4] bg-white" key={title}>
              <img className="luxury-image h-72 w-full border border-[#d9c7a4] object-cover" src={loungeImage} alt={title} style={{ objectPosition: `${18 + index * 22}% ${index < 2 ? 24 : 74}%` }} />
              <div className="py-6">
                <h3 className="font-serif text-2xl">{title}</h3>
                <p className="mt-5 text-sm leading-8 text-[#5f574d]">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-12">
        <div className="grid gap-10 border border-[#c6a15a] bg-white p-8 md:grid-cols-[220px_1fr_280px] md:items-center">
          <div className="flex items-center gap-5">
            <div className="h-16 w-16 bg-[#b08a3c]/85" />
            <h2 className="font-serif text-2xl leading-snug">猫たちのための工夫</h2>
          </div>
          <p className="leading-9 text-[#5f574d]">
            キャットウォークや隠れ家スペースなど、猫たちが安心して過ごせる工夫を随所に施しています。
            無理に触れ合うことのないよう配慮し、猫たちのペースを尊重した空間づくりを行っています。
          </p>
          <img className="luxury-image h-40 w-full object-cover" src={loungeImage} alt="猫のためのくつろぎスペース" />
        </div>
      </section>
    </div>
  );
}
