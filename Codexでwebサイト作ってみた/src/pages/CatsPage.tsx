import heroImage from '../assets/generated/hero-lounge.png';
import byakuyaImage from '../assets/generated/cats/byakuya.png';
import kohakuImage from '../assets/generated/cats/kohaku.png';
import renImage from '../assets/generated/cats/ren.png';
import rinImage from '../assets/generated/cats/rin.png';
import shizukuImage from '../assets/generated/cats/shizuku.png';
import tsumugiImage from '../assets/generated/cats/tsumugi.png';

type CatProfile = {
  name: string;
  personality: string;
  place: string;
  schedule: string[];
  image: string;
};

const cats: CatProfile[] = [
  { name: '琥珀', personality: '穏やかで優雅', place: '窓辺のソファ', schedule: ['月', '火', '水', '金', '土'], image: kohakuImage },
  { name: '白夜', personality: 'おっとりしている', place: 'ラウンジ中央のソファ', schedule: ['月', '火', '木', '土'], image: byakuyaImage },
  { name: '凛', personality: 'クールで気品がある', place: '書棚の上段', schedule: ['月', '水', '金', '土', '日'], image: rinImage },
  { name: '紬', personality: '甘えん坊で人懐っこい', place: 'キャットタワーの最上段', schedule: ['火', '水', '木', '土'], image: tsumugiImage },
  { name: '雫', personality: '繊細で控えめ', place: '観葉植物のそば', schedule: ['月', '火', '金', '土'], image: shizukuImage },
  { name: '蓮', personality: 'のんびりマイペース', place: '大理石のテーブルの上', schedule: ['水', '木', '金', '土', '日'], image: renImage },
];

const days = ['月', '火', '水', '木', '金', '土', '日'];

export function CatsPage() {
  return (
    <div className="bg-[#fbfaf7] text-[#27231f]">
      <section className="relative min-h-[560px] overflow-hidden border-b border-[#c6a15a]/50">
        <img className="luxury-image absolute inset-0 h-full w-full object-cover" src={heroImage} alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbfaf7] via-[#fbfaf7]/78 to-transparent" />
        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center px-6 md:px-12">
          <div className="animate-[fadeUp_.9s_ease-out_both]">
            <h1 className="font-serif text-6xl md:text-7xl">猫たち</h1>
            <div className="my-8 h-px w-24 bg-[#b08a3c]" />
            <p className="text-xl tracking-[0.12em] text-[#4f473e]">静かな時間をともに過ごす、美しい住人たち。</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center md:px-12">
        <p className="leading-10 text-[#5f574d]">
          Maison Nekoには、それぞれに個性を持つ猫たちが暮らしています。
          気まぐれに寄り添い、そっと距離を置き、思い思いの時間を過ごす姿に、きっと心がほどけるはずです。
        </p>
        <div className="mx-auto mt-12 h-px max-w-3xl bg-[#d9c7a4]" />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cats.map(({ name, personality, place, schedule, image }) => (
            <article className="group overflow-hidden border border-[#d9c7a4] bg-white transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(79,62,37,.08)]" key={name}>
              <img className="luxury-image h-72 w-full object-cover transition duration-700 group-hover:scale-[1.03]" src={image} alt={`${name}の写真`} />
              <div className="p-8">
                <h2 className="text-center font-serif text-3xl">{name}</h2>
                <div className="mx-auto mt-4 h-px w-10 bg-[#b08a3c]" />
                <dl className="mt-8 space-y-4 text-sm leading-8">
                  <div className="grid grid-cols-[6em_1fr] gap-4">
                    <dt className="font-semibold">性格：</dt>
                    <dd className="text-[#5f574d]">{personality}</dd>
                  </div>
                  <div className="grid grid-cols-[6em_1fr] gap-4">
                    <dt className="font-semibold">好きな場所：</dt>
                    <dd className="text-[#5f574d]">{place}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">出勤予定：</dt>
                    <dd className="mt-3 flex gap-2">
                      {days.map((day) => (
                        <span className={`grid h-7 w-7 place-items-center border text-xs ${schedule.includes(day) ? 'border-[#b08a3c] bg-[#b08a3c] text-white' : 'border-[#d9c7a4] text-[#8b7b66]'}`} key={day}>
                          {day}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#d9c7a4] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between md:px-12">
          <p className="max-w-3xl leading-8 text-[#5f574d]">
            猫たちの体調や気分により、出勤予定が変更となる場合がございます。当日はスタッフまでお気軽にお尋ねください。
          </p>
          <a className="border border-[#b08a3c] px-10 py-4 text-center text-sm text-[#7c5e26] transition hover:bg-[#b08a3c] hover:text-white" href="/first-visit">
            猫たちについてのお願い
          </a>
        </div>
      </section>
    </div>
  );
}
