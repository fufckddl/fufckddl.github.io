import type { Project } from "../types";

type ProjectVisualProps = {
  imageAlt?: string;
  imageSrc?: string;
  type: Project["visualType"];
};

export function ProjectVisual({ imageAlt, imageSrc, type }: ProjectVisualProps) {
  if (imageSrc) {
    return (
      <figure className="project-shot image-shot">
        <img src={imageSrc} alt={imageAlt ?? ""} loading="lazy" />
      </figure>
    );
  }

  if (type === "dashboard") {
    return (
      <div className="project-shot dashboard-shot" aria-hidden="true">
        <div className="side-rail" />
        <div className="chart-panel">
          <span />
          <span />
          <span />
        </div>
        <div className="line-chart" />
      </div>
    );
  }

  if (type === "checkout") {
    return (
      <div className="project-shot checkout-shot" aria-hidden="true">
        <div className="stepper">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="checkout-grid">
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }

  return (
    <div className="project-shot note-shot" aria-hidden="true">
      <div className="browser-bar">
        <span />
        <span />
        <span />
      </div>
      <div className="mock-note">
        <aside />
        <div>
          <strong>프로젝트 기획 회의</strong>
          <p />
          <p />
          <p />
        </div>
      </div>
    </div>
  );
}
