import { CSSProperties, FC } from 'react'
import { Paragraph } from '../../../shared'

type Props = {
  stackList?: string
}

export const StackList: FC<Props> = ({ stackList }) => {
  return <Paragraph style={additionalStyles}>{stackList}</Paragraph>
}

const additionalStyles: CSSProperties = {
  maxWidth: '100%',
  textAlign: 'center',
  margin: 0,
  fontStyle: 'italic',
}
