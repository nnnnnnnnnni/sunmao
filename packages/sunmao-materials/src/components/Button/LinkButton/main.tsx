import { FC, useCallback } from 'react'
import { LinkButtonProps } from './types'
import { Button } from '@bfe/moly'
import React from 'react';

export const LinkButton: FC<LinkButtonProps> = ({ link, text }) => {
  const handleClick = useCallback(() => {
    if (link) {
      // window.open(link, '_blank')
    }
  }, [link])

  return <Button onClick={handleClick}>{text}</Button>
}
