import CtaButton from '@/components/CtaButton';
import SectionTitle from '@/components/SectionTitle';

const benefitItems = [
  '投稿が止まらなくなる',
  '世界観を崩さず続けられる',
  '撮影ストレスが減る',
  'AIを実用化できる',
  '“頑張る編集”をやめられる'
];

const targetItems = [
  '投稿したいのに止まる人',
  'リールが重い人',
  'AIを使いたい人',
  '世界観を崩したくない人',
  '継続できない人'
];

const stepItems = [
  { title: '① ChatGPT', detail: '台本・構成・フック' },
  { title: '② Grok', detail: '世界観素材生成' },
  { title: '③ CapCut', detail: '10分編集' }
];

export default function Home() {
  return (
    <main className="bg-white text-[#111111]">
      <section className="editorial-container section-space min-h-[85vh] content-center">
        <p className="mb-10 text-xs tracking-[0.2em] text-[#A63A3A] uppercase fade-in">Editorial Reel Class</p>
        <h1 className="max-w-2xl text-4xl leading-tight md:text-6xl fade-in">10分でリール動画を作る講座</h1>
        <p className="mt-8 text-base leading-8 md:text-lg fade-in">ChatGPT × Grok × CapCut</p>
        <p className="mt-4 max-w-xl text-sm leading-8 md:text-base fade-in">
          撮影なしでも、<br />
          “投稿できる状態”を作る。
        </p>
        <div className="mt-12 fade-in">
          <CtaButton label="参加する" />
        </div>
      </section>

      <section className="editorial-container section-space border-t border-black/10">
        <SectionTitle title="投稿が止まる理由は、
センス不足じゃない。" subtitle="編集が重いだけ。" />
        <ul className="space-y-4 text-sm leading-8 md:text-base">
          <li>・何を投稿するか迷う</li>
          <li>・撮影で止まる</li>
          <li>・編集で疲れる</li>
          <li>・気づくと数日経ってる</li>
        </ul>
        <p className="mt-8 text-sm leading-8 md:text-base">その状態を、AIで軽くする。</p>
      </section>

      <section className="editorial-container section-space border-t border-black/10">
        <SectionTitle eyebrow="Curriculum" title="3ステップで、
投稿まで進める。" />
        <div className="grid gap-8">
          {stepItems.map((step) => (
            <article key={step.title} className="border-b border-black/10 pb-6">
              <h3 className="text-2xl md:text-3xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-8 md:text-base">↓ {step.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-container section-space border-t border-black/10">
        <SectionTitle title="続けるための実利だけを、
静かに積む。" />
        <ul className="space-y-4 text-sm leading-8 md:text-base">
          {benefitItems.map((item) => (
            <li key={item}>・{item}</li>
          ))}
        </ul>
      </section>

      <section className="editorial-container section-space border-t border-black/10">
        <SectionTitle title="理解だけで終わらない。" subtitle="実際に1本、投稿レベルまで完成。" />
      </section>

      <section className="editorial-container section-space border-t border-black/10">
        <SectionTitle title="この講座が合う人" />
        <ul className="space-y-4 text-sm leading-8 md:text-base">
          {targetItems.map((item) => (
            <li key={item}>・{item}</li>
          ))}
        </ul>
      </section>

      <section className="editorial-container section-space border-y border-black/10">
        <SectionTitle title="開催情報" />
        <dl className="space-y-4 text-sm leading-8 md:text-base">
          <div className="flex justify-between border-b border-black/10 pb-2">
            <dt>開催形式</dt>
            <dd>オンライン開催</dd>
          </div>
          <div className="flex justify-between border-b border-black/10 pb-2">
            <dt>所要時間</dt>
            <dd>60〜90分</dd>
          </div>
          <div className="flex justify-between border-b border-black/10 pb-2">
            <dt>定員</dt>
            <dd>少人数制</dd>
          </div>
          <div className="flex justify-between border-b border-black/10 pb-2">
            <dt>価格</dt>
            <dd className="text-[#A63A3A]">¥9,800</dd>
          </div>
        </dl>
        <div className="mt-12">
          <CtaButton label="参加する" />
        </div>
      </section>

      <section id="entry" className="editorial-container section-space border-b border-black/10">
        <SectionTitle title="参加申し込み" subtitle="必要事項を入力して送信してください。24時間以内にご案内をお送りします。" />
        <form name="course-entry" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thanks" className="space-y-6">
          <input type="hidden" name="form-name" value="course-entry" />
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <label className="block">
            <span className="mb-2 block text-xs tracking-[0.12em]">お名前</span>
            <input name="name" required className="w-full border-b border-black/30 bg-transparent px-1 py-3 text-sm outline-none focus:border-[#A63A3A]" />
          </label>

          <label className="block">
            <span className="mb-2 block text-xs tracking-[0.12em]">メールアドレス</span>
            <input type="email" name="email" required className="w-full border-b border-black/30 bg-transparent px-1 py-3 text-sm outline-none focus:border-[#A63A3A]" />
          </label>

          <label className="block">
            <span className="mb-2 block text-xs tracking-[0.12em]">今いちばん詰まっていること</span>
            <textarea name="message" rows={4} className="w-full border border-black/20 bg-transparent px-3 py-3 text-sm outline-none focus:border-[#A63A3A]" />
          </label>

          <button type="submit" className="inline-flex items-center border border-[#A63A3A] px-8 py-3 text-sm tracking-[0.16em] text-[#A63A3A] transition hover:bg-[#A63A3A] hover:text-white">申し込む</button>
        </form>
      </section>

    </main>
  );
}
