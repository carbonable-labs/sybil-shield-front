import { isMobile } from "react-device-detect";
import { ForceGraph2D, ForceGraph3D } from "react-force-graph";
import { getColorByPercentage } from "~/utils/graphUtils";

export default function Graph({ graphData, threshold, displayIn3D, isLoading }: { graphData: any, threshold: number, displayIn3D: boolean, contract: string, isLoading: boolean }) {

    if (isLoading) {
        return (
            <div className="flex items-center justify-center py-[20vh] flex-wrap">
                <div className="font-press-start font-bold text-2xl w-full text-center flex items-center justify-center">
                    Loading <div className="animate-bounce-1 animation-delay-100">.</div><div className="animate-bounce-2 animation-delay-200">.</div><div className="animate-bounce-3 animation-delay-300">.</div>
                </div>
            </div>
        );
    }

    if (graphData.hasOwnProperty("nodes") && displayIn3D) { 
        return (
            <div className="w-full h-full">
                <ForceGraph3D 
                    graphData={graphData}
                    width={isMobile ? window.innerWidth : window.innerWidth - 300}
                    height={isMobile ? window.innerHeight - 66 : window.innerHeight - 80}
                    backgroundColor="#13151C"
                    nodeColor={(node: any) => node.score < (threshold/100) ? "#FFF" : getColorByPercentage(node.score)}
                    nodeLabel={(node: any) => "<div class='font-montserrat text-sm'>" + node.name + "</div><div>Score: " + (node.score * 100).toFixed(0) + "</div>"}
                />
            </div>
        );
    }

    if (graphData.hasOwnProperty("nodes") && !displayIn3D) { 
        return (
            <div className="w-full h-full">
                <ForceGraph2D 
                    graphData={graphData}
                    width={isMobile ? window.innerWidth : window.innerWidth - 300}
                    height={isMobile ? window.innerHeight - 66 : window.innerHeight - 80}
                    backgroundColor="#13151C"
                    nodeColor={(node: any) => node.score < (threshold/100) ? "#FFF" : getColorByPercentage(node.score)}
                    linkColor={(link: any) => "#363840"}
                    nodeLabel={(node: any) => "<div class='font-montserrat text-sm'>" + node.name + "</div><div>Score: " + (node.score * 100).toFixed(0) + "</div>"} 
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