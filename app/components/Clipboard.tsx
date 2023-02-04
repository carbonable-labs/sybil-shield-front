import { CheckCircleIcon, ClipboardIcon } from "@heroicons/react/24/outline";
import CopyToClipboard from "react-copy-to-clipboard";

export default function ClipboardComponent({nodes, handleCopy, copied}: {nodes:any, handleCopy: () => void, copied: boolean}) {
    return (
        <CopyToClipboard text={JSON.stringify(nodes)} onCopy={handleCopy}>
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
    )
}