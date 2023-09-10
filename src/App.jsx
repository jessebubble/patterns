import { PageIntro } from './components/PageIntro';
import { AnimationPatterns } from './components/examples/animation-patterns/AnimationPatterns';
import { ClipBoardPatterns } from './components/examples/clipboard-patterns/ClipBoardPatterns';
import { ComponentPatterns } from './components/examples/component-patterns/ComponentPatterns';
import { FilesDirectoriesPatterns } from './components/examples/files-directories-patterns/FilesDirectoriesPatterns';
import { LayoutPatterns } from './components/examples/layout-patterns/LayoutPatterns';
import { MediaPatterns } from './components/examples/media-patterns/MediaPatterns';
import { ThemingPatterns } from './components/examples/theming-patterns/ThemingPatterns';

function Footer() {
    return (
        <footer className="mt-24 w-full sm:mt-32">
            <div className="border-t border-neutral-950/10 pr-3 pt-12">
                <p className="text-end text-sm text-gray-700">
                    <a
                        className="hover:text-centro-pink"
                        href="https://www.jessebubble.dev/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        jessebubble.dev <span aria-hidden="true">→</span>
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default function App() {
    return (
        <>
            <PageIntro
                eyebrow="Patterns"
                title="Breaking down common web design and development UI components and patterns"
            >
                <p>
                    Patterns is a collection of web design and development techniques aimed to optimize the online experience with consideration for accessibility and user preferences
                </p>
            </PageIntro>
            
            <AnimationPatterns />
            <ClipBoardPatterns />
            <ComponentPatterns />  
            <FilesDirectoriesPatterns /> 
            <LayoutPatterns />
            <MediaPatterns />
            <ThemingPatterns />

            <Footer />
        </>
    );
}