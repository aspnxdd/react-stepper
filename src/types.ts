export type Status = "loading" | "completed";

export interface Props {
  id: number;
  text: string;
  status?: Status;
}

export interface Options {
  squared?: boolean;
  color?: string;
  noAnimation?: boolean;
}
