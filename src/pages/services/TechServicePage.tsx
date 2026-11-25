import { ServiceDetailLayout } from "@/components/dv/ServiceDetailLayout";
import { TECH_SERVICES_DATA, TechServiceKey } from "@/data/techServicesData";

export default function TechServicePage({ serviceKey }: { serviceKey: TechServiceKey }) {
  return <ServiceDetailLayout {...TECH_SERVICES_DATA[serviceKey]} />;
}
