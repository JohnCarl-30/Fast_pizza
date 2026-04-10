import type { GeocodingResult, AddressResult } from '../types';

export async function getAddress({ latitude, longitude }: GeocodingResult): Promise<AddressResult> {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw Error("Failed getting address");

  const data: AddressResult = await res.json();
  return data;
}
