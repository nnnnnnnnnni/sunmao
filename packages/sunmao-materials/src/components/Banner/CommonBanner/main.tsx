import { FC } from 'react';
import { ApplyButton, LinkButton } from '../../Button';
import { CommonBannerProps } from '../types';
import { Countdown } from '@bfe/moly';
import React from 'react';

export const CommonBanner: FC<CommonBannerProps> = () => {
  return (
    <div>
      <div>
        <p>duration</p>
        <p>title</p>
        <p>description</p>
        <Countdown targetTimestamp={new Date().getTime()} />
        <div>
          <ApplyButton />
          <LinkButton link={''} text={'link to more'} />
        </div>
      </div>
      <div>
        <img src="https://iph.href.lu/360x360" alt="" />
      </div>
    </div>
  );
};
