import { Todo } from '@/store/modules/todoSlice'
import { useRouter } from 'next/router'
import TodoForm from '../components/todoForm/index'
import { useAppSelector } from '../store/hooks'
import { RootState } from '../store/index'
import { getTodoById } from '../store/modules/todoSlice'
import { useState, useEffect } from 'react'
export default function EditTodo() {
  const router = useRouter()

  const { editTodoId } = router.query

  const [detail, setDetail] = useState<Todo>()

  const todoDetail: Todo = useAppSelector((state: RootState) => {
    return getTodoById(state, parseInt(editTodoId as string))
  })

  useEffect(() => {
    setDetail(todoDetail)
  }, [editTodoId])

  console.log(122, editTodoId)

  return (
    <div>
      <TodoForm type="edit" todoDetail={detail} />
    </div>
  )
}
