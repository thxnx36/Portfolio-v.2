import { FC } from 'react'
import { CloseButton, Paragraph, Title } from 'src/shared'
import { UserType } from 'src/types'
import { MdOutlineDelete } from 'react-icons/md'
import { TbReload } from 'react-icons/tb'
import styles from './UsersList.module.css'

type Props = {
  usersList?: UserType[]
  selectedUser: UserType | null
  onSelectUser: (user: UserType) => Promise<void>
  onDeleteUser: (user: UserType) => Promise<void>
  onResetSelectedUser: () => void
  refetchUsersList: () => void
}

export const UsersList: FC<Props> = ({
  usersList,
  selectedUser,
  onSelectUser,
  onDeleteUser,
  onResetSelectedUser,
  refetchUsersList,
}) => {
  return (
    <ul className={styles.userList}>
      <div className={styles.title}>
        <Title tag='h4'>Users</Title>
        <button onClick={refetchUsersList}>{<TbReload size='1.5em' />}</button>
      </div>
      {usersList?.map(user => (
        <li
          key={user?.userId}
          className={
            selectedUser === user
              ? `${styles.item} ${styles.active}`
              : styles.item
          }
        >
          <Paragraph
            className={
              selectedUser === user
                ? `${styles.email} ${styles.disabled}`
                : styles.email
            }
            onClick={() => onSelectUser(user)}
          >
            {user?.email}
          </Paragraph>
          {selectedUser === user && (
            <div className={styles.controlButtons}>
              <button onClick={() => onDeleteUser(user)}>
                <MdOutlineDelete />
              </button>
              <CloseButton onClick={onResetSelectedUser} size='1.3em' />
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}
