const ThemeScript = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              document.documentElement.classList.remove('dark');
              document.documentElement.classList.add('light');
              localStorage.setItem('theme', 'light');
            } catch (e) {}
          })();
        `,
      }}
    />
  );
};

export default ThemeScript;
