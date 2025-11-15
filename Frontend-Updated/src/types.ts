// src/types.ts
export interface Company {
    _id: string;       // Use string because backend MongoDB _id is string
    name: string;
    jobTitle: string;
    type: string;      // "Internship" | "Full-time" etc.
    package: string;
    location: string;
    minCgpa: string;
    batch: string;
    sector?: string;
    website?: string;
    logoURL?: string;
  }
  
  export interface Filters {
    category?: string;
    degree?: string;
    company?: string;
    batch?: string;
    placementType?: string;
    cgpa?: number;
  }
  