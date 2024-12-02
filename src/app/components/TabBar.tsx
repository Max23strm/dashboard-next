'use client'

import { setCookie } from "cookies-next";
import { useState } from "react";

interface Props {
    currentTab?: number;
    tabOptions?: number[];
}

export const TabBar = ( { currentTab = 1, tabOptions = [1,2,3,4] }: Props) => {
    
    const [selected, setSelected] = useState(currentTab)
    const onTabSelected = (tab : number) => {
        setSelected(tab)
        setCookie('selectedTab', `${tab}`)
    }


    return (
      <div className={`grid w-full grid-cols-${tabOptions.length} space-x-2 rounded-xl bg-gray-200 p-2`}>
        {
            tabOptions.map( t => (
                <div key={t}>
                    <input 
                        type="radio"
                        id="1" 
                        onChange={()=>{}}
                        className="peer hidden"
                        value={t}
                        checked={ selected === t }
                    />
                    <label 
                        onClick={()=> onTabSelected(t)}
                        className="block transition-all cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                    >
                        {t}
                    </label>
                </div>
            ))
        }
  
      </div>
    )
  }