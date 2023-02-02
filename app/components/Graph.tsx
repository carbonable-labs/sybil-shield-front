import { ForceGraph3D } from "react-force-graph";

export default function Graph({ graphData }: { graphData: any }) {
    if (graphData.hasOwnProperty("nodes")) { 
        return (
            <div className="p-2">
                <ForceGraph3D 
                    graphData={graphData}
                    linkWidth={2}
                    backgroundColor="#13151C"
                    nodeColor={(node: any) => node.val === "O" ? "#00FF00" : "#FF0000"}
                />
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center py-[20vh] flex-wrap">
            <div className="font-press-start font-bold text-2xl w-full text-center">
                No data to display
            </div>
            <div className="font-montserrat text-xl mt-2 w-full text-center">
                Please enter a valid contract address on StarkNet mainnet
            </div>
        </div>
    );
}