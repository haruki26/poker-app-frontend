import { ActionType } from "../../../game/types";

export type InputAction = Extract<"bet" | "raise", ActionType>;
export type NotInputAction = Exclude<ActionType, InputAction>;
