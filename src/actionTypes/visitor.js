export const POST_VISITOR = 'POST_VISITOR'

export const postVisitor = (payload) => {
    return {
        type : POST_VISITOR,
        payload
    }
}
