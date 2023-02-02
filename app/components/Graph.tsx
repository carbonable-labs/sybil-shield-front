import { ForceGraph3D } from "react-force-graph";

function genRandomTree(N = 300, reverse = false) {
    return {
      nodes: [...Array(N).keys()].map(i => ({ id: i })),
        links: [...Array(N).keys()]
      .filter(id => id)
      .map(id => ({
        [reverse ? 'target' : 'source']: id,
        [reverse ? 'source' : 'target']: Math.round(Math.random() * (id-1))
      }))
    };
  }

export default function Graph() {
    const gData = genRandomTree();
    return (
        <ForceGraph3D
            graphData={gData}
            linkWidth={2}
        />
    );
}