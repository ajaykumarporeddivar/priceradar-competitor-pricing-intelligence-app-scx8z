export interface Competitor {
  id: string;
  name: string;
  url: string;
  status: 'active' | 'paused' | 'error';
  lastScraped: string; // ISO string date
  nextScrape: string; // ISO string date
  alertCount: number;
  changesLast30Days: number;
  pricingData: PricingTier[];
}

export interface PricingTier {
  id: string;
  planName: string;
  priceMonthly: number | null;
  priceAnnual: number | null;
  features: string[];
  freeTrialDays: number | null;
  currency: string;
}

export interface PricingChange {
  id: string;
  competitorId: string;
  competitorName: string;
  timestamp: string; // ISO string date
  changeType: 'price_drop' | 'price_increase' | 'plan_added' | 'plan_removed' | 'feature_change';
  description: string;
  oldValue: string;
  newValue: string;
  impact: 'low' | 'medium' | 'high';
}

export interface Alert {
  id: string;
  competitorId: string;
  competitorName: string;
  type: 'price_drop_threshold' | 'any_change' | 'feature_change';
  threshold: number | null; // For price_drop_threshold, e.g., 10 for 10%
  channel: 'email' | 'slack';
  status: 'active' | 'paused';
  lastTriggered: string | null; // ISO string date
  createdAt: string; // ISO string date
}

export interface AnalysisSummary {
  competitorId: string;
  competitorName: string;
  yourRelativePosition: 'cheapest' | 'middle' | 'premium' | 'unknown';
  pricingChangeVelocity: 'low' | 'medium' | 'high';
  recommendation: string;
}

export interface Metric {
  id: string;
  label: string;
  value: number;
  unit?: string;
  change?: number;
  trend?: 'up' | 'down' | 'stable';
}

export interface ActivityLog {
  id: string;
  timestamp: string; // ISO string date
  action: string;
  details: string;
  userId: string;
}