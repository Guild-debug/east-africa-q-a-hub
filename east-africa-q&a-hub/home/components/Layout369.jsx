"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout369() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Discover</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Harnessing AI for Answers
            </h2>
            <p className="md:text-md">
              Get accurate answers through AI and community collaboration.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <div className="grid grid-cols-1 border border-border-primary sm:col-span-2 sm:row-span-1 sm:grid-cols-2">
              <div className="flex flex-1 flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Insight</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    How Our Platform Works
                  </h3>
                  <p>AI meets community wisdom for real-time solutions.</p>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
                  <Button
                    title="Learn More"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait.svg"
                  alt="Relume placeholder image 3"
                  className="size-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col border border-border-primary">
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Answers</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Join the Conversation
                  </h3>
                  <p>Ask questions and receive insightful responses today.</p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Sign Up"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col border border-border-primary">
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Answers</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Join the Conversation
                  </h3>
                  <p>Ask questions and receive insightful responses today.</p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Sign Up"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 2"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
