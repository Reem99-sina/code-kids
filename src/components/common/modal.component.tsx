import React, { forwardRef, useImperativeHandle } from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";

export interface ModalRef {
  open: () => void;
  close: () => void;
}

interface ModalProps {
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  className?: string;
  classNameOverlay?: string;
  onClose?: () => void;
}

export const Modal = forwardRef<ModalRef, ModalProps>(
  ({ children, size = "md", className, classNameOverlay, onClose }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false);

    useImperativeHandle(ref, () => ({
      open: () => setIsVisible(true),
      close: () => setIsVisible(false),
    }));

    // Map size prop to appropriate max-width class
    const sizeClasses = {
      xs: "max-w-xs",
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      full: "max-w-full mx-4",
    };

    return (
      <Dialog
        open={isVisible}
        onOpenChange={(open) => {
          setIsVisible(open);
          if (!open&&onClose) {
            onClose();
          }
        }}
      >
        <DialogOverlay className={classNameOverlay} onClick={onClose} />
        <DialogContent
          className={cn(
            "border-0 focus:border-0 p-0",
            sizeClasses[size],
            className
          )}
        >
          {isVisible ? children : null}
        </DialogContent>
      </Dialog>
    );
  }
);

Modal.displayName = "Modal";
