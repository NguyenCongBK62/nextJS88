import { Todo, deleteTodo, getListTodo } from '@/store/modules/todoSlice'
import style from '@/styles/listTodo.module.scss'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '../store/hooks'
export default function Home() {
  const listTodo: Todo[] = useAppSelector(getListTodo)
  const dispatch = useAppDispatch()
  return (
    <div className={style.listTodo}>
      {listTodo.map((e, index) => {
        return (
          <div className={style.todoItemContainer} key={index + 'a'}>
            <div className={style.todoItem} key={index}>
              <div>
                <p style={{ marginBottom: 20 }}>Title: {e.title}</p>
                <p>Do: {e.doSomeThing}</p>
              </div>
              <div className={style.todoActions}>
                <Button
                  style={{ marginBottom: 5 }}
                  onClick={() => {
                    dispatch(deleteTodo(index))
                  }}
                >
                  <DeleteOutlined />
                </Button>
                <Button>
                  <Link href="[editTodoId]" as={`${index}`}>
                    <EditOutlined />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
