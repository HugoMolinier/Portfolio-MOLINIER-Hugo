import React, { useRef, useEffect } from "react";

const sectionStyle = { paddingTop: 52 };
const imageStyle = { borderRadius: 8, height: "auto", width: "100%" };
const imagePhoneStyle = { borderRadius: 8, height: "auto", width: "20%" };
const imgContainerStyle = { display: "flex", padding: "8px 5%", gap: "10%" };

const DyeNTrack = () => {
  const vidRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.play().catch((err) => console.log(err));
    }
  }, []);

  return (
    <main>
      <section id="introduction">
        <p>
          J’ai développé seul l’application mobile <strong>DyeNTrack</strong>,
          un projet full-stack complet qui permet de suivre et d’analyser toutes
          les dimensions du bien-être : entraînement, nutrition, sommeil et
          dépenses caloriques. L’application fonctionne comme un véritable
          cahier d’entraînement numérique, offrant une vision globale et
          personnalisée de l’évolution de l’utilisateur dans le temps grâce à
          des graphiques interactifs et des tableaux de bord clairs. Chaque
          utilisateur peut facilement consulter ses performances passées et
          comprendre l’impact de chaque facteur sur son bien-être global. Le
          produit est déployé sur le Google Play Store et conçu pour être
          utilisé quotidiennement.
        </p>
      </section>

      <section id="organisation" style={sectionStyle}>
        <header style={{ marginBottom: 20 }}>
          <h2>Organisation & Méthodologie</h2>
        </header>
        <p>
          Étant seul sur ce projet, j’ai pris en charge l’ensemble du cycle de
          développement, du back-end au front-end mobile, en passant par la
          conception de l’interface utilisateur et le déploiement cloud. Pour
          structurer le travail, j’ai mis en place une méthodologie agile
          personnelle, organisant les tâches en itérations et utilisant GitHub
          pour le suivi des versions, la gestion des bugs et le contrôle de la
          qualité du code. Cette approche m’a permis de rester concentré, de
          prioriser les fonctionnalités essentielles et d’itérer rapidement sur
          les améliorations.
        </p>
      </section>

      <section id="missions" style={sectionStyle}>
        <header style={{ marginBottom: 20 }}>
          <h2>Conception & Développement Full-Stack</h2>
        </header>
        <p>
          J’ai conçu la base de données et l’API backend avec{" "}
          <strong>Spring Boot</strong> en suivant une architecture hexagonale
          pour garantir modularité, testabilité et évolutivité. L’application
          mobile a été développée en <strong>Kotlin</strong> avec une approche
          Clean Architecture afin d’assurer une expérience utilisateur fluide,
          réactive et cohérente sur toutes les fonctionnalités.
        </p>
        <p>
          La conception a inclus la gestion complète des données liées aux
          utilisateurs, aux séances, aux exercices et à la nutrition. L’objectif
          était de créer un système robuste, capable de synchroniser les données
          locales et cloud sans perte, tout en offrant un rendu visuel clair et
          intuitif.
        </p>
        <br />
        <p>Fonctionnalités clés :</p>
        <ul>
          <li>
            Presets de séances pour créer et réutiliser facilement des modèles
            d’entraînement.
          </li>
          <li>
            Visualisation graphique des performances et du bien-être sur
            différentes périodes.
          </li>
          <li>
            Synchronisation avec Google Health pour centraliser toutes les
            données.
          </li>
          <li>
            Insertion rapide des performances avec récupération automatique des
            charges précédentes.
          </li>
          <li>
            Gestion complète des états utilisateur, avec synchronisation
            automatique selon la connexion.
          </li>
          <li>
            Architecture backend et mobile robuste, sécurisée et scalable pour
            une utilisation intensive.
          </li>
        </ul>
      </section>

      <section id="design" style={sectionStyle}>
        <header style={{ marginBottom: 20 }}>
          <h2>Design</h2>
        </header>
        <p>
          Le design de l’application a été entièrement réalisé avec{" "}
          <strong>Figma</strong>. J’ai créé des maquettes détaillées et des
          prototypes interactifs pour structurer l’interface et optimiser
          l’expérience utilisateur. L’objectif était de proposer des écrans
          clairs, intuitifs et responsives, permettant une navigation fluide sur
          mobile. Chaque écran a été pensé pour réduire les actions nécessaires
          à l’utilisateur et améliorer la lisibilité des informations. Étant mon
          premier vrai design, j’ai consacré beaucoup de temps à
          l’expérimentation et aux ajustements pour atteindre un rendu qui me
          satisfasse pleinement.
        </p>
        <div style={imgContainerStyle}>
          <img
            src="/image/DyeNTrack/Figma.png"
            style={imageStyle}
            alt="Aperçu desgin Figma"
          />
        </div>
      </section>

      <section id="decouvertes" style={sectionStyle}>
        <header style={{ marginBottom: 20 }}>
          <h2>Découvertes Techniques</h2>
        </header>
        <ul>
          <li>
            <strong>Kotlin</strong> : apprentissage approfondi de la
            programmation mobile moderne, gestion des architectures Clean, cycle
            de vie Android et optimisation de l’interface utilisateur pour un
            rendu fluide.
          </li>
          <li>
            <strong>Spring Boot & Java</strong> : conception d’API REST
            performantes, mise en place de l’architecture hexagonale,
            sécurisation des endpoints, gestion des données et respect des
            bonnes pratiques de backend.
          </li>
          <li>
            <strong>SQL</strong> : modélisation et normalisation d’une base de
            données complète pour le suivi des exercices, presets, séries,
            nutrition et physiologie des utilisateurs.
          </li>
          <li>
            <strong>Docker & Azure</strong> : conteneurisation de l’application
            backend, déploiement cloud et mise en place d’outils pour simplifier
            la mise à jour et la maintenance.
          </li>
          <li>
            <strong>Figma</strong> : conception UI/UX, prototypage interactif et
            ajustements constants basés sur les retours des tests utilisateurs
            pour améliorer l’expérience globale.
          </li>
          <li>
            <strong>Architecture Clean & Hexagonal</strong> : structuration du
            code backend et mobile pour rendre l’application maintenable,
            scalable et facilement modifiable, permettant d’adapter ou de
            changer de stack sans perturber les fonctionnalités existantes.
          </li>
        </ul>
      </section>

      <section id="problèmes" style={sectionStyle}>
        <header style={{ marginBottom: 20 }}>
          <h2>Problèmes rencontrés</h2>
        </header>
        <p>
          Gérer seul un projet full-stack a été un véritable défi. La
          synchronisation entre les données locales et cloud devait être fiable
          pour éviter toute perte de données. La structuration de la base de
          données pour gérer les presets et exercices planifiés a demandé une
          attention particulière. De plus, l’intégration avec Google Health et
          la gestion des permissions utilisateurs ont nécessité de nombreuses
          itérations et tests pour garantir un fonctionnement fluide et
          sécurisé.
        </p>
      </section>

      <section id="résultats" style={sectionStyle}>
        <header style={{ marginBottom: 20 }}>
          <h2>Résultats & Présentation</h2>
        </header>
        <ul>
          <li>
            Planification et suivi complet des séances d’entraînement de manière
            intuitive.
          </li>
          <li>
            Visualisation claire des performances et du bien-être grâce à des
            graphiques interactifs.
          </li>
          <li>
            Suivi détaillé des apports nutritionnels et des données
            physiologiques.
          </li>
          <li>
            Synchronisation automatique avec Google Health pour centraliser les
            données.
          </li>
          <li>
            Historique complet des performances et possibilité d’ajuster les
            objectifs selon l’évolution.
          </li>
        </ul>
        <p>
          L’application, disponible sur le Google Play Store, propose une
          interface fluide et intuitive, permettant aux utilisateurs de suivre
          leur progression et d’optimiser leurs routines de manière autonome.
        </p>
        <div style={imgContainerStyle}>
          <img
            src="/image/DyeNTrack/home.png"
            style={imagePhoneStyle}
            alt="Aperçu Application 2"
          />
          <video
            src="/image/DyeNTrack/demo.mp4"
            ref={vidRef}
            muted
            autoPlay
            loop
            style={imagePhoneStyle}
            aria-label="Aperçu video Application"
          />
          <img
            src="/image/DyeNTrack/seance.png"
            style={imagePhoneStyle}
            alt="Aperçu Application 3"
          />
        </div>
      </section>

      <section id="améliorations" style={sectionStyle}>
        <header style={{ marginBottom: 20 }}>
          <h2>Perspectives & Améliorations possibles</h2>
        </header>
        <ul>
          <li>
            Intégration d’une IA prédictive pour anticiper les performances et
            proposer des recommandations personnalisées.
          </li>
          <li>
            Suggestion automatique de séances types et routines optimisées selon
            les progrès de l’utilisateur.
          </li>
          <li>
            Module dédié aux compléments alimentaires pour évaluer leur impact
            sur la performance et le bien-être.
          </li>
          <li>
            Mise en place d’une pipeline CI/CD pour faciliter les mises à jour
            et la maintenance continue de l’application.
          </li>
        </ul>
      </section>

      <section id="apprentissage" style={sectionStyle}>
        <header style={{ marginBottom: 20 }}>
          <h2>Apprentissage</h2>
        </header>
        <ul>
          <li>
            <strong>Full-stack</strong> : gestion complète du projet seul, du
            backend au mobile, en passant par le design et le déploiement cloud.
          </li>
          <li>
            <strong>Architecture & optimisation</strong> : mise en place d’API
            robustes, Clean Architecture mobile et base de données performante.
          </li>
          <li>
            <strong>UI/UX</strong> : conception et prototypage sur Figma, tests
            utilisateurs et amélioration continue de l’expérience utilisateur.
          </li>
          <li>
            <strong>Méthodologie</strong> : planification agile personnelle,
            suivi régulier et gestion autonome de toutes les étapes du projet.
          </li>
        </ul>
        <header style={{ marginBottom: 8, marginTop: 40 }}>
          <h3>En Conclusion</h3>
        </header>
        <p>
          Ce projet m’a permis de développer un produit complet et fonctionnel
          en full-stack, en consolidant mes compétences techniques (Kotlin,
          Java, SQL, backend, cloud) et créatives (UI/UX, design Figma), tout en
          apprenant à gérer un projet complexe en autonomie du début à la fin.
        </p>
      </section>

      <section id="lien" style={sectionStyle}>
        <header style={{ marginBottom: 20 }}>
          <h2>Lien</h2>
        </header>
        <div style={{ gap: "24px", display: "flex", flexDirection: "column" }}>
          <a
            href="https://github.com/HugoMolinier/DyeNTrack-BackEnd"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              textDecoration: "none",
            }}
          >
            <img
              src="/image/icons/other/github.svg"
              alt="GitHub"
              style={{ width: 30, height: 30 }}
            />
            <span className="subtextBoldlink" style={{ fontSize: "14px" }}>
              Projet Dye&Track : Application de suivi du bien-être et de la
              performance
            </span>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.dyentrack.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              textDecoration: "none",
            }}
          >
            <img
              src="/image/icons/other/Google_Play.svg"
              alt="GooglePlay"
              style={{ width: 28, height: 28 }}
            />
            <span className="subtextBoldlink" style={{ fontSize: "14px" }}>
              Lien GooglePlay DyeNTrack
            </span>
          </a>
          <a
            href="http://4.233.56.101:8080/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              textDecoration: "none",
            }}
          >
            <img
              src="/image/DyeNTrack/icon-playstore.png"
              alt="GooglePlay"
              style={{ width: 28, height: 28 }}
            />
            <span className="subtextBoldlink" style={{ fontSize: "14px" }}>
              Site Vitrine DyeNTrack
            </span>
          </a>
          <a
            href="https://www.figma.com/design/O4XrxSHYYXy47vv6vFBhAZ/Untitled?node-id=0-1&t=CrWYIJf4ZJeA1SY0-1"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              textDecoration: "none",
            }}
          >
            <img
              src="/image/icons/other/Figma.svg"
              alt="Figma"
              style={{ width: 28, height: 28 }}
            />
            <span className="subtextBoldlink" style={{ fontSize: "14px" }}>
              Lien Figma DyeNTrack
            </span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default DyeNTrack;
