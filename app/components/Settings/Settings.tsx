import * as Slider from '@radix-ui/react-slider';
import * as Switch from '@radix-ui/react-switch';

export default function Settings({setThreshold, threshold, setGraphStyle, graphStyle}: {setThreshold: (value: number) => void, threshold: number, setGraphStyle: (value: boolean) => void, graphStyle: boolean}) {
    return (
        <div className="w-full bg-neutral-900 h-full">
            <div className="text-center font-montserrat p-2 uppercase font-semibold text-xl text-neutral-100">Settings</div>
            <div className='mt-6'>
                <div className="w-full text-center">
                    <div className="text-center font-montserrat uppercase text-neutral-300">2D/3D</div>
                    <Switch.Root className="SwitchRoot mx-auto text-center" defaultChecked={graphStyle} id="airplane-mode" onCheckedChange={(value) => {setGraphStyle(value)}}>
                        <Switch.Thumb className="SwitchThumb" />
                    </Switch.Root>
                </div>
                <div className="w-full text-center mt-12">
                    <div className="text-center font-montserrat uppercase text-neutral-300 mt-6">Threshold</div>
                    <Slider.Root className="SliderRoot" defaultValue={[50]} max={100} step={1} aria-label="Volume" onValueChange={(value) => {setThreshold(value[0])}}>
                        <Slider.Track className="SliderTrack">
                            <Slider.Range className="SliderRange" />
                        </Slider.Track>
                        <Slider.Thumb className="SliderThumb">
                            <div className="absolute top-6 left-[2px] text-neutral-300 text-xs">{threshold}</div>
                        </Slider.Thumb>
                    </Slider.Root>
                </div>
            </div>
            
        </div>
    );
}