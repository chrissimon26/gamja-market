export function formatPrice(price: number): string {
  return `${new Intl.NumberFormat("ko-KR").format(price)}원`;
}

export function formatPriceRange(minPrice: number, maxPrice: number): string {
  return `${formatPrice(minPrice)} ~ ${formatPrice(maxPrice)}`;
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" })
    .format(new Date(date)).replace(/\. /g, "-").replace(/\.$/, "");
}
