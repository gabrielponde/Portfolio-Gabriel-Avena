'use client';

import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../css/Home.module.css';
import { Project, frontendProjects, backendProjects, skills, contacts, fullstackProjects } from '../data/db';
import App from '../components/band/App';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [skillInfo, setSkillInfo] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSkillHover = (info: string) => setSkillInfo(info);
  const handleSkillLeave = () => setSkillInfo(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div>
      {/* Header */}
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        viewport={{ once: false }}
      >
        <img className={styles.headerName} src="/images/logo.png" alt="Logo" />

        <button className={styles.menuButton} onClick={toggleMenu}>
          <div className={`${styles.menuIcon} ${isMenuOpen ? styles.menuIconActive : ''}`}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <Link href="#sobre" passHref><span className={styles.navLink}>Sobre</span></Link>
          <Link href="#conhecimentos" passHref><span className={styles.navLink}>Conhecimentos</span></Link>
          <Link href="#projetos" passHref><span className={styles.navLink}>Projetos</span></Link>
          <Link href="#contato" passHref><span className={styles.navLink}>Contato</span></Link>
        </nav>
      </motion.header>

      {/* Seção Hero */}
      <motion.section
        className={styles.heroSection}
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Desenvolvendo <span className={styles.blueText}>aplicações modernas e eficientes</span> para transformar ideias em soluções digitais inovadoras.
          </h1>
          <div className={styles.heroSubtitle}>
            {isClient && (
              <ReactTyped
                strings={['Uma combinação de tecnologia, boas práticas e inovação para transformar ideias em soluções digitais.']}
                typeSpeed={50}
                backSpeed={30}
                backDelay={1000}
                startDelay={500}
                loop={false}
                showCursor={true}
                cursorChar="|"
              />
            )}
          </div>
          <a
            href="./curriculo/Curriculo Desenvolvedor de Software - Gabriel Avena.pdf"
            download="Curriculo Desenvolvedor de Software - Gabriel Avena.pdf"
            type="application/pdf"
            className={styles.heroButton}
          >
            Baixar Currículo
          </a>
        </div>
        <div className={styles.bandContainer}>
          <App />
        </div>
      </motion.section>

      {/* Seção Sobre */}
      <motion.section
        id="sobre"
        className={styles.section}
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Sobre Mim</h2>
          <p className={styles.sectionText}>
            Desde cedo, minha paixão pela tecnologia moldou meu caminho profissional. Sempre fui fascinado por como a inovação transforma o mundo, e foi isso que me levou a seguir carreira na área. Sou desenvolvedor fullstack, formado em front-end e back-end pela Cubos Academy, onde desenvolvi projetos práticos que me permitiram construir aplicações completas, aplicar boas práticas e aprofundar meus conhecimentos. Além do conhecimento técnico, estou sempre aprimorando minhas habilidades por meio de estudos autônomos e cursos especializados. Tenho soft skills essenciais para o ambiente profissional, como trabalho em equipe, proatividade, organização e empenho. Busco desafios que me permitam crescer, aprender e contribuir com soluções inovadoras. Minhas principais habilidades incluem JavaScript e TypeScript, utilizando Node.js no back-end e React e Next.js no front-end. Tenho experiência com PostgreSQL para banco de dados, além de ferramentas como Vite, Sass e Docker. Também aplico testes automatizados com Jest e Cypress, e utilizo Git e GitHub para versionamento de código. Atualmente, meu objetivo é continuar evoluindo na área, contribuindo para projetos inovadores e desafiadores. Busco oportunidades que me permitam expandir meu conhecimento, colaborar em equipe e gerar impacto positivo por meio da tecnologia. Estou aberto a novos desafios e colaborações que impulsionem meu crescimento e me permitam fazer a diferença.
          </p>
        </div>
      </motion.section>

      {/* Seção Conhecimentos */}
      <motion.section
        id="conhecimentos"
        className={styles.section}
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Conhecimentos</h2>
          <div className={styles.skillInfo}>{skillInfo && <p>{skillInfo}</p>}</div>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillItem} onMouseEnter={() => handleSkillHover(skill.description)} onMouseLeave={handleSkillLeave}>
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Seção Projetos */}
      <motion.section
        id="projetos"
        className={styles.section}
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Projetos</h2>
          <div className={styles.projectsGrid}>
            {/* Título para projetos de Fullstack */}
            <h3 className={styles.subSectionTitle}>Fullstack</h3>
<div className={styles.fullstackProjects}>
  {fullstackProjects.map((project) => (
    <div
      key={project.id}
      className={styles.projectCardFullstack}
      onClick={() => openModal(project)}
    >
      <div className={styles.projectImageContainer}>
        <img
          src={project.image}
          alt={project.title}
          className={styles.projectImage}
        />
        <h3 className={styles.projectTitleFullstack}>{project.title}</h3>
        <div className={styles.projectIconsFullstack}>
          {project.icons}
        </div>
        <div className={styles.projectOverlayFullstack}>
          <p className={styles.projectDescription}>{project.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>
            {/* Título para projetos de Front-end */}
            <h3 className={styles.subSectionTitle}>Front-end</h3>
            <div className={styles.frontendProjects}>
              {frontendProjects.map((project) => (
                <div
                  key={project.id}
                  className={styles.projectCardFront}
                  onClick={() => openModal(project)}
                >
                  <div className={styles.projectImageContainer}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className={styles.projectImage}
                    />
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <div className={styles.projectIcons}>
                      {project.icons}
                    </div>
                    <div className={styles.projectOverlay}>
                      <p className={styles.projectDescription}>{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Título para projetos de Back-end */}
            <h3 className={styles.subSectionTitle}>Back-end</h3>
            <div className={styles.backendProjects}>
              {backendProjects.map((project) => (
                <div
                  key={project.id}
                  className={styles.projectCardBack}
                  onClick={() => openModal(project)}
                >
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectText}>{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Modal */}
      {modalOpen && selectedProject && (
        <div className={`${styles.modal} ${modalOpen ? styles.open : ''}`}>
          <div className={styles.modalContent}>
            <button className={styles.closeModal} onClick={closeModal}>
              &times;
            </button>
            <h3>{selectedProject.title}</h3>
            {selectedProject.image && (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className={styles.projectImage}
              />
            )}
            <p>{selectedProject.description}</p>
            <div className={styles.projectLinks}>
              <a href={selectedProject.repoLink} target="_blank" rel="noopener noreferrer">
                Repositório
              </a>
              {selectedProject.deployLink && (
                <a href={selectedProject.deployLink} target="_blank" rel="noopener noreferrer">
                  Acessar Projeto
                </a>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Contato */}
      <motion.section
        id="contato"
        className={`${styles.section} ${styles.sectionGray}`}
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Contatos</h2>
          <div className={styles.contactLinks}>
            {contacts.map((contact, index) => (
              <a key={index} href={contact.link} className={styles.contactLink}>
                {contact.icon}
                <span>{contact.label}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Gabriel Avena. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
