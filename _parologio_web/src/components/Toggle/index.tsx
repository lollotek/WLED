declare type Props = {
    selected?: boolean
    onToggle: (selected: boolean) => void
  }
 
export function Toggle({
    selected,
    onToggle
}: Props) {
    return (
      <div
        onClick={() => onToggle(!selected)}
        class={`ml-auto pointer-events-auto h-8 w-16 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out ${selected ? ' bg-blue-500 ring-black/20' : 'bg-slate-900/10 ring-slate-900/5'} `}>
          <div 
            class={`h-6 w-6 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out ${selected ? 'translate-x-8' : ''}`}>
          </div>
      </div>
    )
}