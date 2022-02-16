function allContinents(list) {
  return ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].every(continent => list.some(dev => dev.continent === continent));
}