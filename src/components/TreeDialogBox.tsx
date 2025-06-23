export default function TreeDialogBox({ id, title, isLeft }: {id: number, title: string, isLeft?: boolean}) {
    return (
        <>
            {isLeft ? <div className="relative right-1/2 flex justify-start items-center">
                <div className="bg-white text-black border-4 border-[#00d9fe] p-4 rounded-lg z-10">{title}</div>
                <div className="h-1 bg-[#00d9fe] w-8"></div>
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white 
                border-4 border-[#00d9fe] text-black">{id}</div>
                
            </div> : <div className="relative left-1/2 flex justify-end items-center">
                <div className="w-8 h-8 flex items-center justify-center rounded-full 
                bg-white border-4 border-[#00d9fe] text-black">{id}</div>
                <div className="h-1 bg-[#00d9fe] w-8"></div>
                <div className="bg-white text-black border-4 border-[#00d9fe] p-4 rounded-lg z-10">{title}</div>
            </div>}
        </>
    );
}