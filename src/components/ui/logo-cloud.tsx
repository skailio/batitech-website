"use client";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
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

            <InfiniteSlider gap={42} reverse speed={60} speedOnHover={20}>
                {logos.map((logo) => (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                        alt={logo.alt}
                        className="pointer-events-none h-12 select-none md:h-16 w-auto object-contain"
                        // Increased size slightly (h-4 -> h-8) for visibility
                        height="auto"
                        key={`logo-${logo.alt}`}
                        loading="lazy"
                        src={logo.src}
                        width="auto"
                    />
                ))}
            </InfiniteSlider>

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
