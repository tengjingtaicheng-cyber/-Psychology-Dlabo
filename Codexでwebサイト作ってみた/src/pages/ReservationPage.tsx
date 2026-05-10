import { ChevronRight, RotateCcw } from 'lucide-react';
import reservationHero from '../assets/generated/reservation-hero.png';
import courseImage from '../assets/generated/menu-sheet.png';

const days = Array.from({ length: 35 }, (_, index) => index + 1);
const times = ['10:00', '11:30', '13:00', '14:30', '16:00', '17:30', '19:00'];
const courses = [
  ['スタンダードコース', '¥2,500 / 名', 'ドリンク1杯と猫とのふれあいをお楽しみいただける基本のコースです。'],
  ['ティータイムコース', '¥3,800 / 名', '季節のスイーツとドリンクで、優雅なティータイムを。'],
  ['プレミアムコース', '¥5,500 / 名', '特製スイーツプレートとこだわりのドリンクで、贅沢なひとときを。'],
];

const requestItems = [
  '店内は靴を脱いでご利用いただきます。',
  '猫たちの体調により、ふれあいを制限させていただく場合がございます。',
  '大きな音や急な動きは、猫たちのストレスとなりますのでご配慮ください。',
  'フラッシュ撮影はご遠慮ください。',
  '香りの強い香水はお控えください。',
];

