import type { LucideIcon } from 'lucide-react';
import { ArrowRight, CalendarDays, Camera, Coffee, Hand, HelpCircle, ShieldCheck, VolumeX } from 'lucide-react';
import firstVisitHero from '../assets/generated/reservation-hero.png';

type IconCard = [string, LucideIcon, string, string];
type TextCard = [string, string];

const flow: IconCard[] = [
  ['01', CalendarDays, 'ご予約', 'ご予約はオンラインにて承っております。ご希望の日時をお選びください。'],
  ['02', ShieldCheck, 'ご来店', 'ご予約時間の5分前を目安にご来店ください。スタッフがご案内いたします。'],
  ['03', Coffee, 'お席へご案内', 'お好みのお席へご案内します。ドリンクやメニューをお選びください。'],
  ['04', Hand, '静かな時間を楽しむ', '猫たちとの穏やかな時間を、どうぞゆっくりお過ごしください。'],
];

const manners: [LucideIcon, string, string][] = [
  [Hand, '猫のペースを大切に', '猫たちはそれぞれ気分や距離感があります。そっと見守り、猫から近づいてくるのを待ちましょう。'],
  [Hand, 'やさしく触れる', '触れるときは、猫の体や頭の正面ではなく、あごの下や背中をやさしく撫でてあげてください。'],
  [Camera, 'フラッシュ撮影はご遠慮ください', '猫たちに負担がかかるため、フラッシュ・強い光の撮影はお控えください。自然光での撮影をお願いします。'],
  [VolumeX, '静かな声で', '大きな声や音は猫たちを驚かせてしまいます。静かな声で、穏やかな時間を一緒に作りましょう。'],
];

const requests: TextCard[] = [
  ['ご利用時間', 'ご利用はご予約時間から最大90分までとなります。延長はできません。'],
  ['ワンドリンク制', 'お一人様につきワンドリンクのご注文をお願いいたします。'],
  ['手指の消毒', 'ご来店時には手指の消毒にご協力ください。'],
  ['靴下の着用', '靴下の着用をお願いしております。店内での販売もございます。'],
  ['飲食物の持ち込み', '店内への飲食物の持ち込みはご遠慮ください。'],
  ['お子様のご利用', '中学生以上の方よりご利用いただけます。'],
];

const faqs: TextCard[] = [
  ['予約は必要ですか？', '静かな空間を保つため、事前予約をおすすめしております。空きがある場合のみ当日受付も可能です。'],
  ['何分前に行けばよいですか？', 'ご予約時間の5分前を目安にお越しください。早すぎるご来店はお席の準備中の場合がございます。'],
  ['猫を抱っこしてもいいですか？', '猫の負担を避けるため、抱っこはご遠慮いただいております。猫から近づいてきた際にやさしく触れてください。'],
  ['写真や動画の撮影はできますか？', '撮影は可能です。フラッシュ、ライト、長時間の追いかけ撮影はお控えください。'],
  ['キャンセルや変更はできますか？', '前日18:00まで変更を承ります。以降はキャンセル料が発生する場合がございます。'],
];

