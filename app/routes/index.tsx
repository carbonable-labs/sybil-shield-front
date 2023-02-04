import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { State } from "react-burger-menu";
import { isMobile } from "react-device-detect";
import Contract from "~/components/Contract";
import Header from "~/components/Header";
import Settings from "~/components/Settings/Settings";
import SettingsMobile from "~/components/Settings/SettingsMobile";
import ClipboardComponent from "~/components/Clipboard";


let Graph = lazy(() => import("~/components/Graph"));

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(!isMobile);
  const [graphData, setGraphData] = useState<any>({});
  const [rawData, setRawData] = useState<any>({});
  const [threshold, setThreshold] = useState(50);
  const [displayIn3D, setDisplayIn3D] = useState(false);
  const [contract, setContract] = useState("");
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }

  const toggleMenu = useCallback(() => setMenuOpen(!menuOpen), [setMenuOpen, menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), [setMenuOpen]);

  const handleStateChange = useCallback((state: State) => setMenuOpen(state.isOpen), [setMenuOpen]);
  
  return (
    <div className="mx-auto" id="outer-container">
      <Header toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <SettingsMobile handleStateChange={handleStateChange} closeMenu={closeMenu} menuOpen={menuOpen} setThreshold={setThreshold} threshold={threshold} setDisplayIn3D={setDisplayIn3D} displayIn3D={displayIn3D} />
      <div className="w-full h-[calc(100vh_-_66px)] lg:h-[calc(100vh_-_80px)] flex">
        {!isMobile && 
          <div className="w-3/12 rounded-l-2xl">
            <Settings setThreshold={setThreshold} threshold={threshold} setDisplayIn3D={setDisplayIn3D} displayIn3D={displayIn3D} />
          </div> 
        }
        <div className={isMobile ? "w-full" : "w-9/12" }>
          <Contract setGraphData={setGraphData} setContract={setContract} setRawData={setRawData} setIsLoading={setIsLoading} />
          <ClientOnly>
            <Suspense fallback="">
              <Graph graphData={graphData} threshold={threshold} displayIn3D={displayIn3D} contract={contract} isLoading={isLoading} />
              { graphData.hasOwnProperty("nodes") && !isMobile && !isLoading &&
                <ClipboardComponent nodes={rawData.nodes} handleCopy={handleCopy} copied={copied} />
              }
            </Suspense>
          </ClientOnly>
        </div> 
      </div>
    </div>
  );
}

/**
 * 
 * Make sure that the component is only rendered on the client side
 */
export function ClientOnly({ children }: { children: ReactNode }) {
  let [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted ? <>{children}</> : null;
}

