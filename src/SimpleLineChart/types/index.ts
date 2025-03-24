export interface Point {
  amt: number;
  pv: number;
  uv: number;
  uvZScore?: number;
  pvZScore?: number;
}

export interface Stop {
  offset: string;
  stopColor: string;
}
