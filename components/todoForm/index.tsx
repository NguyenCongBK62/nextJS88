import { Todo } from '@/store/modules/todoSlice'
import { Form, Input } from 'antd'
import React from 'react'

interface formInfo {
  type: string
  todoDetail?: Todo
}

export default function TodoForm(props: formInfo) {
  const { TextArea } = Input
  return props.type === 'edit' && props.todoDetail ? (
    <Form>
      <Form.Item label="Input">
        <Input defaultValue={props.todoDetail.title} />
      </Form.Item>
      <Form.Item label="Input">
        <TextArea defaultValue={props.todoDetail.doSomeThing} />
      </Form.Item>
    </Form>
  ) : (
    <Form>
      <Form.Item label="Input">
        <Input />
      </Form.Item>
      <Form.Item label="Input">
        <TextArea />
      </Form.Item>
    </Form>
  )
}
