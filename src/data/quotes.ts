const quotes = [
  "Every moment spent with you feels like a blessing. I'm truly lucky to have you in my life.",
  "Your smile brightens even my darkest days. I'm so fortunate to have found you.",
  "In this vast universe, I somehow found you. That makes me the luckiest person alive.",
  "Your love is the greatest gift I've ever received. I cherish every second we spend together.",
  "Having you in my life makes me feel like I've won the cosmic lottery.",
  "Your presence in my life is proof that dreams do come true.",
  "With you, ordinary moments become extraordinary memories. I'm so lucky to share this journey with you.",
  "Every time I look at the stars, I'm reminded of how fortunate I am that the universe brought us together.",
  "The sound of your laughter is my favorite melody. I'm blessed to hear it every day.",
  "In a world full of uncertainties, your love is the one thing I'm certain about.",
  "Meeting you was fate, becoming your friend was a choice, but falling for you was beyond my control.",
  "Your love transforms my world from black and white into vibrant colors.",
  "Some people search their whole lives for what I found in you. I'm truly blessed.",
  "You make my heart smile in ways no one else can. I'm grateful for your presence in my life.",
  "If I had to choose between loving you and breathing, I would use my last breath to say 'I love you'.",
];

export const getRandomQuote = (): string => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};