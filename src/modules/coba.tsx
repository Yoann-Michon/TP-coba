const values = [
  { id: "O", value: 1 },
  { id: "R", value: 3 },
];

export function coba(tab: string[]) {
    const test=[...values];
  let resultat=0;
  console.log(test)
  if (tab.length % 2 !== 0) {
      test[0].value=2
  }
  
  for (let j=0;j<test.length;j++) {
      for (let i = 0; i < tab.length; i++) {
          if (tab[i] == test[j].id) {
              resultat += values[i].value
            }

        }
    }
    return resultat;
}
