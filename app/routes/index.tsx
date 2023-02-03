import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { State } from "react-burger-menu";
import { isMobile } from "react-device-detect";
import Contract from "~/components/Contract";
import Header from "~/components/Header";
import Settings from "~/components/Settings/Settings";
import SettingsMobile from "~/components/Settings/SettingsMobile";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { CheckCircleIcon, ClipboardIcon } from "@heroicons/react/24/outline";

let Graph = lazy(() => import("~/components/Graph"));

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(!isMobile);
  const [graphData, setGraphData] = useState<any>({});
  const [rawData, setRawData] = useState<any>({});
  const [threshold, setThreshold] = useState(50);
  const [graphStyle, setGraphStyle] = useState(false);
  const [contract, setContract] = useState("");
  const [copied, setCopied] = useState(false);

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
      <SettingsMobile handleStateChange={handleStateChange} closeMenu={closeMenu} menuOpen={menuOpen} setThreshold={setThreshold} threshold={threshold} setGraphStyle={setGraphStyle} graphStyle={graphStyle} />
      <div className="w-full h-[calc(100vh_-_66px)] lg:h-[calc(100vh_-_80px)] flex">
        {!isMobile && 
          <div className="w-3/12 rounded-l-2xl">
            <Settings setThreshold={setThreshold} threshold={threshold} setGraphStyle={setGraphStyle} graphStyle={graphStyle} />
          </div> 
        }
        <div className={isMobile ? "w-full" : "w-9/12" }>
          <Contract setGraphData={setGraphData} setContract={setContract} setRawData={setRawData} />
          <ClientOnly>
            <Suspense fallback="">
              <Graph graphData={graphData} threshold={threshold} graphStyle={graphStyle} contract={contract} />
              { graphData.hasOwnProperty("nodes") && !isMobile &&
                <CopyToClipboard text={JSON.stringify(rawData.nodes)} onCopy={handleCopy}>
                  <div>
                  { !copied && <button className="absolute right-2 bottom-6 inline-flex items-center justify-center uppercase text-neutral-100 outine-none rounded-full px-3 py-2 bg-greenish-500 text-center hover:bg-greenish-400" onCopy={handleCopy}>
                    <ClipboardIcon className="w-6 h-6 mr-2" />
                    Copy data to clipboard
                  </button>
                  }
                  { copied && <button className="absolute right-2 bottom-6 inline-flex items-center justify-center uppercase text-neutral-100 outine-none rounded-full px-3 py-2 bg-greenish-500 text-center hover:bg-greenish-400" onCopy={handleCopy}>
                    <CheckCircleIcon className="w-6 h-6 mr-2" />
                    Copied
                  </button>
                  }
                  </div>
                </CopyToClipboard>
              }
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

