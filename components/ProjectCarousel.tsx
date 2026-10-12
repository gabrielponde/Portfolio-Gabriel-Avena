'use client';

import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Expand,
  Layers,
  Terminal,
  Sparkles,
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Project, fullstackProjects, frontendProjects, backendProjects } from '../data/db';
import styles from './ProjectCarousel.module.css';

export interface ExtendedProject extends Project {
  category: 'fullstack' | 'frontend' | 'backend';
  categoryLabel: string;
}

interface ProjectCarouselProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectCarousel({ onSelectProject }: ProjectCarouselProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'fullstack' | 'frontend' | 'backend'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const wheelAccumulator = useRef(0);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Unifica todos os projetos com suas respectivas categorias
  const allProjects: ExtendedProject[] = useMemo(() => {
    const fullstack: ExtendedProject[] = fullstackProjects.map((p) => ({
      ...p,
      category: 'fullstack',
      categoryLabel: 'Fullstack',
    }));

    const frontend: ExtendedProject[] = frontendProjects.map((p) => ({
      ...p,
      category: 'frontend',
      categoryLabel: 'Front-end',
    }));

    const backend: ExtendedProject[] = backendProjects.map((p) => ({
      ...p,
      category: 'backend',
      categoryLabel: 'Back-end',
    }));

    return [...fullstack, ...frontend, ...backend];
  }, []);

  // Filtra projetos conforme a categoria selecionada
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return allProjects;
    return allProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory, allProjects]);

  // Contadores para as badges das tabs
  const counts = useMemo(
    () => ({
      all: allProjects.length,
      fullstack: fullstackProjects.length,
      frontend: frontendProjects.length,
      backend: backendProjects.length,
    }),
    [allProjects]
  );

  // Reseta índice ao trocar categoria
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const total = filteredProjects.length;
  // Apenas faz loop circular se tiver mais de 3 cards (evita oscilação em categorias com 1 ou 2 projetos)
  const isLooping = total > 3;

  const handlePrev = useCallback(() => {
    if (total <= 1) return;
    if (isLooping) {
      setCurrentIndex((prev) => (prev - 1 + total) % total);
    } else {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  }, [total, isLooping]);

  const handleNext = useCallback(() => {
    if (total <= 1) return;
    if (isLooping) {
      setCurrentIndex((prev) => (prev + 1) % total);
    } else {
      setCurrentIndex((prev) => Math.min(prev + 1, total - 1));
    }
  }, [total, isLooping]);

  // Suporte a rolagem do Trackpad e Mouse com trava por gesto (impede avançar 2 cards no mesmo swipe)
  const isWheelLocked = useRef(false);
  const wheelUnlockTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const onWheel = (e: WheelEvent) => {
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const delta = isHorizontal ? e.deltaX : e.deltaY;

      if (Math.abs(delta) < 4) return;

      if (isHorizontal) {
        e.preventDefault();
      }

      // Reinicia o temporizador de término do gesto a cada pulso recebido
      if (wheelUnlockTimer.current) {
        clearTimeout(wheelUnlockTimer.current);
      }
      wheelUnlockTimer.current = setTimeout(() => {
        isWheelLocked.current = false;
        wheelAccumulator.current = 0;
      }, 260); // 260ms sem eventos = os dedos pararam / gesto terminou

      // Se já disparou a transição para este gesto, NÃO dispara de novo
      if (isWheelLocked.current) {
        return;
      }

      wheelAccumulator.current += delta;

      const threshold = 35; // Limiar nítido de intenção
      if (wheelAccumulator.current > threshold) {
        handleNext();
        isWheelLocked.current = true;
        wheelAccumulator.current = 0;
      } else if (wheelAccumulator.current < -threshold) {
        handlePrev();
        isWheelLocked.current = true;
        wheelAccumulator.current = 0;
      }
    };

    stage.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      stage.removeEventListener('wheel', onWheel);
      if (wheelUnlockTimer.current) clearTimeout(wheelUnlockTimer.current);
    };
  }, [handleNext, handlePrev]);

  // Navegação por teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  const getPillCategoryClass = (category: string) => {
    switch (category) {
      case 'fullstack':
        return styles.pillFullstack;
      case 'frontend':
        return styles.pillFrontend;
      case 'backend':
        return styles.pillBackend;
      default:
        return '';
    }
  };

  return (
    <div className={styles.carouselContainer}>
      {/* Barra de Filtros / Tabs */}
      <div className={styles.filterBar}>
        <button
          className={`${styles.filterButton} ${activeCategory === 'all' ? styles.filterButtonActive : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          <Sparkles size={16} />
          <span>Todos</span>
          <span className={styles.filterBadge}>{counts.all}</span>
        </button>

        <button
          className={`${styles.filterButton} ${activeCategory === 'fullstack' ? styles.filterButtonActive : ''}`}
          onClick={() => setActiveCategory('fullstack')}
        >
          <Layers size={16} />
          <span>Fullstack</span>
          <span className={styles.filterBadge}>{counts.fullstack}</span>
        </button>

        <button
          className={`${styles.filterButton} ${activeCategory === 'frontend' ? styles.filterButtonActive : ''}`}
          onClick={() => setActiveCategory('frontend')}
        >
          <span>Front-end</span>
          <span className={styles.filterBadge}>{counts.frontend}</span>
        </button>

        <button
          className={`${styles.filterButton} ${activeCategory === 'backend' ? styles.filterButtonActive : ''}`}
          onClick={() => setActiveCategory('backend')}
        >
          <Terminal size={16} />
          <span>Back-end</span>
          <span className={styles.filterBadge}>{counts.backend}</span>
        </button>
      </div>

      {/* Palco 3D Coverflow Circular (Cards de ambos os lados + Trackpad/Touch) */}
      <div ref={stageRef} className={styles.stage3D}>
        <motion.div
          className="relative w-full h-full flex items-center justify-center"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragStart={() => {
            isDraggingRef.current = true;
          }}
          onDragEnd={(_, info) => {
            if (info.offset.x > 45 || info.velocity.x > 350) {
              handlePrev();
            } else if (info.offset.x < -45 || info.velocity.x < -350) {
              handleNext();
            }
            // Descarta o evento de click do mouse que o navegador dispara após soltar o arraste
            setTimeout(() => {
              isDraggingRef.current = false;
            }, 120);
          }}
        >
          {filteredProjects.map((project, index) => {
            // Se tiver mais de 3 cards, calcula loop circular simétrico. Se tiver 2 ou menos, mantém posição linear estável
            let offset = index - currentIndex;
            if (isLooping) {
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;
            }

            const absOffset = Math.abs(offset);

            // Esconde apenas os cards além do raio visível para máxima performance
            if (absOffset > 3) return null;

            const isCenter = offset === 0;

            // Posição no espaço 3D (Coverflow circular)
            const stepX = isMobileView ? 160 : 220;
            const x = offset * stepX; // Distribui perfeitamente à esquerda (-) e à direita (+)
            const scale = 1 - absOffset * 0.12;
            const rotateY = offset === 0 ? 0 : offset > 0 ? -32 : 32; // Ângulo para ambos os lados
            const zIndex = 50 - absOffset * 10;
            const opacity = 1 - absOffset * 0.22;

            return (
              <motion.div
                key={`${project.category}-${project.id}`}
                className={`${styles.coverflowCard} ${isCenter ? styles.cardActive : ''} ${!project.image ? styles.cardWithoutImage : ''}`}
                initial={false}
                animate={{
                  x,
                  scale,
                  rotateY,
                  zIndex,
                  opacity,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 28,
                }}
                onClick={() => {
                  if (isDraggingRef.current) return;
                  if (!isCenter) {
                    setCurrentIndex(index);
                  }
                }}
                style={{
                  cursor: isCenter ? 'default' : 'pointer',
                  transformOrigin: 'center center',
                }}
              >
                {/* Dimmer nos cards laterais para dar profundidade e foco no card central */}
                {!isCenter && <div className={styles.cardDimmer} />}

                {/* Header Superior estilo macOS Window */}
                <div className={styles.macHeader}>
                  <div className={styles.macDots}>
                    <span className={styles.dotRed} />
                    <span className={styles.dotYellow} />
                    <span className={styles.dotGreen} />
                  </div>
                  <span className={`${styles.categoryTag} ${getPillCategoryClass(project.category)}`}>
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Imagem Horizontal (preserva a proporção 16:9 real do print do site) */}
                {project.image && (
                  <div
                    className={styles.mediaContainer}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(project);
                    }}
                    title="Clique para ver detalhes do projeto"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className={styles.cardImage}
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Corpo do Card */}
                <div className={styles.cardBody}>
                  <div className={styles.cardHeaderRow}>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <span className={styles.cardCounter}>
                      {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                    </span>
                  </div>

                  <p className={styles.cardDescription}>{project.description}</p>

                  {/* Ícones de Tecnologias */}
                  {project.icons && project.icons.length > 0 && (
                    <div className={styles.techRow}>
                      {project.icons.map((icon, idx) => (
                        <div key={idx} className={styles.techPill}>
                          {icon}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Ações / Links */}
                  <div className={styles.cardActions}>
                    {project.deployLink && (
                      <a
                        href={project.deployLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.actionButton} ${styles.btnPrimary}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Acessar</span>
                        <ArrowUpRight size={15} />
                      </a>
                    )}

                    {project.repoLink && (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.actionButton} ${styles.btnSecondary}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub size={15} />
                        <span>GitHub</span>
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject(project);
                      }}
                      className={`${styles.actionButton} ${styles.btnDetail}`}
                      title="Expandir detalhes"
                    >
                      <Expand size={15} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Controles: Contador, Dica de Trackpad/Dedo, Dots e Setas */}
      <div className={styles.controlsBar}>
        <div className={styles.counter}>
          <span>Projeto</span>
          <span className={styles.counterHighlight}>
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
          <span>de {String(total).padStart(2, '0')}</span>
        </div>

        {/* Dica de interação */}
        <div className={styles.swipeHint}>
          <span>&larr; Deslize com o trackpad ou com o dedo &rarr;</span>
        </div>

        {/* Paginação por Dots */}
        <div className={styles.dotsPagination}>
          {filteredProjects.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`${styles.dot} ${idx === currentIndex ? styles.dotActive : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ir para o projeto ${idx + 1}`}
            />
          ))}
        </div>

        {/* Setas de Navegação */}
        <div className={styles.navButtons}>
          <button
            type="button"
            className={styles.arrowButton}
            onClick={handlePrev}
            disabled={!isLooping && currentIndex === 0}
            aria-label="Projeto anterior"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            className={styles.arrowButton}
            onClick={handleNext}
            disabled={!isLooping && currentIndex === total - 1}
            aria-label="Próximo projeto"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
