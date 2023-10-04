import { islamicDistanceConversions } from "./distance.ts";
import { islamicWeightConversions } from "./weight.ts";

type ConversionType = "metric" | "us";

export function convertIslamicDistance(
  measurement: string,
  value: number,
  conversionType: ConversionType
): number | undefined {
  const conversionData = islamicDistanceConversions[measurement];

  if (!conversionData) {
    console.error("Invalid Islamic distance measurement");
    return undefined;
  }

  return conversionType === "metric"
    ? value * conversionData.metric
    : value * conversionData.us;
}

export function convertIslamicWeight(
  measurement: string,
  value: number,
  conversionType: ConversionType
): number | undefined {
  const conversionData = islamicWeightConversions[measurement];

  if (!conversionData) {
    console.error("Invalid Islamic weight measurement");
    return undefined;
  }

  return conversionType === "metric"
    ? value * conversionData.metric
    : value * conversionData.us;
}
