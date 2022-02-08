import { LinearSlider } from "../../components/LinearSlider";
import { Toggle } from "../../components/Toggle";
import { gradientRainbow } from "../../utils/colors";

declare type Props = {
    value?: number
    enabled?:boolean;
    onChange: (val: number) => void
    onToggle: (selected: boolean) => void
  }

  
export function BackgroundColor({
    value,
    enabled,
    onChange,
    onToggle
}: Props) {
    return (
        <div className="my-8 space-y-3">
        {/* <p className="space-y-4 font-medium text-gray-800">Colore lettere</p> */}
        
        <div className="flex justify-between">
          <h4 className="text-3xl tracking-tight text-gray-800 sm:text-4xl">
            <span className="block">Colore sfondo</span>
          </h4>
          <div className="my-0.5">
            <Toggle onToggle={onToggle} selected={enabled}/>
          </div>
        </div>
        {/* <div className="ml-auto pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-slate-900/10 ring-slate-900/5"><div className="h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out"></div></div>
        <div className="ml-auto pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-indigo-600 ring-black/20">     <div className="h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out translate-x-4"></div></div> */}

        <div className="flex items-center relative p-4 w-full rounded-lg overflow-hidden shadow hover:shadow-md bg-slate-300">
            <LinearSlider
              gradient={gradientRainbow}
              value={value}
              onChange={onChange}
            />
        </div>
      </div>
    )
}