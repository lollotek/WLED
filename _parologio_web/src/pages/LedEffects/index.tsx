import { LightBulbIcon, BellAlertIcon, HeartIcon, ArrowsUpDownIcon, SparklesIcon, SwatchIcon  } from '@heroicons/react/24/outline'

declare type Props = {
  value?: number
  onChange: (val:number) => void
}

export function LedEffects({
  value,
  onChange
}: Props) {
    return (
        <div className="my-8 space-y-3">
        <h4 className="text-2xl tracking-tight text-gray-800 sm:text-3xl">
          <span className="block">Effetti</span>
        </h4>
        <div className="grid grid-cols-3 gap-4 text-sm my-4 w-full rounded-lg hover:shadow-md bg-slate-300">
          <label onClick={() => onChange(0)}>
            <input className="sr-only peer" name="size" type="radio" value="solid" checked={value === 0} />
            <div className="p-8 w-24 h-24 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border peer-checked:border-black/20">
              <LightBulbIcon/>
            </div>
          </label>
          <label onClick={() => onChange(1)}>
            <input className="sr-only peer" name="size" type="radio" value="Sfon" checked={value === 1}/>
            <div className="p-8 w-24 h-24 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border peer-checked:border-black/20">
              <BellAlertIcon className="size-2" />
            </div>
          </label>
          <label onClick={() => onChange(63)}>
            <input className="sr-only peer" name="size" type="radio" value="Lum" checked={value === 63}/>
            <div className="p-8 w-24 h-24 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border peer-checked:border-black/20">
              <HeartIcon />
            </div>
          </label>
          <label onClick={() => onChange(2)}>
            <input className="sr-only peer" name="size" type="radio" value="Effet" checked={value === 2}/>
            <div className="p-8 w-24 h-24 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border peer-checked:border-black/20">
              <ArrowsUpDownIcon />
            </div>
          </label>
          <label onClick={() => onChange(59)}>
            <input className="sr-only peer" name="size" type="radio" value="Effet" checked={value === 59}/>
            <div className="p-8 w-24 h-24 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border peer-checked:border-black/20">
              <SparklesIcon />
            </div>
          </label>
          <label onClick={() => onChange(113)}>
            <input className="sr-only peer" name="size" type="radio" value="Effet" checked={value === 113}/>
            <div className="p-8 w-24 h-24 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border peer-checked:border-black/20">
              <SwatchIcon />
            </div>
          </label>
        </div>
      </div>
    )
}