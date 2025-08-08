"use client";

import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

export function SourceButton({ url }: { url: string }) {
    return (
        <Button
            className="rounded-full bg-card/80 backdrop-blur border shadow-sm px-3 h-10"
            variant="outline"
            onClick={() => window.open(url, "_blank")}
        >
            <GithubIcon className="size-4" />
        </Button>
    );
}


