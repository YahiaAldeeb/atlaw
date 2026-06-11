import { LitigationCapabilityPage } from "./practice/LitigationCapabilityPage";
import { civilLitigationData } from "../data/practice/civil-litigation";

export const CivilLitigationPage = (): JSX.Element => <LitigationCapabilityPage data={civilLitigationData} />;
