export function Node({
  title,
  content,
  setTooltipData
}: {
  title: string;
  content: string;
  setTooltipData: (data: { text: string; x: number; y: number } | null) => void;
}) {

  return (
      <div className="bg-white text-black border-4 border-[#00d9fe] p-4 rounded-lg z-10 hover:bg-purple-500" 
      onMouseEnter={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltipData({
          text: content,
          x: rect.left + rect.width / 2,
          y: rect.bottom,
        });
      }}
      onMouseLeave={() => setTooltipData(null)}
      onClick={() => setTooltipData({ text: content, x: 0, y: 0 })}
      >{title}</div>
  );
}

export default function TreeItem({ 
    isLeft, 
    id, 
    title, 
    content,
    handler
}: { 
    isLeft: boolean; 
    id: number; 
    title: string, 
    content: string,
    handler: (data: { text: string; x: number; y: number } | null) => void
}) {

    return (
        <>
            <div className="relative flex w-full items-center min-h-[100px]">
                {/* Left Side */}
                <div className="w-1/2 flex justify-end items-center pr-4">
                    {isLeft && (
                        <>
                            <Node title={title} content={content} setTooltipData={handler}/>
                            <div className="h-1 w-32 bg-[#00d9fe]"></div>
                        </>
                    )}
                </div>

                {/* Center ID (always centered over the timeline) */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div className="px-4 py-2 rounded-full bg-white border-4 border-[#00d9fe] text-black">{id}</div>
                </div>

                {/* Right Side */}
                <div className="w-1/2 flex items-center justify-start pl-4">
                    {!isLeft && (
                        <>
                            <div className="h-1 w-32 bg-[#00d9fe]"></div>
                            <Node title={title} content={content} setTooltipData={handler}/>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}