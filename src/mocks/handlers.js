import { rest } from "msw";

export const handlers = [
    rest.get("http://localhost:5000/todos", (req, res, ctx) => {
        return(
            ctx.json([
                {id: 1, title: 'Todo 1', completed: false},
            ])
        )
    }),
];