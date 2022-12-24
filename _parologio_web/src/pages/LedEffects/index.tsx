import { BackgroundColor } from "../../components/Icons/BackgroundColor";
import { Bulb } from "../../components/Icons/Bulb";
import { Effects } from "../../components/Icons/Effects";
import { MainColor } from "../../components/Icons/MainColor";

declare type Props = {
    value?: number
    onChange: (val:number) => void
  }

  
export function LedEffects({
    value,
    onChange
}: Props) {
    return (
        <div className="my-8 space-y-6">
        {/* <p className="space-y-4 font-medium text-gray-800">Colore lettere</p> */}
        <h4 className="text-3xl tracking-tight text-gray-800 sm:text-4xl">
          <span className="block">Effetti</span>
        </h4>
        <div className="grid grid-cols-3 gap-4 text-sm my-4 w-full rounded-lg hover:shadow-md bg-slate-300">
          <label onClick={() => onChange(0)}>
            <input className="sr-only peer" name="size" type="radio" value="solid" checked={value === 0} />
            <div className="w-28 h-28 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border peer-checked:border-black/20">
              <MainColor />
            </div>
          </label>
          <label onClick={() => onChange(1)}>
            <input className="sr-only peer" name="size" type="radio" value="Sfon" checked={value === 1}/>
            <div className="w-28 h-28 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border peer-checked:border-black/20">
              <BackgroundColor />
            </div>
          </label>
          <label onClick={() => onChange(36)}>
            <input className="sr-only peer" name="size" type="radio" value="Lum" checked={value === 63}/>
            <div className="w-28 h-28 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border peer-checked:border-black/20">
              <Bulb/>
            </div>
          </label>
          <label onClick={() => onChange(20)}>
            <input className="sr-only peer" name="size" type="radio" value="Effet" checked={value === 20}/>
            <div className="w-28 h-28 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border peer-checked:border-black/20">
              <Effects />
            </div>
          </label>
        </div>
      </div>
    )
}