interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Pagination" className="mt-10 flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-byu-navy rounded-md px-3 py-2 text-sm font-medium hover:enabled:bg-slate-100 disabled:cursor-not-allowed disabled:text-slate-300"
      >
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          aria-current={page === currentPage ? 'page' : undefined}
          className={`h-9 w-9 rounded-md text-sm font-medium ${
            page === currentPage ? 'bg-byu-navy text-white' : 'text-byu-navy hover:bg-slate-100'
          }`}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="text-byu-navy rounded-md px-3 py-2 text-sm font-medium hover:enabled:bg-slate-100 disabled:cursor-not-allowed disabled:text-slate-300"
      >
        Next
      </button>
    </nav>
  );
}
