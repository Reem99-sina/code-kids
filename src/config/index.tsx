if (!import.meta.env.VITE_PUBLIC_BASE_URL) {
  throw new Error("VITE_PUBLIC_BASE_URL is not set");
}

export const config = {
  NEXT_PUBLIC_BASE_URL: import.meta.env.VITE_PUBLIC_BASE_URL,
  DEFAULT_LOCALE: "en",
};
