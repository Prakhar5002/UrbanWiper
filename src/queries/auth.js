export function countriesList() {
  return fetch('https://api.first.org/data/v1/countries').then(res =>
    res.json(),
  );
}
