import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  Mail,
  MessageCircle,
} from "lucide-react";

const works = [
  {
    title: "Akhenaton",
    year: "2026",
    medium: "Acrílica sobre tela",
    dimensions: "0,50 × 0,50 m",
    image: "/assets/akhenaton.webp",
    span: "span-5",
  },
  {
    title: "Torero",
    year: "2026",
    medium: "Óleo, acrílica seca e pastel oleoso sobre madeira",
    dimensions: "0,90 × 1,20 m",
    image: "/assets/torero.webp",
    span: "span-7",
  },
  {
    title: "O Agricultor",
    year: "2025",
    medium: "Acrílica sobre tela",
    dimensions: "0,50 × 0,50 m",
    image: "/assets/o-agricultor.webp",
    span: "span-4",
  },
  {
    title: "O Pirarucu",
    year: "2025",
    medium: "Óleo sobre tela",
    dimensions: "0,60 × 1,00 m",
    image: "/assets/o-pirarucu.webp",
    span: "span-8",
  },
  {
    title: "KR!A",
    year: "2024",
    medium: "Estudos originais, acrílica e pastel oleoso sobre papel",
    dimensions: "0,80 × 1,00 m",
    image: "/assets/kria.webp",
    span: "span-7",
  },
  {
    title: "Sound of Silence",
    year: "2024",
    medium: "Acrílica sobre tela",
    dimensions: "1,50 × 1,40 m",
    image: "/assets/sound-of-silence.webp",
    span: "span-5",
  },
  {
    title: "Tinto",
    year: "2023",
    medium: "Acrílica sobre tela",
    dimensions: "1,50 × 1,00 m",
    image: "/assets/tinto.webp",
    span: "span-8",
  },
  {
    title: "Data Venia",
    year: "2022",
    medium: "Acrílica sobre tela",
    dimensions: "1,20 × 1,00 m",
    image: "/assets/data-venia.webp",
    span: "span-4",
  },
  {
    title: "Projeção Astral",
    year: "2020",
    medium: "Acrílica sobre tela",
    dimensions: "1,30 × 1,00 m",
    image: "/assets/projecao-astral.webp",
    span: "span-12",
  },
];

