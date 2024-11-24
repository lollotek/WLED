import { LinearSlider } from "../../components/LinearSlider";

declare type Props = {
    value?: number
    onChange: (val:number) => void
  }

  
export function LedBrightness({
    value,
    onChange
}: Props) {
    return (
        <div className="my-8 space-y-3">
        {/* <p className="space-y-4 font-medium text-gray-800">Colore lettere</p> */}
        <h4 className="text-2xl tracking-tight text-gray-800 sm:text-3xl">
          <span className="block">Luminosità</span>
        </h4>
        <div className="flex items-center relative p-2 w-full rounded-lg overflow-hidden shadow hover:shadow-md bg-slate-300">
            <LinearSlider
              value={value}
              onChange={onChange}
            />
        </div>
      </div>
    )
}