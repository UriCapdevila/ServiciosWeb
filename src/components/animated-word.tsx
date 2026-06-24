const words = ['Inteligente', 'Estratégico', 'Analítico'] as const;

export function AnimatedWord() {
  return (
    <span className="animated-word" aria-hidden="true">
      {words.map((word) => (
        <span key={word} className="animated-word__item">
          {word}
        </span>
      ))}
    </span>
  );
}
