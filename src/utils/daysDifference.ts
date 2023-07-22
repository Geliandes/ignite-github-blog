export function daysDifference(date: string): string {
  const oldDate = new Date(date);
  const currentDate = new Date();
  
  const timeDifferenceInMs = currentDate.getTime() - oldDate.getTime();
  const daysDifference = Math.floor(timeDifferenceInMs / (1000 * 60 * 60 * 24));

  // Obtém a diferença em anos e meses
  const yearsDifference = currentDate.getFullYear() - oldDate.getFullYear();
  const monthsDifference = currentDate.getMonth() - oldDate.getMonth();

  // Verifica se a diferença é maior ou igual a 1 ano
  if (yearsDifference >= 1) {
    return `${yearsDifference} ${yearsDifference === 1 ? 'ano' : 'anos'}`;
  } else if (monthsDifference >= 1) {
    return `${monthsDifference} ${monthsDifference === 1 ? 'mês' : 'meses'}`;
  } else {
    return `${daysDifference} ${daysDifference === 1 ? 'dia' : 'dias'}`;
  }
}
