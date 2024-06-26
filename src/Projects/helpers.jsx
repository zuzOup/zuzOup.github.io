

export async function fetchData(url, setter, conditions) {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setter(conditions(data));
    });
}

export async function fetchMD(url, setter, conditions) {
  await fetch(url)
    .then((res) => res.text())
    .then((data) => {
      setter(conditions(data));
    });
}
