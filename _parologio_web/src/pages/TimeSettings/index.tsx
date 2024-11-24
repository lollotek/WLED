import { useState  } from "preact/hooks";
// import { getWifiList } from "../../utils/api";
import { ClockIcon, CalendarDaysIcon  } from '@heroicons/react/24/outline'
 
export function TimeSettings() {
    const [day, setDay] = useState<string>('25');
    const [month, setMonth] = useState<string>('12');
    const [year, setYear] = useState<string>('25');
    const [mm, setMM] = useState<string>('00');
    const [hh, setHH] = useState<string>('12');

  
    return (
        <div className="my-8 space-y-3">
          <div className="flex flex-col gap-4 items-start relative p-6 w-full rounded-lg overflow-hidden shadow hover:shadow-md bg-slate-300">
            <h4 className="text-2xl tracking-tight text-gray-800 sm:text-3xl">
              <span className="block">Imposta ora e giorno</span>
            </h4>
              <form id="form_s" name="Sf" method="POST" action="/settings/time"  className="flex flex-col gap-4 pt-4">
                <div className="flex gap-4">
                  <ClockIcon className="w-8 h-8 bg-slate-300"/>
                  <input className="w-9 pl-2" id="CH" name="CH" maxLength={2} value={mm} onChange={(ev) => setMM((ev.target as HTMLInputElement).value)} />
                  :
                  <input className="w-9 pl-2" id="CM" name="CM" maxLength={2} value={hh} onChange={(ev) => setHH((ev.target as HTMLInputElement).value)} />
                </div>
                
                <div className="flex gap-4">
                  <CalendarDaysIcon className="w-8 h-8 bg-slate-300"/>
                  <input className="w-9 pl-2" id="CD" name="CD" maxLength={2} value={day} onChange={(ev) => setDay((ev.target as HTMLInputElement).value)} />
                  -
                  <input className="w-9 pl-2" id="CI" name="CI" maxLength={2} value={month} onChange={(ev) => setMonth((ev.target as HTMLInputElement).value)} />
                  - 20
                  <input className="w-9 pl-2" id="CY" name="CY" maxLength={2} value={year} onChange={(ev) => setYear((ev.target as HTMLInputElement).value)} />
                </div>

                <input type="hidden" id="CS" name="CS" value="0"/>
                <input type="hidden" id="NT" name="NT" value="on"/>
                <input type="hidden" id="NS" name="NS" value="it.pool.ntp.org"/>
                <input type="hidden" id="TZ" name="TZ" value="2"/>
                <input type="hidden" id="UO" name="UO" value="0"/>
                <input type="hidden" id="LTR" name="LTR" value="N"/>
                <input type="hidden" id="LT" name="LT" value="0.00"/>
                <input type="hidden" id="LNR" name="LNR" value="E"/>
                <input type="hidden" id="LN" name="LN" value="0.00"/>
                <input type="hidden" id="OL" name="OL" value="off"/>
                <input type="hidden" id="CE" name="CE" value="off"/>

                <input type="hidden" id="O1" name="O1" value="0"/>
                <input type="hidden" id="O2" name="O2" value="0"/>
                <input type="hidden" id="OM" name="OM" value="0"/>

                <input type="hidden" id="A0" name="A0" value="0"/>
                <input type="hidden" id="A1" name="A1" value="0"/>
                <input type="hidden" id="MC" name="MC" value="0"/>
                <input type="hidden" id="MN" name="MN" value="0"/>

                <input type="hidden" id="MP0" name="MP0" value="0"/>
                <input type="hidden" id="ML0" name="ML0" value="0"/>
                <input type="hidden" id="MD0" name="MD0" value="0"/>

                <input type="hidden" id="MP1" name="MP1" value="0"/>
                <input type="hidden" id="ML1" name="ML1" value="0"/>
                <input type="hidden" id="MD1" name="MD1" value="0"/>

                <input type="hidden" id="MP2" name="MP2" value="0"/>
                <input type="hidden" id="ML2" name="ML2" value="0"/>
                <input type="hidden" id="MD2" name="MD2" value="0"/>

                <input type="hidden" id="MP3" name="MP3" value="0"/>
                <input type="hidden" id="ML3" name="ML3" value="0"/>
                <input type="hidden" id="MD3" name="MD3" value="0"/>

                <input type="hidden" id="W0" name="W0" value="254"/>
                <input type="hidden" id="H0" name="H0" value="0"/>
                <input type="hidden" id="N0" name="N0" value="0"/>
                <input type="hidden" id="T0" name="T0" value="0"/>
                <input type="hidden" id="M0" name="M0" value="1"/>
                <input type="hidden" id="D0" name="D0" value="1"/>
                <input type="hidden" id="P0" name="P0" value="12"/>
                <input type="hidden" id="E0" name="E0" value="31"/>

                <input type="hidden" id="W1" name="W1" value="254"/>
                <input type="hidden" id="H1" name="H1" value="0"/>
                <input type="hidden" id="N1" name="N1" value="0"/>
                <input type="hidden" id="T1" name="T1" value="0"/>
                <input type="hidden" id="M1" name="M1" value="1"/>
                <input type="hidden" id="D1" name="D1" value="1"/>
                <input type="hidden" id="P1" name="P1" value="12"/>
                <input type="hidden" id="E1" name="E1" value="31"/>

                <input type="hidden" id="W2" name="W2" value="254"/>
                <input type="hidden" id="H2" name="H2" value="0"/>
                <input type="hidden" id="N2" name="N2" value="0"/>
                <input type="hidden" id="T2" name="T2" value="0"/>
                <input type="hidden" id="M2" name="M2" value="1"/>
                <input type="hidden" id="D2" name="D2" value="1"/>
                <input type="hidden" id="P2" name="P2" value="12"/>
                <input type="hidden" id="E2" name="E2" value="31"/>

                <input type="hidden" id="W3" name="W3" value="254"/>
                <input type="hidden" id="H3" name="H3" value="0"/>
                <input type="hidden" id="N3" name="N3" value="0"/>
                <input type="hidden" id="T3" name="T3" value="0"/>
                <input type="hidden" id="M3" name="M3" value="1"/>
                <input type="hidden" id="D3" name="D3" value="1"/>
                <input type="hidden" id="P3" name="P3" value="12"/>
                <input type="hidden" id="E3" name="E3" value="31"/>

                <input type="hidden" id="W4" name="W4" value="254"/>
                <input type="hidden" id="H4" name="H4" value="0"/>
                <input type="hidden" id="N4" name="N4" value="0"/>
                <input type="hidden" id="T4" name="T4" value="0"/>
                <input type="hidden" id="M4" name="M4" value="1"/>
                <input type="hidden" id="D4" name="D4" value="1"/>
                <input type="hidden" id="P4" name="P4" value="12"/>
                <input type="hidden" id="E4" name="E4" value="31"/>

                <input type="hidden" id="W5" name="W5" value="254"/>
                <input type="hidden" id="H5" name="H5" value="0"/>
                <input type="hidden" id="N5" name="N5" value="0"/>
                <input type="hidden" id="T5" name="T5" value="0"/>
                <input type="hidden" id="M5" name="M5" value="1"/>
                <input type="hidden" id="D5" name="D5" value="1"/>
                <input type="hidden" id="P5" name="P5" value="12"/>
                <input type="hidden" id="E5" name="E5" value="31"/>

                <input type="hidden" id="W6" name="W6" value="254"/>
                <input type="hidden" id="H6" name="H6" value="0"/>
                <input type="hidden" id="N6" name="N6" value="0"/>
                <input type="hidden" id="T6" name="T6" value="0"/>
                <input type="hidden" id="M6" name="M6" value="1"/>
                <input type="hidden" id="D6" name="D6" value="1"/>
                <input type="hidden" id="P6" name="P6" value="12"/>
                <input type="hidden" id="E6" name="E6" value="31"/>

                <input type="hidden" id="W7" name="W7" value="254"/>
                <input type="hidden" id="H7" name="H7" value="0"/>
                <input type="hidden" id="N7" name="N7" value="0"/>
                <input type="hidden" id="T7" name="T7" value="0"/>
                <input type="hidden" id="M7" name="M7" value="1"/>
                <input type="hidden" id="D7" name="D7" value="1"/>
                <input type="hidden" id="P7" name="P7" value="12"/>
                <input type="hidden" id="E7" name="E7" value="31"/>

                <input type="hidden" id="W8" name="W8" value="254"/>
                <input type="hidden" id="H8" name="H8" value="255"/>
                <input type="hidden" id="N8" name="N8" value="0"/>
                <input type="hidden" id="T8" name="T8" value="0"/>
                
                <input type="hidden" id="W9" name="W9" value="254"/>
                <input type="hidden" id="H9" name="H9" value="255"/>
                <input type="hidden" id="N9" name="N9" value="0"/>
                <input type="hidden" id="T9" name="T9" value="0"/>

                <input default type="submit" value="Imposta" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
              </form>
            </div>
        </div>
    )
}