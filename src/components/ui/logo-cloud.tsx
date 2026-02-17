"use client";

import { ProgressiveBlur } from "@/components/ui/progressive-blur";

type Logo = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
    logos: Logo[];
};

export function LogoCloud({ logos, ...props }: LogoCloudProps) {
    return (
        <div className="relative mx-auto max-w-3xl bg-transparent py-6 md:border-x border-dashed border-gray-200/50" {...props}>
            {/* Cleaned up styling for minimalist fit */}
            <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-dashed border-gray-200/50" />

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 px-6">
                {logos.slice(0, 4).map((logo) => ( // Show only unique logos, no need to loop
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                        alt={logo.alt}
                        className="h-12 md:h-16 w-auto object-contain transition-all hover:scale-110"
                        height="auto"
                        key={`logo-${logo.alt}`}
                        loading="lazy"
                        src={logo.src}
                        width="auto"
                    />
                ))}
            </div>

            <ProgressiveBlur
                blurIntensity={1}
                className="pointer-events-none absolute top-0 left-0 h-full w-[100px] md:w-[160px]"
                direction="left"
            />
            <ProgressiveBlur
                blurIntensity={1}
                className="pointer-events-none absolute top-0 right-0 h-full w-[100px] md:w-[160px]"
                direction="right"
            />

            <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-dashed border-gray-200/50" />
        </div>
    );
}
