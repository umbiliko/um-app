import * as React from 'react';
import { Component, useContext, useEffect, useReducer, useState } from 'react';
import { IconBackward, IconForeward, IconPause, IconPlay } from '@um/ui/icons';
import { Alert, ProgressBar, VisuallyHidden } from '@um/ux/components';
import { Carousel, CarouselProps, CarouselState, Controls, Slide, SlideNav, SlideNavItem, Slides, } from '@um/ux/containers/Carousel';
import useCarousel from '@um/ux/effects/useCarousel';

function AppCarousel(props: CarouselProps) {
    const { pause, play, goBackward, goForward, goTo, state } = useCarousel(props.slides.length);

    return (
        <Carousel>
            <SlideNav>
                {slides.map((slide, index) => (
                    <SlideNavItem
                        key={index}
                        isCurrent={index === state.currentIndex}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => goTo(index)}
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
                    onClick={() => {
                        dispatch({ type: NEXT });
                    }}
                    children={<IconForeward />}
                />
            </Controls>
            <ProgressBar
                animate={state.isPlaying}
                key={state.currentIndex + state.isPlaying}
                time={SLIDE_DURATION}
            />
            <VisuallyHidden>
                <Alert>
                    Item {state.currentIndex + 1} of {SVGElementInstanceList.length}
                </Alert>
            </VisuallyHidden>
        </Carousel>
    );
}