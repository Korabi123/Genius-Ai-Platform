import { Settings } from "lucide-react";

import { Heading } from "@/components/Heading";
import { checkSubscription } from "@/lib/subscription";
import { SubscriptionButton } from "@/components/Subscription-Button";

const SettingsPage = async () => {
  const isPro = await checkSubscription();

  return ( 
    <div>
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro ? 'You are currently on a pro plan.' : 'You are using the free tier'}
        </div>
        <SubscriptionButton
          isPro={isPro}
        />
      </div>
    </div>
  );
}
 
export default SettingsPage;