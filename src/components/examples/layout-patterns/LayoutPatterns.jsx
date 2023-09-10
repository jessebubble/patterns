import { Container } from '../../Container';
import { Border } from '../../Border';
import { FadeIn } from '../../FadeIn';
import { DeviceTabletIcon } from '@heroicons/react/24/solid';

export function LayoutPatterns() {
    return (
        <>
            <Container className="">
                <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
                    <FadeIn>
                        <article>
                            <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                                    <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                                        <DeviceTabletIcon className="h-12 w-12 flex-none text-neutral-950" />
                                        <h3 className="mt-6 flex items-center text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                                            Using Modern CSS APIs
                                        </h3>
                                    </div>
                                    <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                                        <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                                            Aspect ratio image card
                                        </p>
                                    </div>
                                </div>
                                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                                    <p className="font-display text-4xl font-medium text-neutral-950">
                                        Layout Patterns
                                    </p>
                                    <div className="mt-6 space-y-6 text-base text-neutral-600">
                                        <p>
                                            Welcome to our growing collection of layout patterns. These patterns demonstrate considerations for accessibility, user preferences 
                                            and support all modern browsers
                                        </p>
                                    </div>
                                    <div className="mt-8 flex">
                                        <div className="flex w-full items-center justify-center rounded-lg border bg-cosa-white p-2">
                                            
                                        </div>                                        
                                    </div>
                                </div>
                            </Border>
                        </article>
                    </FadeIn>
                </div>
            </Container>
        </>
    );
}