import { ForceGraph2D, ForceGraph3D } from "react-force-graph";
import { getColorByPercentage } from "~/utils/graphUtils";

export default function Graph({ graphData, threshold, graphStyle, contract }: { graphData: any, threshold: number, graphStyle: boolean, contract: string }) {
    if (graphData.hasOwnProperty("nodes") && graphStyle) { 
        return (
            <div className="p-2">
                <ForceGraph3D 
                    graphData={graphData}
                    backgroundColor="#13151C"
                    nodeColor={(node: any) => node.score < (threshold/100) ? "#FFF" : getColorByPercentage(node.score)}
                />
            </div>
        );
    }

    if (graphData.hasOwnProperty("nodes") && !graphStyle) { 
        return (
            <div className="p-2">
                <ForceGraph2D 
                    graphData={graphData}
                    backgroundColor="#13151C"
                    nodeColor={(node: any) => node.score < (threshold/100) ? "#FFF" : getColorByPercentage(node.score)}
                    linkColor={(link: any) => "#363840"}
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