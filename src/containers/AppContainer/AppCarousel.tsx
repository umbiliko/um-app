import * as React from 'react';
import { useState } from 'react';
import {
    Alert,
    IconButton,
    LinearProgress,
    SpacerGif,
    VisuallyHidden
} from 'src/components';
import {
    Carousel,
    CarouselProps,
    Controls,
    Slide,
    SlideNav,
    SlideNavItem,
    Slides
} from 'src/containers/Carousel';
import useCarousel from 'src/containers/Carousel/useCarousel';
import { IconBackward, IconForward, IconPause, IconPlay } from 'src/icons';

const SLIDE_DURATION = 3000;

export default function AppCarousel(props: CarouselProps) {
    const [methodCache] = useState(new WeakMap<{ index: number }, { goTo: React.MouseEventHandler }>());
    const { pause, play, goBackward, goForward, goTo, state } = useCarousel(props.slides.length, SLIDE_DURATION);

    return (
        <Carousel
            aria-label="Application Overview"
            slides={[]}
        >
            <Slides>
                {props.slides.map(({ content, image, title }, index: number) => (
                    <Slide
                        children={content}
                        id={`image-${index}`}
                        image={image}
                        isCurrent={index === state.currentIndex}
                        takeFocus={false}
                        title={title}
                    />
                ))}
            </Slides>
            <SlideNav>
                {props.slides.map(({ title }, index: number) => {
                    if (!methodCache.has({ index })) {
                        methodCache.set({ index }, { goTo: () => goTo(index) });
                    }
                    return (
                        <SlideNavItem
                            key={index}
                            isCurrent={index === state.currentIndex}
                            aria-label={`Slide ${index + 1}`}
                            onClick={methodCache.get({ index })!.goTo}
                            takeFocus={false}
                            title={title}
                        />
                    );
                })}
            </SlideNav>
            <Controls>
                {state.isPlaying ? (
                    <IconButton
                        aria-label="Pause"
                        onClick={play}
                        children={<IconPause />}
                    />
                ) : (
                    <IconButton
                        aria-label="Play"
                        onClick={pause}
                        children={<IconPlay />}
                    />
                )}
                <SpacerGif width="10px" />
                <IconButton
                    aria-label="Previous Slide"
                    onClick={goBackward}
                    children={<IconBackward />}
                />
                <IconButton
                    aria-label="Next Slide"
                    onClick={goForward}
                    children={<IconForward />}
                />
            </Controls>
            <LinearProgress
                animate={state.isPlaying}
                duration={SLIDE_DURATION}
                key={`${state.currentIndex}-${state.isPlaying}`}
            />
            <VisuallyHidden>
                <Alert>
                    Item {state.currentIndex + 1} of {props.slides.length}
                </Alert>
            </VisuallyHidden>
        </Carousel>
    );
}
