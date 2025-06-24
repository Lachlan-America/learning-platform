
"use client";

import RoadmapIcon from "./RoadmapIcon";
import RoadmapData from "@/data/reactRoadmap.json";
import Node from "@/components/Node";
import TreeItem from "@/components/TreeItem";
import { useState } from "react";

type TopicData = {
    id: number;
    title: string;
    content?: string;
}

export default function Tree(props: { category: string }) {
    const [tooltipData, setTooltipData] = useState<{
        text: string;
        x: number;
        y: number;
    } | null>(null);

    return (
        <>  
            <RoadmapIcon category={props.category} />
            <div className="relative h-[800px] w-full">
                <div className="absolute left-1/2 -translate-x-1/2 top-10 h-full w-1 bg-[#00d9fe] z-0"></div>
                <div className="flex flex-col items-stretch gap-8 w-full">
                    {RoadmapData.topics.map((topic: TopicData) => (
                        <TreeItem
                            key={topic.id}
                            id={topic.id}
                            title={topic.title}
                            isLeft={topic.id % 2 === 0}
                            content={topic.content ?? ""}
                            handler={setTooltipData}
                        />
                    ))}
                </div>
            </div>
            {tooltipData && (
                <div
                className="fixed max-w-[200px] px-2 py-1 bg-black text-white text-xs rounded z-50"
                style={{
                    top: tooltipData.y + 8,
                    left: tooltipData.x,
                    transform: "translateX(-50%)"
                }}
                >
                {tooltipData.text}
                </div>
            )}
        </>
    );
}