export function ReservationPage() {
  return (
    <main className="bg-[#fbfaf7] text-[#24211e]">
      <section className="relative min-h-[360px] overflow-hidden border-b border-[#c7a35a]/40 bg-white">
        <img className="luxury-image absolute inset-0 h-full w-full object-cover object-top opacity-75" src={reservationHero} alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/20" />
        <div className="relative mx-auto flex min-h-[360px] max-w-6xl items-center px-6 py-20">
          <div className="animate-[fadeIn_0.8s_ease-out] max-w-lg">
            <h1 className="font-serif text-5xl font-normal tracking-[0.16em]">ご予約</h1>
            <p className="mt-5 font-serif text-xl tracking-[0.14em]">静かな午後を、少しだけ特別に。</p>
            <p className="mt-7 text-sm leading-8 tracking-[0.08em] text-[#5c554f]">
              ご希望の日時・人数・コースをお選びのうえ、必要事項をご入力ください。
              皆さまのご来店を心よりお待ちしております。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="animate-on-scroll mb-10 grid gap-4 md:grid-cols-4">
          {['日時', '人数', 'コース', 'お客様情報'].map((step, index) => (
            <div
              className={`flex items-center justify-center gap-3 border px-6 py-4 font-serif text-lg tracking-[0.14em] ${
                index === 0 ? 'border-[#b48a3a] bg-[#b48a3a] text-white' : 'border-[#d8c7a3] bg-white text-[#39342f]'
              }`}
              key={step}
            >
              <span>{index + 1}</span>
              <span>{step}</span>
              {index < 3 && <ChevronRight className="hidden text-[#b48a3a] md:block" size={18} />}
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-8">
            <section className="animate-on-scroll border border-[#d8c7a3] bg-white p-7 md:p-9">
              <h2 className="font-serif text-2xl tracking-[0.12em] text-[#6b4f1f]">1. 日時をお選びください</h2>
              <div className="mt-8 grid gap-8 md:grid-cols-[1.15fr_1fr]">
                <div>
                  <p className="mb-4 text-sm tracking-[0.08em]">日付を選択</p>
                  <div className="rounded-[6px] border border-[#d8c7a3] p-5">
                    <div className="mb-5 flex items-center justify-between font-serif text-lg tracking-[0.1em]">
                      <span>‹</span>
                      <span>2026年 5月</span>
                      <span>›</span>
                    </div>
                    <div className="mb-3 grid grid-cols-7 text-center text-xs tracking-[0.12em] text-[#8a8077]">
                      {['月', '火', '水', '木', '金', '土', '日'].map((day) => (
                        <span key={day}>{day}</span>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-sm">
                      {days.map((day) => (
                        <button
                          className={`aspect-square rounded-full transition hover:bg-[#efe4cf] ${
                            day === 15 ? 'bg-[#b48a3a] text-white' : day < 10 ? 'text-[#b7aea5]' : ''
                          }`}
                          key={day}
                          type="button"
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                    <p className="mt-5 text-xs tracking-[0.08em] text-[#7a7169]">○：空きあり　△：残りわずか　×：満席</p>
                  </div>
                </div>
                <div>
                  <p className="mb-4 text-sm tracking-[0.08em]">時間を選択</p>
                  <div className="grid grid-cols-2 gap-4">
                    {times.map((time) => (
                      <button
                        className={`flex items-center justify-between rounded-[4px] border px-6 py-4 font-serif tracking-[0.08em] transition hover:border-[#b48a3a] ${
                          time === '14:30' ? 'border-[#b48a3a] bg-[#fbf7ef]' : 'border-[#d8c7a3]'
                        }`}
                        key={time}
                        type="button"
                      >
                        {time}
                        <span className="text-[#b48a3a]">○</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="animate-on-scroll border border-[#d8c7a3] bg-white p-7 md:p-9">
              <h2 className="font-serif text-2xl tracking-[0.12em] text-[#6b4f1f]">2. 人数・ご利用時間をお選びください</h2>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <label className="block">
                  <span className="mb-3 block text-sm tracking-[0.08em]">人数</span>
                  <select className="w-full rounded-[4px] border border-[#d8c7a3] bg-white px-5 py-4 tracking-[0.08em]">
                    <option>2名</option>
                    <option>1名</option>
                    <option>3名</option>
                    <option>4名</option>
                  </select>
                </label>
                <div>
                  <p className="mb-3 text-sm tracking-[0.08em]">ご利用時間</p>
                  <div className="grid grid-cols-3 gap-4">
                    {['60分', '90分', '120分'].map((duration) => (
                      <button
                        className={`rounded-[4px] border px-5 py-4 tracking-[0.08em] ${
                          duration === '90分' ? 'border-[#b48a3a] bg-[#fbf7ef]' : 'border-[#d8c7a3] bg-white'
                        }`}
                        key={duration}
                        type="button"
                      >
                        {duration}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="animate-on-scroll border border-[#d8c7a3] bg-white p-7 md:p-9">
              <h2 className="font-serif text-2xl tracking-[0.12em] text-[#6b4f1f]">3. コースをお選びください</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {courses.map(([name, price, text], index) => (
                  <article className="overflow-hidden rounded-[6px] border border-[#d8c7a3] bg-white" key={name}>
                    <img className="luxury-image h-32 w-full object-cover" src={courseImage} alt="" style={{ objectPosition: `${22 + index * 28}% ${index === 0 ? 24 : 76}%` }} />
                    <div className="p-5 text-center">
                      <h3 className="font-serif text-lg tracking-[0.1em]">{name}</h3>
                      <p className="mt-2 font-serif text-lg tracking-[0.08em]">{price}</p>
                      <p className="mt-4 text-xs leading-6 tracking-[0.06em] text-[#6f6760]">{text}</p>
                      <button
                        className={`mt-5 w-full rounded-[4px] border px-4 py-3 text-sm tracking-[0.12em] ${
                          index === 0 ? 'border-[#b48a3a] bg-[#b48a3a] text-white' : 'border-[#d8c7a3] text-[#9a742d]'
                        }`}
                        type="button"
                      >
                        選択する
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="animate-on-scroll border border-[#d8c7a3] bg-white p-7 md:p-9">
              <h2 className="font-serif text-2xl tracking-[0.12em] text-[#6b4f1f]">4. お客様情報をご入力ください</h2>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {['お名前', 'メールアドレス', '電話番号'].map((label) => (
                  <label className="block" key={label}>
                    <span className="mb-2 block text-sm tracking-[0.08em]">{label}</span>
                    <input className="w-full rounded-[4px] border border-[#d8c7a3] px-4 py-3" placeholder={`例）${label}`} />
                  </label>
                ))}
                <label className="block md:row-span-2">
                  <span className="mb-2 block text-sm tracking-[0.08em]">ご要望・備考（任意）</span>
                  <textarea className="min-h-28 w-full rounded-[4px] border border-[#d8c7a3] px-4 py-3" placeholder="アレルギーやご要望などがございましたらご記入ください。" />
                </label>
              </div>
              <button className="mt-8 w-full rounded-[4px] bg-[#b48a3a] px-6 py-4 text-center tracking-[0.16em] text-white transition hover:bg-[#9a742d]" type="button">
                予約内容を確認する
              </button>
            </section>
          </div>

          <aside className="space-y-8">
            <section className="animate-on-scroll border border-[#d8c7a3] bg-white p-7">
              <h2 className="border-b border-[#d8c7a3] pb-5 font-serif text-2xl tracking-[0.12em]">ご予約内容</h2>
              <dl className="mt-6 space-y-5 text-sm leading-7 tracking-[0.08em]">
                <div><dt className="text-[#8a8077]">日付</dt><dd>2026年5月15日（金）</dd></div>
                <div><dt className="text-[#8a8077]">時間</dt><dd>14:30</dd></div>
                <div><dt className="text-[#8a8077]">人数</dt><dd>2名</dd></div>
                <div><dt className="text-[#8a8077]">ご利用時間</dt><dd>90分</dd></div>
                <div><dt className="text-[#8a8077]">コース</dt><dd>スタンダードコース<br />¥2,500 / 名</dd></div>
              </dl>
              <div className="mt-7 border-t border-[#d8c7a3] pt-7 text-right">
                <p className="text-sm tracking-[0.1em] text-[#8a8077]">合計金額</p>
                <p className="mt-2 font-serif text-4xl tracking-[0.14em]">¥5,000<span className="text-sm">（税込）</span></p>
              </div>
              <button className="mt-7 flex w-full items-center justify-center gap-2 border border-[#b48a3a] px-5 py-3 text-sm tracking-[0.12em] text-[#8a6428]" type="button">
                <RotateCcw size={16} />
                内容をクリア
              </button>
            </section>

            <section className="animate-on-scroll border border-[#d8c7a3] bg-white p-7">
              <h2 className="border-b border-[#d8c7a3] pb-5 font-serif text-xl tracking-[0.12em]">ご利用時のお願い</h2>
              <ul className="mt-6 space-y-4 text-sm leading-7 tracking-[0.06em] text-[#5f5851]">
                {requestItems.map((item) => <li className="pl-4 before:-ml-4 before:mr-3 before:text-[#b48a3a] before:content-['・']" key={item}>{item}</li>)}
              </ul>
            </section>

            <section className="animate-on-scroll border border-[#d8c7a3] bg-white p-7">
              <h2 className="border-b border-[#d8c7a3] pb-5 font-serif text-xl tracking-[0.12em]">キャンセルポリシー</h2>
              <p className="mt-6 text-sm leading-8 tracking-[0.06em] text-[#5f5851]">
                ご予約のキャンセル・変更は、前日18:00までにご連絡をお願いいたします。
                前日18:00以降のキャンセルはご予約料金の50%、当日キャンセルは100%を頂戴いたします。
              </p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
