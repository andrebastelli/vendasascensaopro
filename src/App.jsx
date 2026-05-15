const CHECKOUT_URL = "https://chk.eduzz.com/801E4VKNW7";

function Logo() {
  return (
    <img
  src="/ascensao-logo.png"
  alt="Ascensão Pro"
  className="h-10 md:h-12 w-auto"
/>
  );
}

function CTA({ children = "Quero me inscrever agora" }) {
  return (
    <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-premium">
      {children}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    </a>
  );
}

export default function App() {
  const testimonials = [
    { img: "/amanda-dalpra.png", name: "Amanda Dalprá", role: "Especialista em vendas · Fundadora do método Avance", text: "Estava com projeto travado, sem clareza e sem processo… e conseguiu colocar o projeto em prática com segurança e execução." },
    { img: "/transnew.png", name: "Nilton e William", role: "Proprietários da Transnew", text: "Estavam sem direção, se sentindo invisíveis… e saíram com posicionamento mais claro, metas e um plano realista." },
    { img: "/soraya-massaro.png", name: "Soraya Massaro", role: "Criadora do método Direção Certa", text: "Estava no modo sobrevivência… e conseguiu organizar decisões e retomar consistência no crescimento da sua empresa." },
  ];

  const steps = [
    { n: "01", t: "Clareza de posicionamento" },
    { n: "02", t: "Confiança na própria voz" },
    { n: "03", t: "Metas claras e objetivas" },
    { n: "04", t: "Plano que cabe na rotina" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-cream/75 border-b border-black/5">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
          <Logo />
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-gold transition-colors">
            Inscrever-se
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          </a>
        </div>
      </header>

      <section className="relative px-5 md:px-8 pt-16 md:pt-28 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto text-center reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-xs md:text-sm font-medium text-ink/80 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Jornada do Potencial · 4 meses de transformação
          </span>
          <h1 className="font-display font-black leading-[1.05] text-ink text-4xl md:text-6xl lg:text-7xl">
            Se você quer se <span className="text-gold gold-underline">transformar</span> numa psicóloga reconhecida,{" "}
            <span className="text-gold gold-underline">valorizada</span> e bem paga, acompanhe abaixo.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-ink/60 max-w-2xl mx-auto leading-relaxed">
            O que eu vou te falar nas próximas linhas tem o poder de mudar completamente a sua carreira, vem comigo.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <CTA />
            <span className="text-xs text-ink/50">Vagas limitadas · Acesso imediato</span>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </section>

      <section className="px-5 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto grid md:grid-cols-5 gap-10 md:gap-14 items-center">
          <div className="md:col-span-3 space-y-5 text-base md:text-lg leading-relaxed text-ink/90">
            <p>Por muito tempo, a minha rotina era assim: eu atendia, resolvia mil coisas, tentava dar conta de conteúdo, respondia mensagens… e mesmo assim eu tinha a sensação de que eu estava sempre correndo, mas sem sair do lugar.</p>
            <p>Eu via outras psicólogas crescendo, sendo reconhecidas, tendo uma agenda mais organizada… e eu pensava: <strong>"o que eu estou fazendo de errado?"</strong></p>
            <p>E a verdade é que eu ficava dividida entre duas pressões: eu queria ser ética, fazer um trabalho sério… mas também precisava que aquilo virasse um negócio sustentável.</p>
          </div>
          <div className="md:col-span-2">
            <div className="rounded-3xl overflow-hidden shadow-elegant ring-1 ring-black/5">
              <img src="https://i.ibb.co/JFCNGftn/imagem1.png" alt="Rotina sobrecarregada" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-8 py-10 md:py-14">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base md:text-lg text-ink/80">Só que eu não tinha clareza. Eu tentava fazer um pouco de tudo e no fim… nada parecia consistente.</p>
          <p className="mt-4 text-base md:text-lg text-ink/80">E por muito tempo eu acreditei que o problema era falta de disciplina, ou falta de coragem, ou até falta de talento.</p>
          <h2 className="mt-10 font-display text-3xl md:text-5xl font-bold leading-tight">
            Não era falta de potencial. <span className="text-gold">Era falta de estrutura.</span>
          </h2>
        </div>
      </section>

      <section className="px-5 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto grid md:grid-cols-5 gap-10 md:gap-14 items-center">
          <div className="md:col-span-2 order-2 md:order-1">
            <div className="rounded-3xl overflow-hidden shadow-elegant ring-1 ring-black/5">
              <img src="https://i.ibb.co/bM1wXk3g/imagem2.png" alt="Clareza e estrutura" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="md:col-span-3 order-1 md:order-2 space-y-5 text-base md:text-lg leading-relaxed text-ink/90">
            <p>Eu não precisava me esforçar mais.</p>
            <p>Eu precisava de clareza sobre quem eu sou profissionalmente, qual é a minha voz, qual espaço eu queria ocupar no mercado… e qual era a estratégia que eu ia sustentar sem me trair e sem me esgotar.</p>
            <p>Quando eu entendi isso, ficou muito claro que crescer com autenticidade não é <strong>"postar mais"</strong> ou <strong>"fazer mais coisas"</strong>.</p>
            <p className="text-xl font-display font-semibold text-ink">É alinhar identidade, mercado e plano.</p>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-8 py-16 md:py-24 bg-white/60 border-y border-black/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-sm tracking-[0.25em] text-gold uppercase mb-4">O método</p>
          <h2 className="text-center font-display text-3xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            Aprendi 4 etapas fundamentais
          </h2>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s) => (
              <div key={s.n} className="group relative rounded-2xl bg-cream border border-black/5 p-7 shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1">
                <div className="font-display text-4xl text-gold/70 group-hover:text-gold transition-colors">{s.n}</div>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">{s.t}</h3>
                <div className="absolute inset-x-7 bottom-5 h-px bg-gradient-to-r from-gold/40 to-transparent" />
              </div>
            ))}
          </div>

          <div className="mt-20 grid md:grid-cols-5 gap-10 md:gap-14 items-center">
            <div className="md:col-span-3">
              <p className="text-base md:text-lg leading-relaxed text-ink/90">
                Hoje eu ajudo profissionais a transformarem bloqueios em resultados consistentes através de <strong>3 pilares</strong>:
              </p>
              <ul className="mt-6 space-y-3">
                {["Estratégia", "Acompanhamento", "Ação direcionada"].map((p) => (
                  <li key={p} className="flex items-center gap-3 text-lg font-display font-semibold text-ink">
                    <span className="h-2 w-2 rounded-full bg-gradient-gold" />
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-base md:text-lg text-ink/90 leading-relaxed">
                Para isso, eu criei a <strong className="text-gold">Jornada do Potencial Ascensão Pro</strong>. Durante 4 meses, você terá um caminho claro, com direção, acompanhamento e execução.
              </p>
              <p className="mt-4 text-xl font-display italic text-ink">Não é mais sobre fazer mais. É sobre fazer certo.</p>
            </div>
            <div className="md:col-span-2">
              <div className="rounded-3xl overflow-hidden shadow-elegant ring-1 ring-black/5">
                <img src="https://i.ibb.co/BHH2xNzW/imagem3.png" alt="Transformação e resultado" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-8 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm tracking-[0.25em] text-gold uppercase mb-3">Depoimentos</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">E por que eu acredito tanto nisso?</h2>
            <p className="mt-4 text-lg text-ink/60">Porque isso já funcionou para pessoas reais.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <article key={t.name} className="group rounded-3xl bg-white border border-black/5 p-7 shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden ring-2 ring-gold/30">
                    <img src={t.img} alt={t.name} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{t.name}</h3>
                    <p className="text-xs text-ink/60 leading-snug">{t.role}</p>
                  </div>
                </div>
                <svg className="mt-5 text-gold/60" width="28" height="20" viewBox="0 0 28 20" fill="currentColor"><path d="M0 20V12C0 5 4 1 11 0v4C7 5 5 7 5 11h6v9H0Zm17 0V12C17 5 21 1 28 0v4c-4 1-6 3-6 7h6v9H17Z"/></svg>
                <p className="mt-3 text-ink/85 leading-relaxed">{t.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-14 text-center"><CTA /></div>
        </div>
      </section>

      <section className="px-5 md:px-8 py-20 md:py-28 bg-ink text-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-6xl font-black leading-[1.05]">
              O problema não é esforço.<br/>
              <span className="text-gold">É falta de método.</span>
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-10 md:gap-14">
            <div>
              <h3 className="font-display text-2xl font-semibold mb-6">O que está travando você hoje?</h3>
              <ul className="space-y-4">
                {[
                  "Sobrecarga com tarefas operacionais e pouco tempo para crescer.",
                  "Falta de clareza sobre posicionamento, voz e marca no mercado.",
                  "Ausência de metas claras e de um plano de ação estratégico.",
                  "Crescimento no improviso, sem um modelo de negócio sólido.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-cream/85">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-cream/70 italic">Continuar assim significa repetir os mesmos erros e perder anos.</p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold mb-6 text-gold">O que você vai conquistar:</h3>
              <ul className="space-y-4">
                {[
                  "Um modelo de negócio sólido, autêntico e lucrativo.",
                  "Clareza sobre sua voz, posicionamento e metas estratégicas.",
                  "Um plano de ação claro para sair do improviso.",
                  "Mais tempo, autonomia e confiança em cada decisão.",
                  "Reconhecimento como referência na sua área.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-cream/90">
                    <svg className="mt-1 flex-shrink-0 text-gold" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-16 text-center">
            <CTA />
            <p className="mt-4 text-sm text-cream/60">Comece hoje sua Jornada do Potencial</p>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-8 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm tracking-[0.25em] text-gold uppercase mb-4">Próximo passo</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Sua próxima fase começa <span className="text-gold">aqui</span>.
          </h2>
          <p className="mt-5 text-lg text-ink/60">4 meses. Um método. Acompanhamento real. Resultados consistentes.</p>
          <div className="mt-10"><CTA>Quero me inscrever na Jornada</CTA></div>
        </div>
      </section>

      <footer className="border-t border-black/10 py-10 px-5 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink/60">
          <img
  src="/ascensao-logo.png"
  alt="Ascensão Pro"
  className="h-8 md:h-10 w-auto"
/>
          <p>© {new Date().getFullYear()} Ascensão Pro · Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
