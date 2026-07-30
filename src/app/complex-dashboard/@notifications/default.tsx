import { Card } from "@/components/card";
import Link from "next/link";

export default function NotificationsDefault() {
  return (
    <Card>
      <div>Notification page</div>
      <br />
      <div>
        <Link href="/complex-dashboard/archived">Archived</Link>
      </div>
    </Card>
  );
}
