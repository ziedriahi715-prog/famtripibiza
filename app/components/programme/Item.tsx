import React, { PropsWithChildren } from 'react';

const Item = (
  props: PropsWithChildren<{
    initialDate: number;
    month: string;
    title: string;
    content: React.ReactNode;
  }>,
) => {
  return (
    <div className="relative mt-2 flex gap-x-3">
      <div className="absolute -bottom-[10px] z-10 ml-[42px] h-full pt-[60px]">
        <div className="border-accent h-full w-[60px] border-l-[1px] border-dashed"></div>
      </div>
      <div className="w-[60px] flex-none py-3 pl-3">
        <div className="border-accent bg-accent/10 text-accent z-20 flex h-[60px] w-[60px] flex-col items-center justify-center rounded-full border-2">
          <p className="text-2xl">{props.initialDate}</p>
          <span className="text-primary text-xs">{props.month}</span>
        </div>
      </div>
      <div className="w-full pl-3">
        <div>
          <p
            className={`text-accent mt-2 text-[18px] font-semibold ${props.title ? '' : 'hidden'}`}
          >
            {props.title}
          </p>
        </div>
        {props.content}
      </div>
    </div>
  );
};

export default Item;
