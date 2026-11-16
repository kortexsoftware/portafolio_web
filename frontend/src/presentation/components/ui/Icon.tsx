export type IconName =
  | "grid"
  | "cart"
  | "file"
  | "code"
  | "mail"
  | "phone"
  | "pin"
  | "arrow"
  | "menu"
  | "close"
  | "chat"
  | "info"
  | "users"
  | "folder"
  | "star"
  | "tag";
const paths: Record<IconName, string> = {
  grid: "M4 4h6v6H4z M14 4h6v6h-6z M4 14h6v6H4z M14 14h6v6h-6z",
  cart: "M3 4h2l3 12h10l3-9H6 M9 20h.01 M18 20h.01",
  file: "M6 3h9l4 4v14H6z M14 3v5h5 M9 12h7 M9 16h7",
  code: "m8 7-5 5 5 5 M16 7l5 5-5 5 M14 4l-4 16",
  mail: "M3 5h18v14H3z m0 1 9 7 9-7",
  phone:
    "M5 3h4l2 5-3 2a15 15 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2C10 21 3 14 3 5a2 2 0 0 1 2-2Z",
  pin: "M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
  arrow: "M5 12h14 m-6-6 6 6-6 6",
  menu: "M5 8h14 M9 16h10",
  close: "m6 6 12 12 M18 6 6 18",
  chat: "M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.6-5.2A8.5 8.5 0 1 1 21 11.5Z M8.5 11.5h.01 M12 11.5h.01 M15.5 11.5h.01",
  info: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M12 16v-4 M12 8h.01",
  users:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0 M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
  folder:
    "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.7-.9L9.6 3.9A2 2 0 0 0 7.9 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
  star: "M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9Z",
  tag: "M3 3h8l10 10-8 8L3 13z M7.5 7.5h.01",
};
export const Icon = ({ name }: { name: IconName }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={paths[name]} />
  </svg>
);
