export const dynamic = "force-static";
export const revalidate = "10" // revalidate data every 10s

export async function GET() {
    return Response.json({ time: new Date().toLocaleTimeString() })
}