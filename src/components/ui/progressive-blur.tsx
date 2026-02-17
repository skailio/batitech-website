'use client';
import { cn } from '@/lib/utils';
import { HTMLMotionProps, motion } from 'framer-motion';

// User code imported from 'motion/react' but I installed 'framer-motion'.
// 'motion/react' is the new package name for Framer Motion v12, but standard install is 'framer-motion'.
// If I installed `motion`, I can use `motion/react`.
// I installed BOTH `framer-motion` and `motion` in step 341.
// So I can use `motion/react` or `framer-motion`.
// I'll use `framer-motion` to be safe/standard, but the user code had `motion/react`.
// I'll stick to `framer-motion` for consistency unless specific new features are needed.
// Wait, `HTMLMotionProps` export from `framer-motion` is standard.

export const GRADIENT_ANGLES = {
    top: 0,
    right: 90,
    bottom: 180,
    left: 270,
};

export type ProgressiveBlurProps = {
    direction?: keyof typeof GRADIENT_ANGLES;
    blurLayers?: number;
    className?: string;
    blurIntensity?: number;
} & HTMLMotionProps<'div'>;

export function ProgressiveBlur({
    direction = 'bottom',
    blurLayers = 8,
    className,
    blurIntensity = 0.25,
    ...props
}: ProgressiveBlurProps) {
    const layers = Math.max(blurLayers, 2);
    const segmentSize = 1 / (blurLayers + 1);

    return (
        <div className={cn('relative', className)}>
            {Array.from({ length: layers }).map((_, index) => {
                const angle = GRADIENT_ANGLES[direction];
                const gradientStops = [
                    index * segmentSize,
                    (index + 1) * segmentSize,
                    (index + 2) * segmentSize,
                    (index + 3) * segmentSize,
                ].map(
                    (pos, posIndex) =>
                        `rgba(255, 255, 255, ${posIndex === 1 || posIndex === 2 ? 1 : 0}) ${pos * 100}%`
                );

                const gradient = `linear-gradient(${angle}deg, ${gradientStops.join(
                    ', '
                )})`;

                return (
                    <motion.div
                        key={index}
                        className='pointer-events-none absolute inset-0 rounded-[inherit]'
                        style={{
                            maskImage: gradient,
                            WebkitMaskImage: gradient,
                            backdropFilter: `blur(${index * blurIntensity}px)`,
                        }}
                        {...props}
                    />
                );
            })}
        </div>
    );
}