const research = [
  {
    number: "01",
    title: "Braille",
    text: "Descrições táteis integram a moldura e tornam a obra acessível a pessoas cegas e com baixa visão.",
  },
  {
    number: "02",
    title: "Tato",
    text: "Texturas e materialidades deslocam a experiência para além do testemunho puramente visual.",
  },
  {
    number: "03",
    title: "Som",
    text: "Música e frequências ampliam a atmosfera sensorial e a leitura emocional de cada trabalho.",
  },
  {
    number: "04",
    title: "Poesia",
    text: "Palavras acompanham a imagem e abrem novas camadas de interpretação e memória.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className="site-header">
        <a className="header-brand" href="#inicio" aria-label="Felipe Cavalcanti, início">
          Felipe Cavalcanti
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#obras">Obras</a>
          <a href="#pesquisa">Pesquisa</a>
          <a href="#trajetoria">O artista</a>
          <a href="#contato">Contato</a>
        </nav>

        <details className="mobile-nav">
          <summary>Menu</summary>
          <nav aria-label="Navegação para celular">
            <a href="#obras">Obras</a>
            <a href="#pesquisa">Pesquisa</a>
            <a href="#trajetoria">O artista</a>
            <a href="#contato">Contato</a>
          </nav>
        </details>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src="/assets/felipe-atelier.webp"
            alt="Felipe Cavalcanti sentado em seu ateliê, cercado por pinturas"
            fetchPriority="high"
          />
          <div className="hero-wash" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">Artista visual · Goiânia, Brasil</p>
            <h1 id="hero-title">
              Felipe
              <br />
              Cavalcanti
            </h1>
            <a className="hero-link" href="#obras">
              Conhecer a obra <ArrowDown aria-hidden="true" size={18} />
            </a>
          </div>
        </section>

        <section className="featured section-shell" aria-labelledby="featured-title">
          <div className="featured-image-wrap">
            <img
              src="/assets/ciranda.webp"
              alt="Ciranda, pintura de Felipe Cavalcanti"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="featured-copy">
            <p className="section-index">Obra em destaque · 2025</p>
            <h2 id="featured-title">Ciranda</h2>
            <dl className="art-data">
              <div>
                <dt>Técnica</dt>
                <dd>Acrílica sobre tela</dd>
              </div>
              <div>
                <dt>Dimensões</dt>
                <dd>1,50 × 1,50 m</dd>
              </div>
            </dl>
            <a className="text-link" href="#obras">
              Ver obras selecionadas <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          </div>
        </section>

        <section className="manifesto" aria-label="Síntese da pesquisa artística">
          <span className="quote-mark" aria-hidden="true">“</span>
          <blockquote>
            Investigo a figura humana como território de escuta.
            <br />
            Há aquilo que os olhos veem e aquilo que só a sensibilidade é capaz
            de perceber.
          </blockquote>
        </section>

        <section className="works section-shell" id="obras" aria-labelledby="works-title">
          <div className="section-heading">
            <p className="section-index">01 · Obras</p>
            <h2 id="works-title">Obras selecionadas</h2>
            <p>
              Personagens, símbolos e camadas de cor que procuram dar forma à
              vida interior.
            </p>
          </div>

          <div className="works-grid">
            {works.map((work) => (
              <figure className={`work-card ${work.span}`} key={work.title}>
                <div className="work-image-frame">
                  <img
                    src={work.image}
                    alt={`${work.title}, obra de Felipe Cavalcanti, ${work.year}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption>
                  <div>
                    <h3>{work.title}</h3>
                    <span>{work.year}</span>
                  </div>
                  <p>
                    {work.medium}
                    <br />
                    {work.dimensions}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="research" id="pesquisa" aria-labelledby="research-title">
          <div className="color-rail" aria-hidden="true" />
          <div className="research-inner section-shell">
            <div className="research-intro">
              <p className="section-index">02 · Pesquisa</p>
              <h2 id="research-title">A arte que também se toca, se escuta, se sente.</h2>
              <p>
                A experiência visual é apenas o início. A pesquisa multissensorial
                aproxima pintura, acessibilidade, matéria, som e palavra.
              </p>
              <div className="braille-word" aria-hidden="true">
                ⠁⠥⠎⠉⠥⠇⠞⠁⠗
              </div>
              <span className="braille-caption">“Auscultar”, em Braille</span>
            </div>

            <div className="research-grid">
              {research.map((item) => (
                <article key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about section-shell" id="trajetoria" aria-labelledby="about-title">
          <div className="about-heading">
            <p className="section-index">03 · O artista</p>
            <h2 id="about-title">Entre o visível e o sensível.</h2>
          </div>

          <div className="about-body">
            <div className="about-copy">
              <p className="lead">
                Felipe Cavalcanti é artista visual brasileiro, com base em Goiânia,
                e há cerca de quinze anos desenvolve uma linguagem própria em torno
                da figura humana.
              </p>
              <p>
                Seus personagens emergem de pinceladas livres e expressivas. Olhos
                em número ímpar, bocas, corações e ouvidos tornam-se símbolos de
                perspectivas, sentimentos não ditos, vínculos e escuta profunda.
                Entre acrílica, óleo, desenho e textura, o expressionismo figurativo
                conduz uma investigação sobre emoções, relações humanas e as camadas
                ocultas do eu.
              </p>
              <p>
                Seu percurso atravessou o Direito, o empreendedorismo e a Arquitetura
                e Urbanismo antes da dedicação integral às artes visuais.
              </p>
            </div>

            <aside className="award-card" aria-label="Reconhecimento">
              <span className="award-year">2019</span>
              <p className="award-kicker">Reconhecimento internacional</p>
              <h3>1º lugar em pintura</h3>
              <p>
                Mediterranean Contemporary Art Prize, Itália. Felipe foi o único
                artista brasileiro selecionado para a premiação.
              </p>
            </aside>
          </div>
        </section>

        <section className="contact" id="contato" aria-labelledby="contact-title">
          <div className="contact-inner section-shell">
            <p className="section-index">04 · Contato</p>
            <h2 id="contact-title">Vamos conversar sobre arte.</h2>
            <p className="contact-intro">
              Para exposições, projetos, aquisições e colaborações.
            </p>

            <div className="contact-links">
              <a href="mailto:contato@felipecavalcanti.com">
                <Mail aria-hidden="true" size={22} />
                <span>contato@felipecavalcanti.com</span>
                <ArrowUpRight aria-hidden="true" size={20} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5511912144022"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle aria-hidden="true" size={22} />
                <span>+55 11 91214-4022</span>
                <ArrowUpRight aria-hidden="true" size={20} />
              </a>
              <a
                href="https://www.instagram.com/felipecavalcanti/"
                target="_blank"
                rel="noreferrer"
              >
                <Camera aria-hidden="true" size={22} />
                <span>@felipecavalcanti</span>
                <ArrowUpRight aria-hidden="true" size={20} />
              </a>
            </div>

            <footer>
              <img
                src="/assets/assinatura-felipe-cavalcanti.png"
                alt="Assinatura de Felipe Cavalcanti"
                loading="lazy"
              />
              <div>
                <span>Goiânia · Brasil</span>
                <span>© 2026 Felipe Cavalcanti</span>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