export function FirstVisitPage() {
  return (
    <main className="bg-[#fbfaf7] text-[#24211e]">
      <section className="relative min-h-[430px] overflow-hidden border-b border-[#c7a35a]/40 bg-white">
        <img className="luxury-image absolute inset-0 h-full w-full object-cover object-top opacity-80" src={firstVisitHero} alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/5" />
        <div className="relative mx-auto flex min-h-[430px] max-w-6xl items-center px-6 py-24">
          <div className="animate-[fadeIn_0.8s_ease-out] max-w-xl">
            <h1 className="font-serif text-5xl font-normal tracking-[0.18em] md:text-6xl">初めての方へ</h1>
            <p className="mt-7 font-serif text-xl leading-9 tracking-[0.14em]">
              猫たちと心地よく過ごすための、<br />
              小さなご案内。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionTitle>ご利用の流れ</SectionTitle>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {flow.map(([number, Icon, title, text], index) => (
            <article className="animate-on-scroll relative border border-[#d8c7a3] bg-white px-7 py-9 text-center" key={title}>
              {index < flow.length - 1 && <span className="absolute -right-4 top-1/2 hidden text-3xl text-[#c7a35a] md:block">›</span>}
              <p className="font-serif text-2xl tracking-[0.18em] text-[#b48a3a]">{number}</p>
              <Icon className="mx-auto mt-6 text-[#b48a3a]" size={38} strokeWidth={1.2} />
              <h3 className="mt-5 font-serif text-xl tracking-[0.12em]">{title}</h3>
              <p className="mt-5 text-sm leading-7 tracking-[0.06em] text-[#6a625b]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-24">
        <SectionTitle>猫との接し方</SectionTitle>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {manners.map(([Icon, title, text]) => (
            <article className="animate-on-scroll border border-[#d8c7a3] bg-white px-7 py-9 text-center" key={title}>
              <Icon className="mx-auto text-[#b48a3a]" size={40} strokeWidth={1.2} />
              <h3 className="mt-7 font-serif text-lg tracking-[0.1em]">{title}</h3>
              <p className="mt-5 text-sm leading-7 tracking-[0.06em] text-[#6a625b]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-24">
        <SectionTitle>お過ごしいただく際のお願い</SectionTitle>
        <div className="mt-12 grid overflow-hidden border border-[#d8c7a3] bg-white md:grid-cols-6">
          {requests.map(([title, text]) => (
            <article className="animate-on-scroll border-b border-r border-[#d8c7a3] px-6 py-8 text-center md:border-b-0" key={title}>
              <ShieldCheck className="mx-auto text-[#b48a3a]" size={36} strokeWidth={1.2} />
              <h3 className="mt-5 font-serif text-lg tracking-[0.08em]">{title}</h3>
              <p className="mt-4 text-xs leading-6 tracking-[0.05em] text-[#6a625b]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-24">
        <SectionTitle>よくあるご質問</SectionTitle>
        <div className="animate-on-scroll mt-12 overflow-hidden border border-[#d8c7a3] bg-white">
          {faqs.map(([question, answer]) => (
            <details className="group border-b border-[#d8c7a3] last:border-b-0" key={question}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-7 py-5 text-sm tracking-[0.08em]">
                <span className="flex items-center gap-4">
                  <HelpCircle className="text-[#b48a3a]" size={18} strokeWidth={1.5} />
                  {question}
                </span>
                <span className="transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="px-14 pb-6 text-sm leading-7 tracking-[0.06em] text-[#6a625b]">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="border-y border-[#d8c7a3] bg-white">
        <div className="mx-auto grid max-w-6xl items-center md:grid-cols-[1fr_1fr]">
          <div className="h-72 overflow-hidden md:h-full">
            <img className="luxury-image h-full w-full object-cover object-bottom opacity-85" src={firstVisitHero} alt="" />
          </div>
          <div className="animate-on-scroll px-8 py-12 md:px-16">
            <h2 className="font-serif text-3xl tracking-[0.12em]">はじめてのご予約はこちら</h2>
            <p className="mt-5 text-sm leading-8 tracking-[0.08em] text-[#6a625b]">
              静かで上質な時間を、ぜひご体験ください。
            </p>
            <a
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-[6px] bg-[#b48a3a] px-12 py-4 text-sm tracking-[0.16em] text-white transition hover:bg-[#9a742d]"
              href="/reservation"
            >
              予約ページへ進む
              <ArrowRight size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ children }: { children: string }) {
  return (
    <div className="flex items-center justify-center gap-6">
      <span className="h-px w-20 bg-[#c7a35a]/60" />
      <h2 className="font-serif text-3xl tracking-[0.14em]">{children}</h2>
      <span className="h-px w-20 bg-[#c7a35a]/60" />
    </div>
  );
}
