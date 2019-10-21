const paths = () => {
  const importAll = r => r.keys().map(r);
  const imgs = importAll(require.context('@/assets/images/content/', false, /\.(png|jpe?g|svg)$/));
  const images = {};
  imgs.forEach((el) => {
    const arr = el.split('/');
    const name = arr[arr.length - 1].split('.');
    images[name[0]] = el;
  });

  return images;
};

export default paths;
