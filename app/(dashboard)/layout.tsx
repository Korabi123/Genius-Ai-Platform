import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const DashboardLayout = async ({
  children
}: {
  children: React.ReactNode
}) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className="h-full relative">
      <div 
        className="
          hidden 
          h-full
          md:w-72
          md:flex
          md:flex-col 
          md:fixed 
          md:inset-y-0
          bg-gray-900
        "
      > {/* OR bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 for a gradient */}
        <Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
 
export default DashboardLayout;