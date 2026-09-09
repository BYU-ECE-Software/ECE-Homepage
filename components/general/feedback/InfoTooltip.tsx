// A small circle-"i" that reveals its content in a hover/focus tooltip. Built on
// @floating-ui/react so the bubble renders in a portal and flip/shift keep it
// on-screen anywhere it's placed.
'use client';

import { useState, type ReactNode } from 'react';
import {
  FloatingPortal,
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { FiInfo } from 'react-icons/fi';

export default function InfoTooltip({
  children,
  label = 'More info',
}: {
  children: ReactNode;
  label?: string;
}) {
  const [open, setOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: 'top',
    whileElementsMounted: autoUpdate,
    middleware: [offset(6), flip({ padding: 8 }), shift({ padding: 8 })],
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, { move: false }),
    useFocus(context),
    useDismiss(context),
    useRole(context, { role: 'tooltip' }),
  ]);

  const { setReference, setFloating } = refs;

  return (
    <>
      <button
        ref={setReference}
        {...getReferenceProps()}
        type="button"
        aria-label={label}
        className="cursor-help text-gray-400 transition-colors hover:text-gray-600 focus:text-gray-600 focus:outline-none"
      >
        <FiInfo className="h-4 w-4" aria-hidden="true" />
      </button>
      {open && (
        <FloatingPortal>
          <div
            ref={setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            className="bg-byu-navy z-[60] w-max max-w-xs rounded-md px-2.5 py-1.5 text-xs leading-relaxed font-normal text-white shadow-lg"
          >
            {children}
          </div>
        </FloatingPortal>
      )}
    </>
  );
}
