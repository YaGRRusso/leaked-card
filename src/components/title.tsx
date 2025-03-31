import { FC, HTMLAttributes } from "react"

export interface TitleProps extends HTMLAttributes<HTMLDivElement> {}

export const Title: FC<TitleProps> = ({ children, ...rest }) => {
  return (
    <h1 className="text-xl font-medium" {...rest}>
      {children}
    </h1>
  )
}

Title.displayName = "Title"
