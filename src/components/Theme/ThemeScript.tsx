"use client";

export default function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function () {
            // Force light mode
            document.documentElement.classList.remove('dark');
          })();
        `,
      }}
    />
  );
}
