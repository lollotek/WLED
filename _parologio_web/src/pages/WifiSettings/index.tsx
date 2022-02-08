import { useState  } from "preact/hooks";
import { getWifiList } from "../../utils/api";
import { LockClosedIcon, WifiIcon, ArrowPathIcon, MagnifyingGlassIcon  } from '@heroicons/react/24/outline'
// import WifiList from "../../components/WifiList";
 
export function WifiSettings() {
    const [network, setNetwork] = useState<string>('');
    const [networks, setNetworks] = useState<null|Array<{ssid:string} & Record<string, any>>>([{ssid:'asd'}]);
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  
    const findWifi = async() => {
      setShowSuggestions(true);
      setNetworks(null);
      const result = await getWifiList();
      setNetworks(result.networks);
    }


    const suggestions = <>
        <h4 className="text-2xl tracking-tight text-gray-800 sm:text-3xl">
          <span className="block">Selezione nome Wifi</span>
        </h4>
        <div className="flex flex-col gap-4 items-start relative p-2 w-full rounded-lg overflow-hidden shadow hover:shadow-md bg-slate-300">
          <ul className="hover:text-cyan-700 cursor-pointer">
            {!networks && "Ricerca in corso.."}
            {networks && networks?.length == 0 && <>
                <button onClick={findWifi} className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <p>Riprova</p>
                  <ArrowPathIcon className="h-6 ml-4"/>
                </button>
              </>}
            {networks && networks?.length > 0 && networks?.map((net, index) => <li key={index} onClick={() => {
              setNetwork(net.ssid)
              setShowSuggestions(false);
            }}>{net.ssid}</li>)}
          </ul>
        </div>
      </>

    

    return (
        <div className="my-8 space-y-3">
          {showSuggestions && suggestions}
          {!showSuggestions && <div className="flex flex-col gap-4 items-start relative p-6 w-full rounded-lg overflow-hidden shadow hover:shadow-md bg-slate-300">
            <>
              <h4 className="text-2xl tracking-tight text-gray-800 sm:text-3xl">
                <span className="block">Imposta Wifi</span>
              </h4>
                <form id="form_s" name="Sf" method="post" action="/settings/wifi"  className="flex flex-col w-full gap-4 pt-4">
                  <div className="flex gap-4">
                    <div className="w-8"><WifiIcon className="w-8 bg-slate-300"/></div>
                    <input className="w-full pl-2" id="CS" name="CS" value={network} onChange={(ev) => setNetwork((ev.target as HTMLInputElement).value)} />
                    <button className="w-8" onClick={findWifi}><MagnifyingGlassIcon className="w-8 h-8 bg-slate-300"/></button>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8"><LockClosedIcon className="w-8 h-8 bg-slate-300"/></div>
                    <input className="pl-2 w-full" id="CP" name="CP" type="password"/>
                  </div>
                  <input type="hidden" id="AS" name="AS" value="PAROLOGIO-AP"/>
                  <input type="hidden" id="AP" name="AP" value="sonoleore12"/>
                  <input type="hidden" id="CM" name="CM" value="parologio"/>
                  <input type="hidden" id="AC" name="AC" value="1"/>
                  <input type="hidden" id="AB" name="AB" value="0"/>
                  <input default type="submit" value="Connetti" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
                </form>
            </>
          </div>
          }
        </div>
    )
}