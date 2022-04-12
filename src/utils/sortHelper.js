export function descendingPriceCompare(a, b) {
  return b.price - a.price;
}

export function ascendingPriceCompare(a, b) {
  return a.price - b.price;
}

export function ascendingNameCompare(a, b) {
  return a.name > b.name ? 1 : -1;
}

export const SORTER = {
  descendingPrice: descendingPriceCompare,
  ascendingPrice: ascendingPriceCompare,
  ascendingName: ascendingNameCompare,
};
