'use client';

interface Filters {
  batchYear: number;
  degree: string;
  department: string;
}

interface DashboardFiltersProps {
  filters: Filters;
  onFilterChange: (newFilters: Filters) => void;
  departmentOptions: string[];
  disabled: boolean;
}

export default function DashboardFilters({ filters, onFilterChange, departmentOptions, disabled }: DashboardFiltersProps) {

  // When degree changes, reset department to "All Departments"
  const handleDegreeChange = (newDegree: string) => {
    onFilterChange({
      ...filters,
      degree: newDegree,
      department: 'All Departments'
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md">
      <div>
        <label htmlFor="batchYear" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Batch Year</label>
        <select
          id="batchYear"
          value={filters.batchYear}
          disabled={disabled}
          onChange={(e) => onFilterChange({ ...filters, batchYear: parseInt(e.target.value) })}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md disabled:opacity-50"
        >
          {Array.from({ length: 10 }, (_, i) => {
            const year = new Date().getFullYear() - i;
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor="degree" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Degree</label>
        <select
          id="degree"
          value={filters.degree}
          disabled={disabled}
          onChange={(e) => handleDegreeChange(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md disabled:opacity-50"
        >
          <option>B.Tech</option>
          <option>M.Tech</option>
          <option>M.Sc</option>
        </select>
      </div>
      <div>
        <label htmlFor="department" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Department</label>
        <select
          id="department"
          value={filters.department}
          disabled={disabled || departmentOptions.length <= 1}
          onChange={(e) => onFilterChange({ ...filters, department: e.target.value })}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md disabled:opacity-50"
        >
          {departmentOptions.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
    </div>
  );
}