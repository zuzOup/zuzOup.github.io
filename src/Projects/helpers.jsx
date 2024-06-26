// const auth = {
//   method: "GET",
//   headers: {
//     Authorization:
//       "token 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",
//   },
// };

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
