const z = require('zod');

const createTodo = z.object({
    title : z.string(),
    description : z.string(),
    completed : z.boolean()
});

const updateTodo = z.object({
    _id : z.string()
})

module.exports = {
    createTodo,
    updateTodo
}