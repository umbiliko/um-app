import * as React from 'react';
import { IconBackward, IconForward, IconPause, IconPlay } from 'src/icons';
import { Alert, IconButton, LinearProgress, SpacerGif, VisuallyHidden } from 'src/components';
import { Carousel, CarouselProps, Controls, Slide, SlideNav, SlideNavItem, Slides, } from 'src/containers/Carousel';
import useCarousel from 'src/effects/useCarousel';

const SLIDE_DURATION = 3000;

function AppCarousel(props: CarouselProps) {
    const { pause, play, goBackward, goForward, goTo, state } = useCarousel(props.slides.length, SLIDE_DURATION);

    return (
        <Carousel
            aria-label="Application Overview"
        >
            <Slides>
                {props.slides.map(({ content, image, title }, index) => (
                        <Slide
                            children={content}
                            id={`image-${index}`}
                            image={image}
                            isCurrent={index === state.currentIndex}
                            takenFocus={false}
                            title={title}
                        />
                    )
                )}
            </Slides>
            <SlideNav>
                {props.slides.map((slide, index: number) => (
                    <SlideNavItem
                        key={index}
                        isCurrent={index === state.currentIndex}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => goTo(index)}
                        takenFocus={false}
                    />
                ))}
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
                key={state.currentIndex + state.isPlaying}
            />
            <VisuallyHidden>
                <Alert>
                    Item {state.currentIndex + 1} of {props.slides.length}
                </Alert>
            </VisuallyHidden>
        </Carousel>
    );
}