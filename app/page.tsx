'use client';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { useState, useEffect } from 'react';
import App from '@/components/band/App';
import Link from 'next/link';
import styles from '../css/Home.module.css';
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiGit,
  SiGithub,
  SiNextdotjs,
  SiCypress,
  SiJest,
  SiSass,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiVite,
  SiPostgresql,
  SiFigma,
  SiTailwindcss,
} from 'react-icons/si';
import StyledComponentsIcon from '../public/assets/icons/styled_components.js';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); 

  useEffect(() => {
    setIsClient(true); 
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
        <span className={styles.headerName}>&lt; Gabriel Avena /&gt;</span>

        {/* Botão do Menu para Mobile */}
        <button className={styles.menuButton} onClick={toggleMenu}>
          <div className={`${styles.menuIcon} ${isMenuOpen ? styles.menuIconActive : ''}`}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
        </button>

        {/* Links de Navegação */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <Link href="#sobre" passHref>
            <span className={styles.navLink}>Sobre</span>
          </Link>
          <Link href="#conhecimentos" passHref>
            <span className={styles.navLink}>Conhecimentos</span>
          </Link>
          <Link href="#projetos" passHref>
            <span className={styles.navLink}>Projetos</span>
          </Link>
          <Link href="#contato" passHref>
            <span className={styles.navLink}>Contato</span>
          </Link>
        </nav>
      </motion.header>

      {/* Seção Hero com a Band */}
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
              <Typewriter
                options={{
                  strings: [
                    'Uma combinação de tecnologia, boas práticas e inovação para transformar ideias em soluções digitais.',
                  ],
                  autoStart: false,
                  loop: false,
                  delay: 50,
                  cursor: '|',
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Uma combinação de tecnologia, boas práticas e inovação para transformar ideias em soluções digitais.')
                    .callFunction(() => {
                      const cursor = document.querySelector('.Typewriter__cursor');
                      if (cursor) {
                        cursor.classList.add('blinking-cursor'); 
                      }
                    })
                    .start();
                }}
              />
            )}
          </div>
          <a
            href="./curriculo/Curriculo-Desenvolvedor-Gabriel-Avena.pdf"
            download="Curriculo-Desenvolvedor-Gabriel-Avena.pdf"
            type="application/pdf"
            className={styles.heroButton}
          >
            Baixar Currículo
          </a>
        </div>
        <div className="absolute inset-0 z-0">
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
          <h2 className={styles.sectionTitle}>
            Sobre Mim
          </h2>
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
          <h2 className={styles.sectionTitle}>
            Conhecimentos
          </h2>
          <div className={styles.skillsGrid}>

            {/* JavaScript */}
            <div className={styles.skillItem}>
              <SiJavascript size={40} />
              <span>JavaScript</span>
              <div className={styles.tooltip}>Linguagem de programação para desenvolvimento web.</div>
            </div>

            {/* TypeScript */}
            <div className={styles.skillItem}>
              <SiTypescript size={40} />
              <span>TypeScript</span>
              <div className={styles.tooltip}>Superset de JavaScript com tipagem estática.</div>
            </div>

            {/* Node.js */}
            <div className={styles.skillItem}>
              <SiNodedotjs size={40} />
              <span>Node.js</span>
              <div className={styles.tooltip}>Ambiente de execução para JavaScript no back-end.</div>
            </div>

            {/* React */}
            <div className={styles.skillItem}>
              <SiReact size={40} />
              <span>React</span>
              <div className={styles.tooltip}>Biblioteca JavaScript para construção de interfaces de usuário.</div>
            </div>

            {/* PostgreSQL */}
            <div className={styles.skillItem}>
              <SiPostgresql size={40} />
              <span>PostgreSQL</span>
              <div className={styles.tooltip}>Banco de dados relacional de código aberto.</div>
            </div>

            {/* Next.js */}
            <div className={styles.skillItem}>
              <SiNextdotjs size={40} />
              <span>Next.js</span>
              <div className={styles.tooltip}>Framework React para renderização do lado do servidor e geração de sites estáticos.</div>
            </div>

            {/* Vite */}
            <div className={styles.skillItem}>
              <SiVite size={40} />
              <span>Vite</span>
              <div className={styles.tooltip}>Ferramenta de build rápida para desenvolvimento front-end.</div>
            </div>

            {/* Cypress */}
            <div className={styles.skillItem}>
              <SiCypress size={40} />
              <span>Cypress</span>
              <div className={styles.tooltip}>Ferramenta de teste end-to-end para aplicações web.</div>
            </div>

            {/* Jest */}
            <div className={styles.skillItem}>
              <SiJest size={40} />
              <span>Jest</span>
              <div className={styles.tooltip}>Framework de testes para JavaScript.</div>
            </div>

            {/* Sass */}
            <div className={styles.skillItem}>
              <SiSass size={40} />
              <span>Sass</span>
              <div className={styles.tooltip}>Pré-processador CSS para estilos mais eficientes.</div>
            </div>

            {/* Tailwind CSS */}
            <div className={styles.skillItem}>
              <SiTailwindcss size={40} />
              <span>Tailwind CSS</span>
              <div className={styles.tooltip}>Framework CSS utilitário para criação de designs responsivos.</div>
            </div>

            {/* Styled Components */}
            <div className={styles.skillItem}>
              <StyledComponentsIcon /> 
              <span>Styled Components</span>
              <div className={styles.tooltip}>Biblioteca para estilização de componentes React com CSS-in-JS.</div>
            </div>

            {/* HTML */}
            <div className={styles.skillItem}>
              <SiHtml5 size={40} />
              <span>HTML</span>
              <div className={styles.tooltip}>Linguagem de marcação para estruturar páginas web.</div>
            </div>

            {/* CSS */}
            <div className={styles.skillItem}>
              <SiCss3 size={40} />
              <span>CSS</span>
              <div className={styles.tooltip}>Linguagem de estilo para design de páginas web.</div>
            </div>

            {/* Git */}
            <div className={styles.skillItem}>
              <SiGit size={40} />
              <span>Git</span>
              <div className={styles.tooltip}>Sistema de controle de versão para gerenciamento de código.</div>
            </div>

            {/* GitHub */}
            <div className={styles.skillItem}>
              <SiGithub size={40} />
              <span>GitHub</span>
              <div className={styles.tooltip}>Plataforma de hospedagem de código e colaboração.</div>
            </div>

            {/* Docker */}
            <div className={styles.skillItem}>
              <SiDocker size={40} />
              <span>Docker</span>
              <div className={styles.tooltip}>Plataforma para criação e execução de contêineres.</div>
            </div>

            {/* Figma */}
            <div className={styles.skillItem}>
              <SiFigma size={40} />
              <span>Figma</span>
              <div className={styles.tooltip}>Ferramenta de design de interfaces e prototipagem.</div>
            </div>
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
            {/* Card do Projeto 1 */}
            <div className={styles.projectCard}>
              <h3 className={styles.projectTitle}>Cafeteria Cubspresso</h3>
              <p className={styles.projectText}>
                Este projeto é um catálogo online de cafés, desenvolvido com React. O objetivo é listar diferentes tipos de café, permitindo aos usuários visualizar informações detalhadas sobre cada um.
              </p>
              <a
                href="https://github.com/gabrielponde/Projeto-Cafeteria-Cubspresso"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                Visualizar Projeto
              </a>
            </div>

            {/* Card do Projeto 2 */}
            <div className={styles.projectCard}>
              <h3 className={styles.projectTitle}>Bank API</h3>
              <p className={styles.projectText}>
                BankAPI é uma API RESTful educativa que simula operações bancárias básicas. Projetada para desenvolvedores, oferece uma plataforma segura e intuitiva para treinar habilidades em APIs financeiras, com documentação clara e foco em aprendizado prático.
              </p>
              <a
                href="https://github.com/gabrielponde/BankAPI"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                Visualizar Projeto
              </a>
            </div>

            {/* Card do Projeto 3 */}
            <div className={styles.projectCard}>
              <h3 className={styles.projectTitle}>Ponto de Venda</h3>
              <p className={styles.projectText}>
                Desenvolvimento de uma API RESTful para um sistema de Ponto de Venda (PDV), com funcionalidades de gerenciamento de usuários, produtos, categorias, clientes e pedidos. A API permite operações CRUD (Create, Read, Update, Delete) para otimizar processos comerciais e garantir eficiência nas operações.
              </p>
              <a
                href="https://github.com/gabrielponde/Ponto-de-Venda"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                Visualizar Projeto
              </a>
            </div>

            {/* Card do Projeto 4 */}
            <div className={styles.projectCard}>
              <h3 className={styles.projectTitle}>F1 Legends</h3>
              <p className={styles.projectText}>
                O projeto F1-Legends é uma aplicação web dedicada a homenagear os maiores pilotos da história da Fórmula 1. Através de perfis detalhados, os usuários podem explorar informações sobre a vida, carreira e conquistas desses ícones do automobilismo. O objetivo é educar e inspirar fãs de corridas e novas gerações sobre a rica história da F1.
              </p>
              <a
                href="https://github.com/gabrielponde/F1-Legends"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                Visualizar Projeto
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Seção Contato */}
      <motion.section
        id="contato"
        className={`${styles.section} ${styles.sectionGray}`}
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Contatos
          </h2>

          <div className={styles.contactLinks}>
            {/* Link para o email */}
            <a href="mailto:gabrielpavena.developer@gmail.com" className={styles.contactLink}>
              <FaEnvelope size={40} />
              <span>gabrielpavena.developer@gmail.com</span>
            </a>

            {/* Link para o aplicativo (WhatsApp) */}
            <a href="https://wa.me/5571987987966" className={styles.contactLink}>
              <FaWhatsapp size={40} />
              <span>(71) 98798-7966</span>
            </a>

            {/* Link para LinkedIn */}
            <a href="https://www.linkedin.com/in/gabriel-avena/" className={styles.contactLink}>
              <FaLinkedin size={40} />
              <span>@gabriel-avena</span>
            </a>

            {/* Link para GitHub */}
            <a href="https://github.com/gabrielponde" className={styles.contactLink}>
              <FaGithub size={40} />
              <span>@gabrielponde</span>
            </a>
          </div>
        </div>
      </motion.section>

      {/* Rodapé */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Gabriel Avena. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}