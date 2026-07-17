import { GlicemiaStatus } from "./GlicemiaStatus";

export type Glicemia = {
  id: string;
  obs?: string;
  dica?: string;
  cor?: string;
  glicose: number;
  isJejum: boolean;
  data: Date;
  status?: GlicemiaStatus;
};