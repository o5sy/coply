import { useState } from 'react';

interface UseOpenStateProps {
  initOpen?: boolean;
}

export const useOpenState = (
  props: UseOpenStateProps = { initOpen: false },
) => {
  const [isOpen, setIsOpen] = useState(props.initOpen ?? false);

  const handleState = {
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };

  return {
    isOpen,
    handleState,
  };
};
