"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { DownloadIcon, Loader } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const sites = useQuery(api.sites.get);

  return (
    <div className="container mx-auto p-2 flex flex-col gap-3">
      {sites === undefined && (
        <div className="h-dvh grid place-items-center">
          <Loader className="animate-spin size-6" />
        </div>
      )}
      {sites?.map((site) => (
        <div
          key={site._id}
          className="border rounded-lg h-14 flex items-center px-4 justify-between"
        >
          <h1 className="text-base font-medium">{site.name}</h1>
          <Link target="_blank" href={site.url}>
            <Button className="gap-1.5 text-xs">
              <DownloadIcon className="size-4" />
              Download
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
}
