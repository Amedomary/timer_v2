const importAll = r => r.keys().map(r);
const imgs = importAll(require.context('@/assets/images/content/', false, /\.(png|jpe?g|svg)$/));
const images = {};
imgs.forEach((el) => {
  images[el.slice(5, -13)] = el;
});

export default images;
