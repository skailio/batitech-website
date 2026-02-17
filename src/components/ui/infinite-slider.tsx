'use client';
import { cn } from '@/lib/utils';
import { useMotionValue, animate, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import useMeasure from 'react-use-measure';

type InfiniteSliderProps = {
    children: React.ReactNode;
    gap?: number;
    duration?: number;
    durationOnHover?: number;
    direction?: 'horizontal' | 'vertical';
    reverse?: boolean;
    className?: string;
    speed?: number; // User code used 'speed' but prop is 'duration'. I'll support 'speed' concept by mapping it if needed, or stick to user code which uses duration.
    // Wait, user code for LogoCloud uses <InfiniteSlider gap={42} reverse speed={60} speedOnHover={20}>
    // But the implementation code for InfiniteSlider provided by user uses 'duration' and 'durationOnHover'.
    // I need to adapt one or the other.
    // The provided implementation has `duration = 25`. It does NOT have `speed`.
    // However, `LogoCloud` usage has `speed={60}`.
    // I will add `speed` prop to InfiniteSlider implementation to make it compatible with LogoCloud usage.

    speedOnHover?: number;
};

export function InfiniteSlider({
    children,
    gap = 16,
    duration = 25,
    durationOnHover,
    direction = 'horizontal',
    reverse = false,
    className,
    speed, // Added
    speedOnHover, // Added
}: InfiniteSliderProps) {
    // Map speed to duration if speed is provided. Lower speed = higher duration?
    // Or usually speed is pixels/sec?
    // User code: `speed={60}`. Implementation default duration is 25.
    // I will trust the implementation mainly, but if speed is passed, I'll use it as duration alias because users often mix them up.
    // Actually, let's just use speed as duration if duration isn't set explicitly or if speed is set.
    // The user provided the implementation code, so I should use THAT.
    // BUT the user ALSO provided usage code that mismatches.
    // I will modify the implementation to accept `speed` and `speedOnHover` as aliases for duration.
    const effectiveDuration = speed || duration;
    const effectiveDurationOnHover = speedOnHover || durationOnHover;

    const [currentDuration, setCurrentDuration] = useState(effectiveDuration);
    const [ref, { width, height }] = useMeasure();
    const translation = useMotionValue(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [key, setKey] = useState(0);

    useEffect(() => {
        let controls;
        const size = direction === 'horizontal' ? width : height;
        const contentSize = size + gap;
        const from = reverse ? -contentSize / 2 : 0;
        const to = reverse ? 0 : -contentSize / 2;

        if (isTransitioning) {
            controls = animate(translation, [translation.get(), to], {
                ease: 'linear',
                duration:
                    currentDuration * Math.abs((translation.get() - to) / contentSize),
                onComplete: () => {
                    setIsTransitioning(false);
                    setKey((prevKey) => prevKey + 1);
                },
            });
        } else {
            controls = animate(translation, [from, to], {
                ease: 'linear',
                duration: currentDuration,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
                onRepeat: () => {
                    translation.set(from);
                },
            });
        }

        return controls?.stop;
    }, [
        key,
        translation,
        currentDuration,
        width,
        height,
        gap,
        isTransitioning,
        direction,
        reverse,
    ]);

    const hoverProps = effectiveDurationOnHover
        ? {
            onHoverStart: () => {
                setIsTransitioning(true);
                setCurrentDuration(effectiveDurationOnHover!);
            },
            onHoverEnd: () => {
                setIsTransitioning(true);
                setCurrentDuration(effectiveDuration);
            },
        }
        : {};

    return (
        <div className={cn('overflow-hidden', className)}>
            <motion.div
                className='flex w-max'
                style={{
                    ...(direction === 'horizontal'
                        ? { x: translation }
                        : { y: translation }),
                    gap: `${gap}px`,
                    flexDirection: direction === 'horizontal' ? 'row' : 'column',
                }}
                ref={ref}
                {...hoverProps}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
}
