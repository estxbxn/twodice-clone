"use client";

import { Button } from "@/components/ui/button";
import { CaseSensitiveIcon, MinusIcon, PlusIcon, RotateCcwIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function ZoomControls() {
    const [scale, setScale] = useState<number>(1);
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        const stored = window.localStorage.getItem("twodice-zoom");
        if (stored) {
            const s = Number(stored);
            if (!Number.isNaN(s)) setScale(s);
        }
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty("--user-zoom", String(scale));
        root.style.fontSize = `calc(16px * ${scale})`;
        window.localStorage.setItem("twodice-zoom", String(scale));
    }, [scale]);

    const inc = () => setScale((s) => Math.min(1.25, Number((s + 0.05).toFixed(2))));
    const dec = () => setScale((s) => Math.max(0.85, Number((s - 0.05).toFixed(2))));
    const reset = () => setScale(1);

    return (
        <>
            {!open ? (
                <Button
                    className="rounded-full bg-card/80 backdrop-blur border shadow-sm px-3 h-10"
                    variant="outline"
                    onClick={() => setOpen(true)}
                >
                    <CaseSensitiveIcon className="size-4" />
                </Button>
            ) : (
                <div className="flex items-center gap-2 bg-card/70 backdrop-blur border rounded-full px-2 py-1 shadow-sm">
                    <Button className="rounded-full" size="icon" variant="outline" onClick={dec}>
                        <MinusIcon className="size-4" />
                    </Button>
                    <div className="min-w-10 text-center text-sm tabular-nums">{Math.round(scale * 100)}%</div>
                    <Button className="rounded-full" size="icon" variant="outline" onClick={inc}>
                        <PlusIcon className="size-4" />
                    </Button>
                    <Button className="rounded-full" size="icon" variant="ghost" onClick={reset}>
                        <RotateCcwIcon className="size-4" />
                    </Button>
                    <Button className="rounded-full" size="icon" variant="ghost" onClick={() => setOpen(false)}>
                        <XIcon className="size-4" />
                    </Button>
                </div>
            )}
        </>
    );
}


