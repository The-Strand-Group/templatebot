module.exports = async => {
  const quotes = ['Life? Don\'t talk to me about life.', 'Here I am, brain the size of a planet, and they tell me to take you up to the bridge. Call that job satisfaction? \'Cos I don\'t', 'Pardon me for breathing, which I never do anyway so I don\'t know why I bother to say it', 'I won\'t enjoy it', 'There\'s only one life-form as intelligent as me within thirty parsecs of here and that\'s me', 'I wish you\'d just tell me rather trying to engage my enthusiasm because I haven\'t got one', 'And then, of course, I\'ve got this terrible pain in all the diodes down my left side', '"The first ten million years were the worst," said Marvin, "and the second ten million years, they were the worst too. The third ten million years I didn\'t enjoy at all. After that I went into a bit of a decline"'];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return quote;
};