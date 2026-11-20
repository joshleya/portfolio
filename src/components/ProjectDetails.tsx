import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, ExternalLink, X } from 'lucide-react';

export interface Project {
  name: string;
  type: string;
  description: string;
  theme: string;
  mark: string;
  technologies: string[];
  highlights: string[];
  contribution: string;
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectDetailsProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key === 'Tab') {
        const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (!focusableElements?.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <div
      className="project-modal-backdrop fixed inset-0 z-40 flex justify-center overflow-y-auto"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        className="project-modal relative my-auto w-full max-w-3xl rounded-3xl p-6 sm:p-10"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="modal-close absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:border-white/30 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff7d85]"
        >
          <X size={18} />
        </button>
        <p className="section-eyebrow pr-14">{project.type}</p>
        <h2
          id="project-dialog-title"
          className="mt-4 font-display text-4xl font-semibold tracking-[-.05em] text-white sm:text-5xl"
        >
          {project.name}
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          {project.description}
        </p>

        <div className="mt-8">
          <h3 className="text-xs font-semibold uppercase tracking-[.16em] text-slate-500">Technologies</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li key={technology} className="tech-chip">{technology}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8 grid gap-8 border-t border-white/10 pt-7 sm:grid-cols-[1fr_.85fr]">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[.16em] text-slate-500">
              Project details
            </h3>
            <ul className="mt-4 space-y-3">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f04452]" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[.16em] text-slate-500">
              My contribution
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{project.contribution}</p>
          </div>
        </div>

        {(project.githubUrl || project.liveUrl) && (
          <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff7d85]"
              >
                GitHub repository <ArrowUpRight size={15} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff7d85]"
              >
                Live project <ExternalLink size={15} />
              </a>
            )}
          </div>
        )}
      </section>
    </div>,
    document.body,
  );
}
