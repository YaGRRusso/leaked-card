import { FC, HTMLAttributes } from "react"
import { Trans } from "react-i18next"

import { cn } from "@/utils/cn"

export interface CommonCheckListProps extends HTMLAttributes<HTMLUListElement> {
  list?: {
    text: string
  }[]
}

export const CommonCheckList: FC<CommonCheckListProps> = ({ list, className, ...rest }) => {
  return (
    <ul className={cn("flex flex-col gap-4", className)} {...rest}>
      {list?.map((item, index) => (
        <li className="flex gap-2" key={index}>
          <span>
            <Trans components={{ strong: <strong className="font-extrabold text-accent" /> }}>{item.text}</Trans>
          </span>
        </li>
      ))}
    </ul>
  )
}

CommonCheckList.displayName = "CommonCheckList"
