export const DiaSemana: string[] = [
  "bom Domingo",
  "boa Segunda-feira",
  "boa Terça-feira",
  "boa Quarta-feira",
  "boa Quinta-feira",
  "boa Sexta-feira",
  "bom Sábado",
];

export default function getDiaSemana(): string {
  const data = new Date(
    new Date().toLocaleString("en-US", {
      timeZone: "America/Cuiaba",
    })
  );

  return DiaSemana[data.getDay()];
}
