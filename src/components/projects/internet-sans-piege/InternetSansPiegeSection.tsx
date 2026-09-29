import Image from "next/image";

import styles from "./InternetSansPiegeSection.module.scss";

export default function InternetSansPiegeSection() {
  return (
    <section data-motion-scene

      id="internet-sans-piege"
      className={styles.section}
      aria-labelledby="isp-title"
    >
      {/* =====================================================
			    ARRIÈRE-PLAN
			===================================================== */}

      <div className={styles.background} aria-hidden="true">
        <Image
          src="/images/projects/internet-sans-piege/isp-decor.webp"
          alt=""
          fill
          sizes="100vw"
          className={styles.backgroundImage}
        />

        <div className={styles.backgroundOverlay} />

        <div className={styles.backgroundGlowLeft} />

        <div className={styles.backgroundGlowRight} />
      </div>

      {/* =====================================================
			    COMPOSITION
			===================================================== */}

      <div className={styles.inner}>
        {/* =================================================
				    CONTENU GAUCHE
				================================================= */}

        <div className={styles.content}>
          <div className={styles.projectEyebrow}>
            <span>02</span>

            <i aria-hidden="true" />

            <p>Projet sélectionné</p>

            <b aria-hidden="true" />
          </div>

          <header className={styles.header}>
            <h2 id="isp-title">
              <span>Internet</span>

              <strong>Sans Piège</strong>
            </h2>

            <p className={styles.kicker}>
              Sensibilisation aux risques numériques
            </p>
          </header>

          <div className={styles.intro}>
            <p>
              Internet Sans Piège est une expérience interactive de
              sensibilisation aux risques numériques.
            </p>

            <p>
              À travers des situations inspirées du quotidien, l’utilisateur
              teste ses réflexes face au phishing, aux faux SMS, à l’usurpation
              d’identité et aux réseaux Wi-Fi piégés.
            </p>
          </div>

          <div className={styles.separator} aria-hidden="true">
            <span />

            <i />

            <span />
          </div>

          <div className={styles.meta}>
            <div>
              <span>Rôle</span>

              <p>
                Conception
                <br />& développement
              </p>
            </div>

            <div>
              <span>Stack</span>

              <p>
                React · Vite
                <br />
                Netlify
              </p>
            </div>

            <div>
              <span>Focus</span>

              <p>
                Pédagogie interactive
                <br />
                Responsive
              </p>
            </div>
          </div>

          <div className={styles.ctaGroup}>
            <a
              href="https://internet-sans-piege.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className={styles.cta}
            >
              <span className={styles.ctaDot} aria-hidden="true" />
              <span>Découvrir le projet</span>
              <i aria-hidden="true">↗</i>
            </a>

            <a
              href="/projets/internet-sans-piege"
              className={styles.caseStudyLink}
            >
              Voir l’étude de cas
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* =================================================
				    VISUELS DROITE
				================================================= */}

        <div className={styles.visuals}>
          {/* =============================================
					    01 — HOME
					============================================= */}

          <div className={styles.visualPrimary}>
            <div className={styles.visualLabel}>
              <span>01</span>

              <p>Entrer</p>
            </div>

            <div className={styles.screenCard}>
              <div className={styles.screenChrome} aria-hidden="true">
                <span />
                <span />
                <span />

                <i>SECURE_NODE / ONLINE</i>
              </div>

              <div className={styles.screenViewport}>
                <Image
                  src="/images/projects/internet-sans-piege/isp-home.webp"
                  alt="Écran d’accueil du projet Internet Sans Piège"
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 90vw, 54vw"
                  className={styles.screenImage}
                />
              </div>

              <div className={styles.screenReflection} aria-hidden="true" />
            </div>
          </div>

          {/* =============================================
					    02 — DIAGNOSTIC
					============================================= */}

          <div className={styles.visualSecondary}>
            <div className={styles.visualLabel}>
              <span>02</span>

              <p>Analyser</p>
            </div>

            <div className={styles.screenCard}>
              <div className={styles.screenChrome} aria-hidden="true">
                <span />
                <span />
                <span />

                <i>DIAGNOSTIC / RUNNING</i>
              </div>

              <div className={styles.screenViewport}>
                <Image
                  src="/images/projects/internet-sans-piege/isp-diagnostic.webp"
                  alt="Écran de diagnostic du projet Internet Sans Piège"
                  fill
                  sizes="(max-width: 700px) 75vw, (max-width: 1100px) 55vw, 30vw"
                  className={styles.screenImage}
                />
              </div>
            </div>
          </div>

          {/* =============================================
					    03 — RÉSULTATS
					============================================= */}

          <div className={styles.visualTertiary}>
            <div className={styles.visualLabel}>
              <span>03</span>

              <p>Comprendre</p>
            </div>

            <div className={styles.screenCard}>
              <div className={styles.screenChrome} aria-hidden="true">
                <span />
                <span />
                <span />

                <i>RISK_SCORE / CALCULATED</i>
              </div>

              <div className={styles.screenViewport}>
                <Image
                  src="/images/projects/internet-sans-piege/isp-results.webp"
                  alt="Écran de résultats du projet Internet Sans Piège"
                  fill
                  sizes="(max-width: 700px) 85vw, (max-width: 1100px) 65vw, 36vw"
                  className={styles.screenImage}
                />
              </div>
            </div>
          </div>

          {/* =============================================
					    LECTURE — bloc de données discret, sans
					    radar ni ligne de flux
					============================================= */}

          <div className={styles.dataBlock} aria-hidden="true">
            <span>THREAT_ANALYSIS / READY</span>

            <span>SECURE_NODE / 02</span>

            <span>RISK_SCORE / CALCULATED</span>
          </div>
        </div>
      </div>

      {/* =====================================================
			    RAIL
			===================================================== */}

      {/* Décors au premier plan : les masques préservent le texte et les captures. */}
      <div className={styles.foregroundLeft} aria-hidden="true">
        <Image
          src="/images/projects/internet-sans-piege/isp-decor-left.webp"
          alt=""
          fill
          sizes="(max-width: 700px) 70vw, 38vw"
          className={styles.foregroundImage}
        />
      </div>
      <div className={styles.foregroundRight} aria-hidden="true">
        <Image
          src="/images/projects/internet-sans-piege/isp-decor-right.webp"
          alt=""
          fill
          sizes="(max-width: 1050px) 30vw, 24vw"
          className={styles.foregroundImage}
        />
      </div>

      <aside className={styles.projectRail} aria-hidden="true">
        <span className={styles.projectRailCurrent}>02</span>

        <span className={styles.projectRailSlash}>/</span>

        <span>02</span>

        <i />

        <small>Projets</small>
      </aside>

      <div className={styles.vignette} aria-hidden="true" />
    </section>
  );
}
