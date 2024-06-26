const auth = {
  headers: {
    // authorization: `token ${import.meta.env.VITE_TOKEN}`,
  },
};

export async function fetchData(url, setter, conditions) {
  await fetch(url, auth)
    .then((res) => res.json())
    .then((data) => {
      setter(conditions(data));
    })
    .catch((error) => console.log(error));
}

export async function fetchDataMD(url, setter, conditions) {
  fetch(url, auth)
    .then((response) => response.json())
    .then((data) => {
      const content = atob(data.content); // Convert from base64 to readable text
      setter(conditions(content));
    })
    .catch((error) => console.log(error)); // Catch any errors
}

export async function fetchDataWB(url, cond1, cond2, setter) {
  await fetch(url, auth)
    .then((res) => res.json())
    .then((data) => cond1(data).map((x) => fetch(url + x, auth)))
    .then((url) => Promise.all(url))
    .then((res) => Promise.all(res.map((x) => x.json())))
    .then((data) => {
      setter(cond2(data));
    })
    .catch((error) => console.log(error));
}
