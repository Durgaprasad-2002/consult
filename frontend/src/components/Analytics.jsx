import Script from "next/script";

export default function Analytics() {
  return <>{process.env.NEXT_PUBLIC_ENVIRONMENT == "PROD" && <></>}</>;
}
