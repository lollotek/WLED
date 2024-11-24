import { BoldIcon, SparklesIcon, WifiIcon, ClockIcon  } from '@heroicons/react/24/outline'

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
        <div className="flex justify-evenly p-4 gap-8 text-sm my-4 w-full rounded-lg hover:shadow-md bg-slate-300">
          <label onClick={() => onChange('Lett')}>
            <input className="sr-only peer" name="size" type="radio" value="Lett" checked={selected==='Lett'} />
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-blue-500 peer-checked:text-white">
              <BoldIcon className="size-2 bg-slate-300"/>
            </div>
          </label>
          <label onClick={() => onChange('Effet')}>
            <input className="sr-only peer" name="size" type="radio" value="Effet" checked={selected==='Effet'}/>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-blue-500 peer-checked:text-white">
              <SparklesIcon className="size-6 bg-slate-300" />
            </div>
          </label>
          {/* <label onClick={() => onChange('Time')}>
            <input className="sr-only peer" name="size" type="radio" value="Time" checked={selected==='Effet'}/>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-blue-500 peer-checked:text-white">
              <ClockIcon className="size-6 bg-slate-300" />
            </div>
          </label> */}
          <label onClick={() => onChange('Wifi')}>
            <input className="sr-only peer" name="size" type="radio" value="Wifi" checked={selected==='Wifi'}/>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-blue-500 peer-checked:text-white">
              <WifiIcon className="w-8 h-8 bg-slate-300"/>
            </div>
          </label>
        </div>
      </div>
    )
}