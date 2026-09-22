import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[760px] items-end overflow-hidden bg-[#17201d] text-white sm:min-h-[820px] lg:min-h-[min(900px,100svh)]">
      <Image
        src="/simon_4.jpg"
        alt="Simon Dalemans in einer achtsamen Begegnung nach einer begleiteten Körper- und Atemarbeit"
        fill
        priority
        sizes="100vw"
        className="-z-30 object-cover object-[66%_center] sm:object-[63%_center] lg:object-[60%_center]"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(13,22,20,0.91)_0%,rgba(13,22,20,0.73)_42%,rgba(13,22,20,0.18)_76%,rgba(13,22,20,0.16)_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(10,18,16,0.42)_0%,rgba(10,18,16,0.05)_34%,rgba(10,18,16,0.82)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_24%_54%,rgba(225,204,169,0.1),transparent_38%)]" />

      <div className="mx-auto w-full max-w-[90rem] px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24 xl:px-16">
        <div className="max-w-[47rem]">
          <p className="eyebrow !text-[#e4d7c4]/75">Atemarbeit · Coaching · Körperarbeit</p>
          <h1 className="mt-6 max-w-full font-serif text-[clamp(3rem,10vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.025em] text-[#fbf6ee] sm:mt-8 sm:max-w-[45rem] sm:leading-[0.88]">
            Raum für Wandel.
            <span className="mt-2 block text-[#d5c2a7]"><span className="block sm:inline">Begleitung</span>{' '}<span className="block sm:inline">mit Tiefe.</span></span>
          </h1>
          <p className="mt-8 max-w-[37rem] text-[1.02rem] leading-8 text-[#f8f1e7] sm:text-[1.12rem] sm:leading-9">
            Ich begleite Menschen dabei, wieder bewusster wahrzunehmen, wo sie stehen – und ihren eigenen nächsten Schritt zu finden.
          </p>
          <p className="mt-4 text-sm font-medium tracking-[0.08em] text-[#eadcc7]/75">Persönlich in Aschaffenburg</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link href="#simon" className="button-primary-dark">Simon kennenlernen</Link>
            <Link href="#haltung" className="button-secondary-dark">So arbeite ich</Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 right-5 hidden items-center gap-3 text-[0.62rem] uppercase tracking-[0.25em] text-white/50 sm:flex sm:right-8 lg:right-12 xl:right-16">
        <span className="h-px w-10 bg-white/30" />
        Simon Dalemans
      </div>
    </section>
  );
}
