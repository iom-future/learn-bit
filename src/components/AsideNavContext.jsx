import React from 'react'
import { createContext } from 'react'

export let AsideNavContext = createContext(null);
function AsideNavProvider({children,asideNavClass}) {
  return (
   
        <AsideNavContext.Provider value={asideNavClass}>
            {children}
        </AsideNavContext.Provider>

  )
}

export default AsideNavProvider