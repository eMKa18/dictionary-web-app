/* Modulo in JS is working weird on negative numbers, it still results in negative number, not always positive like in real life math */
export const modulo = (n:number, m: number) => ((n % m) + m) % m;