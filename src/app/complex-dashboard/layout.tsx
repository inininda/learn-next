import Notifications from "./@notifications/page";
import Users from "./@users/page";
import Revenue from "./@revenue/page";
export default function ComplexDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <Users />
      <Revenue />
      <Notifications />
    </>
  );
}
