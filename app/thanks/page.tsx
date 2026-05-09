import CtaButton from '@/components/CtaButton';

export default function ThanksPage() {
  return (
    <main className="editorial-container section-space min-h-screen content-center">
      <p className="text-xs tracking-[0.2em] text-[#A63A3A] uppercase">Thank you</p>
      <h1 className="mt-6 text-4xl leading-tight md:text-6xl">お申し込みを受け付けました。</h1>
      <p className="mt-8 max-w-xl text-sm leading-8 md:text-base">
        ご入力いただいたメールアドレス宛に、開催案内をお送りします。
        しばらくお待ちください。
      </p>
      <div className="mt-12">
        <CtaButton label="トップへ戻る" href="/" />
      </div>
    </main>
  );
}
