export type Action = "bet" | "raise" | "call" | "fold" | "check" | "all-in";
export type InputAction = Extract<"bet" | "raise", Action>;