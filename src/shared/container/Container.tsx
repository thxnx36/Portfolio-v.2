import { FC, HTMLAttributes, ReactNode, forwardRef } from 'react'
import { motion } from 'framer-motion'
import styles from './Container.module.css'

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export const Container: FC<Props> = forwardRef<HTMLHeadingElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={
          className ? `${styles.container} ${className}` : styles.container
        }
        {...props}
      >
        {children}
      </div>
    )
  },
)

export const MContainer = motion(Container)
