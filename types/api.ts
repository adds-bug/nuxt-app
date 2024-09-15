// for listing API

export interface RunningBrandList {
  label: string;
  value: string;
}

export interface SalesSummary {
  acos: number;
  advertise_sales: number;
  advertise_sessions: number;
  advertise_spend: number;
  organic_sales: number;
  organic_sessions: number;
  profit: number;
  tacos: number;
  total_sales: number;
  total_sessions: number;
}

export interface SearchTerm {
  all_niche_volume_trend: number[];
  date: string[];
  last_week_search_term_rank: number;
  last_week_search_term_sales_max: number;
  last_week_search_term_sales_min: number;
  last_week_search_term_volume: number;
  last_week_start: string;
  list_related_keyword: string[];
  sales_trend_maximum: number[];
  sales_trend_middle: number[];
  sales_trend_minimum: number[];
  search_volume_trend: number[];
}
