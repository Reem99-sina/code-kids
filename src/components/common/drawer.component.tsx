
import { type ReactNode, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Drawer, DrawerContent, DrawerClose } from "@/components/ui/drawer"

type CustomDrawerProps = {
  open: boolean
  onClose: () => void
  className?: string
  direction?: "left" | "right" | "top" | "bottom"
  size?: string | number
  lockBackgroundScroll?: boolean
  children: ReactNode
}

export function CustomDrawer({
  open,
  onClose,
  className,
  direction = "bottom",
  size = "auto",
  lockBackgroundScroll = false,
  children,
}: CustomDrawerProps) {
  // Handle background scroll locking
  useEffect(() => {
    if (lockBackgroundScroll && open) {
      document.body.style.overflow = "hidden"
      
      return () => {
        document.body.style.overflow = ""
      }
    }
  }, [lockBackgroundScroll, open])

  // Don't render anything if not open
  if (!open) return null

  // Calculate styles based on direction
  const getDirectionStyles = () => {
    const sizeValue = typeof size === "number" ? `${size}px` : size

    switch (direction) {
      case "left":
        return {
          left: 0,
          top: 0,
          bottom: 0,
          width: sizeValue,
          height: "100vh",
          transform: "translateX(0)",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }
      case "right":
        return {
          right: 0,
          top: 0,
          bottom: 0,
          width: sizeValue,
          height: "100vh",
          transform: "translateX(0)",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }
      case "top":
        return {
          top: 0,
          left: 0,
          right: 0,
          height: sizeValue,
          width: "100%",
          transform: "translateY(0)",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }
      case "bottom":
      default:
        return {
          bottom: 0,
          left: 0,
          right: 0,
          height: sizeValue,
          width: "100%",
          transform: "translateY(0)",
        }
    }
  }

  return (
    <Drawer open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DrawerContent className={cn("flex flex-1 flex-col", className)} style={getDirectionStyles()}>
        <DrawerClose className="sr-only">Close</DrawerClose>
        <div className={cn("flex flex-1", className)}>{children}</div>
      </DrawerContent>
    </Drawer>
  )
}

