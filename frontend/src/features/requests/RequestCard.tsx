import Link from "next/link";
import type { PurchaseRequest } from "@/types/request";
import { formatDate, formatPriceRange } from "@/lib/format";

export function RequestCard({ request }: { readonly request: PurchaseRequest }) {
  return (
    <Link className="request-card" href={`/requests/${request.id}`}>
      <div className="card-topline"><span className="category-pill">{request.category}</span><span className="card-arrow" aria-hidden="true">↗</span></div>
      <h3>{request.title}</h3>
      <p className="card-price">{formatPriceRange(request.minPrice, request.maxPrice)}</p>
      <div className="card-meta"><span><span aria-hidden="true">⌖</span> {request.region}</span><time dateTime={request.createdAt}>{formatDate(request.createdAt)}</time></div>
    </Link>
  );
}
