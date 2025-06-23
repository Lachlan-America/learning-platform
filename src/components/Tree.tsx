
"use client";

import RoadmapIcon from "./RoadmapIcon";

const topics = [
    {
        id: 1,
        title: 'CLI Tools',
        content: 'Learn the fundamentals of Vite.',
    }, 
    {
        id: 2,
        title: 'Components',
        content: 'Components are the building blocks of React applications. They let us split the UI into independent, reusable pieces, and think about each piece in isolation.',
    },
    {
        id: 3,
        title: 'CLI Tools',
        content: 'Learn the fundamentals of Vite.',
    }, 
    {
        id: 4,
        title: 'Components',
        content: 'Components are the building blocks of React applications. They let us split the UI into independent, reusable pieces, and think about each piece in isolation.',
    },{
        id: 5,
        title: 'CLI Tools',
        content: 'Learn the fundamentals of Vite.',
    }, 
    {
        id: 6,
        title: 'Components',
        content: 'Components are the building blocks of React applications. They let us split the UI into independent, reusable pieces, and think about each piece in isolation.',
    },
    {
        id: 7,
        title: 'CLI Tools',
        content: 'Learn the fundamentals of Vite.',
    }, 
    {
        id: 8,
        title: 'Components',
        content: 'Components are the building blocks of React applications. They let us split the UI into independent, reusable pieces, and think about each piece in isolation.',
    },];

function Topic({ isLeft, id, title }: { isLeft: boolean; id: number; title: string }) {
    // Determines the flex container

    // z determines the stacking order of the elements

    // relative keyword is used to position a child absolutely 
    // within this container (without it it defaults to the page instead of the container)
    return (
        <>
            <div className="relative flex w-full items-center min-h-[50px]">
                {/* Left Side */}
                <div className="w-1/2 flex justify-end items-center pr-4">
                    {isLeft && (
                    <>
                        <div className="bg-white text-black border-4 border-[#00d9fe] p-4 rounded-lg z-10">{title}</div>
                        <div className="h-1 w-32 bg-[#00d9fe]"></div>
                    </>
                    )}
                </div>

                {/* Center ID (always centered over the timeline) */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div className="px-4 py-2 rounded-full bg-white border-4 border-[#00d9fe] text-black">
                    {id}
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-1/2 flex items-center justify-start pl-4">
                    {!isLeft && (
                    <>
                        <div className="h-1 w-32 bg-[#00d9fe]"></div>
                        <div className="bg-white text-black border-4 border-[#00d9fe] p-4 rounded-lg z-10">{title}</div>
                    </>
                    )}
                </div>
            </div>
        </>
    );
}

export default function Tree(props: { category: string }) {

    return (
        <>  
            <RoadmapIcon category={props.category} />
            <div className="relative h-[800px] w-full">
                <div className="absolute left-1/2 -translate-x-1/2 top-5 h-full w-1 bg-[#00d9fe] z-0"></div>
                <div className="flex flex-col items-stretch gap-8 w-full">
                    {topics.map((topic, index) => (
                        <Topic
                        key={topic.id}
                        id={topic.id}
                        title={topic.title}
                        isLeft={index % 2 === 0}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}