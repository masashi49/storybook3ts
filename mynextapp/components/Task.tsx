import React, { VFC } from 'react'

type Props = {
    task: {
        id: number ,
        title: string,
        state: string,
    },
    onArchiveTask: () => {},
    onPinTask: () => {}
}

export const Task: VFC<Props> = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
    return (
        <div>
            <input type="text" value={title} readOnly={true} />
        </div>
    )
}
