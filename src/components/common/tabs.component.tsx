
import clsx from 'clsx';
import  { FC, JSX, useState } from 'react';

interface Props {
  tabs: {
    title: string;
    icon?: JSX.Element;
    Component?: JSX.Element;
    onClick?: () => void;
  }[];
  activeIndex?: number;
}

export const Tabs: FC<Props> = ({ tabs, activeIndex }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(
    activeIndex ? activeIndex : 0,
  );

  return (
    <div className='w-full'>
      <div className='mb-4 flex gap-x-2 border-b border-black/30'>
        {tabs.map((tab, index) => {
          const textColorClass =
            index === activeTabIndex
              ? 'text-black font-black'
              : 'text-black/60';

          return (
            <div
              className={clsx(
                'relative flex  cursor-pointer flex-col px-4 py-5',
                index === activeTabIndex
                  ? 'after:absolute after:bottom-0 after:left-0  after:right-0 after:h-1 after:rounded-t-lg after:bg-black'
                  : '',
              )}
              key={tab.title}
              onClick={() => {
                setActiveTabIndex(index);
                if (tab?.onClick) {
                  tab.onClick();
                }
              }}
            >
              <div
                className={clsx(
                  'self-start rounded-tr-lg',
                  tab.icon && 'flex items-center gap-1',
                )}
              >
                {tab.icon ? <span>{tab.icon}</span> : null}
                <h3 className={`text-xs sm:text-base ${textColorClass}`}>
                  {tab.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      {tabs[activeTabIndex]?.Component}
    </div>
  );
};
