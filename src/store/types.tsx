export type todo = {
    id: number,
    title: string,
    completed: boolean
}

interface TodoStore {
 user: {
    id: number,
    title: string,
    completed: boolean
}[]
}

export default TodoStore;