import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { useFetcher } from "@remix-run/react";
import { useEffect, useRef } from "react";

export default function Contract({setGraphData, setContract, setRawData}: {setGraphData: any,  setContract: (value: string) => void, setRawData: (value: any) => void}) {
    const contract = useFetcher();
    const ref = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (contract.type === "done" && contract.data) {
          setGraphData(contract.data);
          setRawData(contract.data);
        }
    }, [contract, setGraphData, setRawData]);

    const handleChange = (event: any) => {
        setContract(event.target.value);
      };

    return (
        <div className="py-4 px-2">
            <div className="relative rounded-3xl w-full bg-project-info-border p-[1px] md:w-8/12 mx-auto lg:w-6/12">
                <div className="relative rounded-3xl bg-project-info p-4 w-full overflow-hidden font-montserrat uppercase text-xs text-center">
                    Detect sybil attacks patterns on StarkNet
                    <div className="w-full grid-cols-1 mt-4">
                        <div className="w-full relative">
                            <contract.Form
                                    method="post"
                                    action="/contract/check"
                                    ref={ref}
                                >
                                <input type="text" className="bg-transparent text-left outline-0 border border-neutral-100 px-3 py-3 rounded-full w-full" name="contract" placeholder="Enter contract address..." aria-label="Contract address" onChange={handleChange} />
                                <button className={`text-neutral-100 outine-none rounded-full absolute right-[4px] p-1 top-[4px] ${contract.type === 'done' && contract.data.hasOwnProperty("nodes") ? "bg-greenish-500 text-center hover:bg-greenish-400" : "bg-neutral-300 text-center hover:bg-neutral-200"} `}>
                                    <ShieldCheckIcon className="w-[26px] p-[1px]" />
                                </button>
                            </contract.Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}