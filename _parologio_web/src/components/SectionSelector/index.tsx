import { BackgroundColor } from "../Icons/BackgroundColor"
import { Bulb } from "../Icons/Bulb"
import { Effects } from "../Icons/Effects"
import { MainColor } from "../Icons/MainColor"

declare type Props = {
    selected?: string
    onChange: (selected: string) => void
  }
 
export function SectionSelector({
    selected,
    onChange
}: Props) {
    return (
      <div >
        <div className="flex text-sm my-4 w-full rounded-lg hover:shadow-md bg-slate-300">
          <label onClick={() => onChange('Lett')}>
            <input className="sr-only peer" name="size" type="radio" value="Lett" checked={selected==='Lett'} />
            <div className="w-20 h-20 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border peer-checked:border-black/20">
              <MainColor />
            </div>
          </label>
          <label onClick={() => onChange('Sfon')}>
            <input className="sr-only peer" name="size" type="radio" value="Sfon" checked={selected==='Sfon'}/>
            <div className="w-20 h-20 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border peer-checked:border-black/20">
              <BackgroundColor />
            </div>
          </label>
          <label onClick={() => onChange('Lum')}>
            <input className="sr-only peer" name="size" type="radio" value="Lum" checked={selected==='Lum'}/>
            <div className="w-20 h-20 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border peer-checked:border-black/20">
              <Bulb/>
            </div>
          </label>
          <label onClick={() => onChange('Effet')}>
            <input className="sr-only peer" name="size" type="radio" value="Effet" checked={selected==='Effet'}/>
            <div className="w-20 h-20 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border peer-checked:border-black/20">
              <Effects />
            </div>
          </label>
        </div>
      </div>
    )
}