"use client";

import * as React from "react";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type SelectRootProps = React.ComponentProps<"div"> & {
  value?: string;
  onValueChange?: (value: string) => void;
};

const SelectContext = React.createContext<{
  open: boolean;
  setOpen: (o: boolean) => void;
  value?: string;
  setValue: (v: string) => void;
} | null>(null);

function Select({ children, value, onValueChange, ...props }: SelectRootProps) {
  const [open, setOpen] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState<string | undefined>(value);
  React.useEffect(() => {
    if (value !== undefined) setInternalValue(value);
  }, [value]);
  const setValue = (v: string) => {
    setInternalValue(v);
    onValueChange?.(v);
    setOpen(false);
  };
  return (
    <SelectContext.Provider value={{ open, setOpen, value: internalValue, setValue }}>
      <div data-slot="select" {...props}>
        {children}
      </div>
    </SelectContext.Provider>
  );
}

function useSelect() {
  const ctx = React.useContext(SelectContext);
  if (!ctx) {
    throw new Error("Select components must be used within <Select>");
  }
  return ctx;
}

function SelectGroup({ children }: React.ComponentProps<"div">) {
  return <div data-slot="select-group">{children}</div>;
}

function SelectValue(props: React.ComponentProps<"span">) {
  return <span data-slot="select-value" {...props} />;
}

function SelectTrigger({ className, children, size = "default" }: React.ComponentProps<"button"> & { size?: "sm" | "default" }) {
  const { open, setOpen } = useSelect();
  return (
    <button
      type="button"
      aria-haspopup="listbox"
      aria-expanded={open}
      onClick={() => setOpen(!open)}
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "border-input data-[placeholder]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 dark:bg-input/30 dark:hover:bg-input/50 flex items-center gap-2 rounded-md border border-b-3 bg-background px-3 py-2 text-sm whitespace-nowrap shadow-xs outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        size === "default" ? "h-9" : "h-8",
        className
      )}
    >
      {children}
      <ChevronDownIcon className="size-4 opacity-50" />
    </button>
  );
}

function SelectContent({ className, children }: React.ComponentProps<"div">) {
  const { open } = useSelect();
  if (!open) return null;
  return (
    <div
      role="listbox"
      data-slot="select-content"
      className={cn(
        "bg-popover text-popover-foreground relative z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border shadow-md p-1",
        className
      )}
    >
      {children}
    </div>
  );
}

function SelectLabel({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="select-label" className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)} {...props} />;
}

function SelectItem({ className, children, value, ...props }: React.ComponentProps<"div"> & { value: string }) {
  const { setValue, value: current } = useSelect();
  const selected = current === value;
  return (
    <div
      role="option"
      aria-selected={selected}
      onClick={() => setValue(value)}
      data-slot="select-item"
      className={cn(
        "cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden hover:bg-accent hover:text-accent-foreground flex",
        className
      )}
      {...props}
    >
      <span className="mr-2 w-4">{selected ? <CheckIcon className="size-4" /> : null}</span>
      <span>{children}</span>
    </div>
  );
}

function SelectSeparator({ className }: React.ComponentProps<"div">) {
  return <div data-slot="select-separator" className={cn("bg-border my-1 h-px -mx-1", className)} />;
}

function SelectScrollUpButton() {
  return (
    <div data-slot="select-scroll-up-button" className="flex items-center justify-center py-1">
      <ChevronUpIcon className="size-4" />
    </div>
  );
}

function SelectScrollDownButton() {
  return (
    <div data-slot="select-scroll-down-button" className="flex items-center justify-center py-1">
      <ChevronDownIcon className="size-4" />
    </div>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
