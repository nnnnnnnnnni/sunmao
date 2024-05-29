import { FC, PropsWithChildren, createContext, useContext } from 'react'
import React from 'react';

interface CampaignContextProps {
  campaignId: string
  needApply: boolean
}

const CampaignContext = createContext({} as CampaignContextProps)

export const useCampaignContext = () => {
  const context = useContext(CampaignContext)
  return context || {}
}

export const CampaignProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <CampaignContext.Provider
      value={{
        campaignId: '123',
        needApply: true,
      }}
    >
      {children}
    </CampaignContext.Provider>
  )
}
