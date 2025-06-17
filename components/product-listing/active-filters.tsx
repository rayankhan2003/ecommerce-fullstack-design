'use client';

interface ActiveFiltersProps {
  activeFilters: string[];
  onRemove: (filter: string) => void;
}

export default function ActiveFilters({
  activeFilters,
  onRemove,
}: ActiveFiltersProps) {
  if (activeFilters.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 mb-4">
      {activeFilters.map((filter) => (
        <span
          key={filter}
          className="inline-flex items-center text-sm px-3 py-[6px] rounded-md border border-blue-500 bg-white text-gray-800"
        >
          {filter}
          <button
            onClick={() => onRemove(filter)}
            className="ml-2 text-blue-600 hover:text-blue-800 font-bold"
          >
            ×
          </button>
        </span>
      ))}
    </div>
  );
}
