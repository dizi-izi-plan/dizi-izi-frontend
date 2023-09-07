import React, { ReactNode } from 'react';

interface PopperTargetProps {
  id?: string;
  handlePopperOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handlePopperClose: () => void;
  children: ReactNode;
}

export const PopperTarget = ({
  id,
  handlePopperOpen,
  handlePopperClose,
  children,
}: PopperTargetProps) => {
  return (
    <div
      aria-describedby={id}
      onMouseEnter={handlePopperOpen}
      onMouseLeave={handlePopperClose}
    >
      {children}
    </div>
  );
};
