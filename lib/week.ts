export const DiaSemana: string[] = [
  "bom Domingo",
  "boa Segunda-feira",
  "boa Terça-feira",
  "boa Quarta-feira",
  "boa Quinta-feira",
  "boa Sexta-feira",
  "bom Sábado",
];

export default function getDiaSemana(dia: number): string {
  return DiaSemana[dia];
}