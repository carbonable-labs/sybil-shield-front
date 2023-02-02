import GreenButton from "./GreenButton";

export default function Contract() {
    return (
        <div className="py-4 px-2">
            <div className="relative rounded-3xl w-full bg-project-info-border p-[1px] md:w-8/12 mx-auto lg:w-6/12">
                <div className="relative rounded-3xl bg-project-info p-4 w-full overflow-hidden font-montserrat uppercase text-xs text-center">
                    Detect sybil attacks patterns on StarkNet
                    <div className="w-full grid-cols-1 mt-4">
                        <div className="w-full">
                            <input type="email" className="bg-transparent text-left outline-0 border border-neutral-100 px-3 py-3 rounded-full w-full" name="contract" placeholder="Enter contract address..." aria-label="Contract address" />
                        </div>
                        <div className="w-full mt-2">
                            <GreenButton className="w-full" onClick={() => {}}>Start detection</GreenButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}