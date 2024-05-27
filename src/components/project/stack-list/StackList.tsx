import type { FC } from 'react'
import styles from './StackList.module.css'

type Props = {
  stackList?: string
}

export const StackList: FC<Props> = ({ stackList }) => {
  const regex = /#\w+(?:\s+\w+)*/g
  const list = stackList!.match(regex)

  return (
    <>
      {list?.map((item, i) => (
        <li key={i} className={styles.tag}>
          {item}
        </li>
      ))}
    </>
  )
}
