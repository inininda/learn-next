export const dynamicParams = true;
export const maxDuration = 5 // revalidate data every 10s

export async function GET() {
    return Response.json({ time: new Date().toLocaleTimeString() })
}