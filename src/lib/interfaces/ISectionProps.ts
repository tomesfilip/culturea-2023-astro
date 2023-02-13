import type { ReactNode } from 'react';

export interface SectionProps {
  sectionId: string;
  sectionName?: string;
  children: ReactNode;
  className?: string;
}
