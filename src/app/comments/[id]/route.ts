import { comments } from "../data";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    const comment = comments.find((comment) => comment?.id == parseInt(id))
    return Response.json(comment || null)
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const body = await request.json() as { text: string }

    const index = comments.findIndex((comment) => comment.id === parseInt(id))
    let comment = null
    if (index !== -1) {
        comments[index].text = body.text
        comment = comments[index]
    }

    return Response.json(comment)

}


export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const index = comments.findIndex((comment) => comment.id === parseInt(id))
    let comment = null
    if (index !== -1) {
        comment = comments[index]
        comments.splice(index, 1)
    }
    return Response.json(comment)
}