import { X } from "@phosphor-icons/react"
import { DialogHTMLAttributes, FC, RefObject } from "react"
import { useTranslation } from "react-i18next"

import { cn } from "@/utils/cn"

export interface CommonDialogProps extends DialogHTMLAttributes<HTMLDialogElement> {
  ref?: RefObject<HTMLDialogElement | null>
}

export const CommonDialog: FC<CommonDialogProps> = ({ className, ...rest }) => {
  const { t } = useTranslation()

  return (
    <dialog className={cn("modal", className)} {...rest}>
      <div className="modal-box">
        <form method="dialog">
          <button className="btn absolute top-2 right-2 btn-circle btn-ghost btn-sm">
            <X />
          </button>
        </form>
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold">{t("checkingCard")}</h3>
          <span className="loading loading-xs loading-ring" />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 py-2">
          <span className="text-sm text-muted">{t("checkingCardDescription")}</span>
          <progress className="progress w-full"></progress>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button />
      </form>
    </dialog>
  )
}

CommonDialog.displayName = "CommonDialog"
