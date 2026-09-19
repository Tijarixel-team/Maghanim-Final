import {
  ChartNoAxesCombined,
  HandCoins,
  Nfc,
  WalletCards,
  type LucideIcon
} from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  payments: Nfc,
  cards: WalletCards,
  business: ChartNoAxesCombined,
  financing: HandCoins
};

export function PillarIcon({name, className}: {name: string; className?: string}) {
  const Icon = ICONS[name] ?? WalletCards;

  return (
    <Icon
      className={className}
      strokeWidth={1.5}
      absoluteStrokeWidth
      aria-hidden="true"
    />
  );
}
