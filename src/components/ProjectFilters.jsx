import { useEffect, useId, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getTechnology } from '../data/technologies';
import './ProjectFilters.css';

function ProjectFilters({ groups, selected, onToggle, onClear }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const trigger = useRef(null);
  const dialog = useRef(null);
  const backdropStart = useRef(false);

  useEffect(() => {
    if (!open) return;
    const panel = dialog.current;
    const previousOverflow = document.body.style.overflow;
    panel.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      panel.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    dialog.current.close();
    trigger.current?.focus();
  };

  const outsidePanel = (event) => {
    const rect = dialog.current.getBoundingClientRect();
    return event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  };

  return (
    <div className="project-filters">
      <button ref={trigger} type="button" className="project-filter" aria-haspopup="dialog" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen(true)}>
        {t('projects_filter_open')}
      </button>
      {selected.length > 0 && <div className="project-filter-summary">
        {selected.map((id) => (
          <button key={id} type="button" className="project-filter project-selected-filter" aria-pressed="true" aria-label={t('projects_remove', { label: getTechnology(id).label })} onClick={() => {
            onToggle(id);
            trigger.current?.focus();
          }}>
            {getTechnology(id).label} <span aria-hidden="true">×</span>
          </button>
        ))}
        <button type="button" className="project-filter" onClick={() => {
          onClear();
          trigger.current?.focus();
        }}>{t('projects_clear')}</button>
      </div>}
      <dialog ref={dialog} id={panelId} className="project-filter-panel" aria-modal="true" aria-labelledby={`${panelId}-title`}
        onCancel={(event) => { event.preventDefault(); close(); }}
        onPointerDown={(event) => { backdropStart.current = outsidePanel(event); }}
        onPointerUp={(event) => {
          if (backdropStart.current && outsidePanel(event)) close();
          backdropStart.current = false;
        }}>
        <header className="project-filter-heading">
          <h3 id={`${panelId}-title`}>{t('projects_filter_open')}</h3>
          <button type="button" className="project-filter-close" aria-label={t('projects_close_filters')} onClick={close}>×</button>
        </header>
        <div className="project-filter-groups">
          {groups.map((group) => (
            <fieldset key={group.id}>
              <legend>{t(group.labelKey)}</legend>
              <div className="project-filter-options">
                {group.technologies.map(({ id, label }) => (
                  <button key={id} type="button" className="project-filter" aria-pressed={selected.includes(id)} onClick={() => onToggle(id)}>{label}</button>
                ))}
              </div>
            </fieldset>
          ))}
        </div>
        <footer className="project-filter-footer">
          <button type="button" className="project-filter" disabled={selected.length === 0} onClick={onClear}>{t('projects_clear')}</button>
          <button type="button" className="project-filter" onClick={close}>{t('projects_close_filters')}</button>
        </footer>
      </dialog>
    </div>
  );
}

export default ProjectFilters;
