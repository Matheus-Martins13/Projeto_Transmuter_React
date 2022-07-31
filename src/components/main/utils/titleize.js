function titleize(text) {
  const words = text.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
      let l = words[i];
      words[i] = l[0].toUpperCase() + l.slice(1);
  }
  return words.join(" ");
}

export default titleize;
