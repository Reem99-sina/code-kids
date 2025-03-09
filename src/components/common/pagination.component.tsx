

import type React from "react"
import { memo } from "react"
import { cn } from "@/lib/utils"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { ArrowLeft, ArrowRight } from "lucide-react"






interface CustomPaginationProps {
  onPageChange: (page: number) => void
  pageCount: number
  initialPage?: number
  className?: string
}

const itemContainerClassName = cn(
  "mx-1 flex h-9 w-9 items-center justify-center",
  "rounded border border-border bg-bg text-text",
  "hover:bg-secondary",
)

const itemClassName = cn("w-full text-center flex items-center justify-center")

const CustomPagination: React.FC<CustomPaginationProps> = memo(
  ({ onPageChange, pageCount, initialPage = 1, className }) => {
   

    const handlePageChange = (page: number) => {
      onPageChange(page)
    }

    return (
      <Pagination className={cn("text-[#7B8494]", className)}>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={cn(itemContainerClassName, "bg-[#F4F6F9] w-[80px] h-[30px] border-0")}
              onClick={() => handlePageChange(Math.max(1, initialPage - 1))}
            >
              <div className="flex flex-row items-center justify-center gap-1">
                <ArrowLeft  />
                <p>{"Prevs"}</p>
              </div>
            </PaginationPrevious>
          </PaginationItem>

          {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                className={cn(
                  itemContainerClassName,
                  "border-[#DCDFE4] hover:bg-gray-300 hover:bg-opacity-30",
                  page === initialPage && "bg-black border-0",
                )}
                onClick={() => handlePageChange(page)}
                isActive={page === initialPage}
              >
                <span className={cn(itemClassName, page === initialPage && "text-white")}>{page}</span>
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              className={cn(itemContainerClassName, "bg-[#F4F6F9] w-[80px] h-[30px] border-0")}
              onClick={() => handlePageChange(Math.min(pageCount, initialPage + 1))}
            >
              <div className="flex flex-row items-center justify-center gap-1">
                <p>{"Next"}</p>
                <ArrowRight />
              </div>
            </PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  },
)

CustomPagination.displayName = "CustomPagination"

export { CustomPagination }

