import type { PurchaseRequest } from "@/types/request";
import { RequestCard } from "@/features/requests/RequestCard";

export function RequestList({ requests }: { readonly requests: readonly PurchaseRequest[] }) {
  if (requests.length === 0) {
    return <div className="empty-state"><span className="empty-icon" aria-hidden="true">⌕</span><h2>아직 구매요청이 없어요</h2><p>새로운 요청이 등록되면 이곳에 보여드릴게요.</p></div>;
  }
  return <div className="request-grid">{requests.map((request) => <RequestCard key={request.id} request={request} />)}</div>;
}
