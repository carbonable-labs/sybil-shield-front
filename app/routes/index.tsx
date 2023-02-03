import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { State } from "react-burger-menu";
import { isMobile } from "react-device-detect";
import Contract from "~/components/Contract";
import Header from "~/components/Header";
import Settings from "~/components/Settings/Settings";
import SettingsMobile from "~/components/Settings/SettingsMobile";

let Graph = lazy(() => import("~/components/Graph"));

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(!isMobile);
  const [graphData, setGraphData] = useState<any>({});
  const [threshold, setThreshold] = useState(50);
  const [graphStyle, setGraphStyle] = useState(false);
  const [contract, setContract] = useState("");

  const toggleMenu = useCallback(() => setMenuOpen(!menuOpen), [setMenuOpen, menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), [setMenuOpen]);

  const handleStateChange = useCallback((state: State) => setMenuOpen(state.isOpen), [setMenuOpen]);
  
  return (
    <div className="mx-auto" id="outer-container">
      <Header toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <SettingsMobile handleStateChange={handleStateChange} closeMenu={closeMenu} menuOpen={menuOpen} />
      <div className="w-full h-[calc(100vh_-_66px)] lg:h-[calc(100vh_-_80px)] flex">
        {!isMobile && 
          <div className="w-3/12 rounded-l-2xl">
            <Settings setThreshold={setThreshold} threshold={threshold} setGraphStyle={setGraphStyle} graphStyle={graphStyle} />
          </div> 
        }
        <div className={isMobile ? "w-full" : "w-9/12" }>
          <Contract setGraphData={setGraphData} setContract={setContract} />
          <ClientOnly>
            <Suspense fallback="">
              <Graph graphData={graphData} threshold={threshold} graphStyle={graphStyle} contract={contract} />
            </Suspense>
          </ClientOnly>
        </div> 
      </div>
    </div>
    
  );
}

export function ClientOnly({ children }: { children: ReactNode }) {
  let [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted ? <>{children}</> : null;
}
