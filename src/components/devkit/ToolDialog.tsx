import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ReactNode } from "react";

interface ToolDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  children: ReactNode;
}

export function ToolDialog({ open, onOpenChange, title, description, children }: ToolDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-[hsl(230,25%,10%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,95%)]">
        <DialogHeader>
          <DialogTitle className="text-xl text-[hsl(0,0%,95%)]">{title}</DialogTitle>
          <DialogDescription className="text-[hsl(230,10%,55%)]">{description}</DialogDescription>
        </DialogHeader>
        <div className="mt-4">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
