import { useState } from 'react';

export const Pagination = ({ 
  total = 100,
  pageSize = 10,
  current: controlledCurrent,
  onChange,
  showSizeChanger = false,
  pageSizeOptions = [10, 20, 50, 100],
  ...rest 
}) => {
  const [internalCurrent, setInternalCurrent] = useState(1);
  const [internalPageSize, setInternalPageSize] = useState(pageSize);
  
  const isControlled = controlledCurrent !== undefined;
  const current = isControlled ? controlledCurrent : internalCurrent;
  const activePageSize = internalPageSize;
  const totalPages = Math.ceil(total / activePageSize);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    if (!isControlled) {
      setInternalCurrent(page);
    }
    onChange?.(page, activePageSize);
  };

  const handleSizeChange = (newSize) => {
    setInternalPageSize(newSize);
    const newTotalPages = Math.ceil(total / newSize);
    const newCurrent = Math.min(current, newTotalPages);
    if (!isControlled) {
      setInternalCurrent(newCurrent);
    }
    onChange?.(newCurrent, newSize);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 7;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (current <= 4) {
        for (let i = 1; i <= 5; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (current >= totalPages - 3) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = current - 1; i <= current + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, ...rest.style }}>
      <div style={{ display: 'flex', gap: 6 }}>
        <PageButton
          onClick={() => handlePageChange(current - 1)}
          disabled={current === 1}
        >
          ‹
        </PageButton>
        
        {pageNumbers.map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={`ellipsis-${index}`}
                style={{
                  padding: '8px 12px',
                  fontSize: 14,
                  color: '#9ca3af',
                }}
              >
                ...
              </span>
            );
          }

          return (
            <PageButton
              key={page}
              onClick={() => handlePageChange(page)}
              active={current === page}
            >
              {page}
            </PageButton>
          );
        })}

        <PageButton
          onClick={() => handlePageChange(current + 1)}
          disabled={current === totalPages}
        >
          ›
        </PageButton>
      </div>

      {showSizeChanger && (
        <select
          value={activePageSize}
          onChange={(e) => handleSizeChange(Number(e.target.value))}
          style={{
            padding: '6px 12px',
            fontSize: 14,
            background: '#020617',
            border: '1px solid #1f2933',
            borderRadius: 6,
            color: '#e5e7eb',
            cursor: 'pointer',
            outline: 'none',
          }}
        >
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>
              {size} / page
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

const PageButton = ({ children, onClick, disabled, active }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        minWidth: 36,
        height: 36,
        padding: '0 12px',
        fontSize: 14,
        fontWeight: active ? 600 : 400,
        background: active ? '#38bdf8' : '#020617',
        color: active ? '#0b0c10' : '#e5e7eb',
        border: `1px solid ${active ? '#38bdf8' : '#1f2933'}`,
        borderRadius: 6,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s ease',
        opacity: disabled ? 0.4 : 1,
      }}
      onMouseEnter={(e) => {
        if (!disabled && !active) {
          e.currentTarget.style.borderColor = '#38bdf8';
          e.currentTarget.style.color = '#38bdf8';
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled && !active) {
          e.currentTarget.style.borderColor = '#1f2933';
          e.currentTarget.style.color = '#e5e7eb';
        }
      }}
    >
      {children}
    </button>
  );
};
