import type { Capability } from "../types";

type IconProps = {
  name:
    | Capability["icon"]
    | "arrow"
    | "mail"
    | "github"
    | "linkedin"
    | "menu"
    | "close"
    | "sun"
    | "moon";
  className?: string;
};

export function Icon({ name, className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      {name === "flow" && (
        <>
          <path d="M6 8h6m-6 8h6m-6 8h6" />
          <path d="M20 8h6M20 8l3-3m-3 3 3 3" />
          <path d="M18 16h8M18 16l3-3m-3 3 3 3" />
          <path d="M20 24h6M20 24l3-3m-3 3 3 3" />
        </>
      )}
      {name === "component" && (
        <>
          <path d="m16 4 10 6v12l-10 6-10-6V10z" />
          <path d="M6 10l10 6 10-6M16 16v12" />
        </>
      )}
      {name === "speed" && (
        <>
          <path d="M7 21a10 10 0 1 1 18 0" />
          <path d="m16 20 5-7" />
          <path d="M6 24h20" />
        </>
      )}
      {name === "verify" && (
        <>
          <path d="m16 4 10 4v8c0 6-4 10-10 12C10 26 6 22 6 16V8z" />
          <path d="m11 16 3 3 7-8" />
        </>
      )}
      {name === "arrow" && <path d="M6 16h18M17 8l8 8-8 8" />}
      {name === "mail" && (
        <>
          <path d="M5 8h22v16H5z" />
          <path d="m5 9 11 8 11-8" />
        </>
      )}
      {name === "github" && (
        <path d="M16 4a12 12 0 0 0-4 23c.5.1.8-.2.8-.6v-2.7c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.7 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6.2 0C22 7.5 23 7.8 23 7.8c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1 .8 2.1v3.1c0 .4.3.7.8.6A12 12 0 0 0 16 4Z" />
      )}
      {name === "linkedin" && (
        <>
          <path d="M8 12v14M8 7v.1M14 26v-9m0 0v-5m0 5c1-3 7-4 7 1v8" />
          <path d="M22 6h4v4M21 11l5-5" />
        </>
      )}
      {name === "menu" && <path d="M7 10h18M7 16h18M7 22h18" />}
      {name === "close" && <path d="m9 9 14 14M23 9 9 23" />}
      {name === "sun" && (
        <>
          <path d="M16 7v-3M16 28v-3M7 16H4M28 16h-3M9.6 9.6 7.5 7.5M24.5 24.5l-2.1-2.1M22.4 9.6l2.1-2.1M7.5 24.5l2.1-2.1" />
          <circle cx="16" cy="16" r="5" />
        </>
      )}
      {name === "moon" && <path d="M23 21.5A9.5 9.5 0 0 1 10.5 9 8.7 8.7 0 1 0 23 21.5Z" />}
    </svg>
  );
}
