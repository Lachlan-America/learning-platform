
export default function RoadmapIcon(props: { category: string }) {
    return (
            <div className="flex m-10">
                <div className="relative">
                    <img src={`/${props.category}.svg`} width={256} className={`${props.category.toLowerCase() == "react" ? "rounded-full" : "rounded-lg"} border-white border-8`} />
                    <h1 className="absolute left-1/2 -translate-x-1/2 top-12 bg-gray-500 px-4 py-1 rounded-lg flex justify-center items-center text-white text-2xl font-bold border-2 border-white"> {props.category} </h1>
                </div>
            </div>
            );
        }