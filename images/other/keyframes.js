let c = 0;

for (let i = 55; i <= 100; i += 4.5) {
  console.log(`${c}% {
     background: linear-gradient(180deg, var(--beige) ${i}%, var(--yellowPink3) 100%);
   }`);
  c += 10;
}

