// ConfirmDialog.tsx
import * as Dialog from "@radix-ui/react-dialog";
import { DialogContent, DialogOverlay, DialogPortal, DialogTitle } from "../ui/dialog";

interface ConfirmDialogProps {
  open: boolean;
  title?: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDialog = ({
  open,
  title = "Confirm",
  message,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={(v) => !v && onCancel()}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/40" />
        <DialogContent className="fixed top-1/2 left-1/2 w-[90%] max-w-sm -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-xl">
          <DialogTitle className="text-lg font-semibold mb-2">
            {title}
          </DialogTitle>
          <p className="mb-4 text-sm text-gray-700">{message}</p>
          <div className="flex justify-end gap-3">
            <button
              onClick={onCancel}
              className="px-4 py-1 rounded bg-gray-200 hover:bg-gray-300">
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-1 rounded bg-blue-600 text-white hover:bg-blue-700">
              Yes
            </button>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog.Root>
  );
};
