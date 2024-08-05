declare module '*.png' {
    const value: string;
    export default value;
  }
  
  declare module '*.jpeg' {
    const value: string;
    export default value;
  }
  
  declare module '*.jpg' {
    const value: string;
    export default value;
  }
  
  declare module '*.gif' {
    const value: string;
    export default value;
  }
  
  declare module '*.svg' {
    const value: string;
    export default value;
  }
// src/types/declarations.d.ts
declare module './component/Wave' {
    import { FC } from 'react';
    const Wave: FC;
    export default Wave;
  }
  // src/reportWebVitals.d.ts

declare module './reportWebVitals' {
    const reportWebVitals: (onPerfEntry?: (metric: any) => void) => void;
    export default reportWebVitals;
  }
  
  
  