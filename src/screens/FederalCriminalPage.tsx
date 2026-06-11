import { LitigationCapabilityPage } from "./practice/LitigationCapabilityPage";
import { federalCriminalData } from "../data/practice/federal-criminal";

export const FederalCriminalPage = (): JSX.Element => <LitigationCapabilityPage data={federalCriminalData} />;
