import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePreventScroll } from '@/hooks';

interface PortalProps {
  children: ReactNode;
}

export function Portal({ children }: PortalProps) {
  const [parentElement, setParentElement] = useState<Element>();

  usePreventScroll();

  useEffect(() => {
    setParentElement(document.getElementById('portal') || document.body);
  }, []);

  if (!parentElement) {
    return null;
  }
  return createPortal(children, parentElement);
}
