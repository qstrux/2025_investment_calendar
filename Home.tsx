import { useState } from "react";
import CoverPage from "@/components/CoverPage";
import CalendarView from "@/components/CalendarView";
import ClubBenefits from "@/components/ClubBenefits";
import CommunityLinks from "@/components/CommunityLinks";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  const [showCalendar, setShowCalendar] = useState(false);

  if (!showCalendar) {
    return (
      <>
        <CoverPage onEnter={() => setShowCalendar(true)} />
        <div id="club-benefits">
          <ClubBenefits />
        </div>
        <CommunityLinks />
        <FloatingContact />
      </>
    );
  }

  return (
    <>
      <CalendarView />
      <div id="club-benefits">
        <ClubBenefits />
      </div>
      <CommunityLinks />
      <FloatingContact />
    </>
  );
}
