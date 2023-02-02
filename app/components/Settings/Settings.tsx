import * as Slider from '@radix-ui/react-slider';

export default function Settings() {
    return (
        <div className="w-full bg-neutral-900 h-full">
            <div className="text-center font-montserrat p-2 uppercase font-semibold text-xl text-neutral-100">Settings</div>
            <div className='mt-6'>
                <div className="text-center font-montserrat uppercase text-neutral-300">Threshold</div>
                <Slider.Root className="SliderRoot" defaultValue={[50]} max={100} step={1} aria-label="Volume">
                    <Slider.Track className="SliderTrack">
                        <Slider.Range className="SliderRange" />
                    </Slider.Track>
                    <Slider.Thumb className="SliderThumb" />
                </Slider.Root>
            </div>
            
        </div>
    );
}