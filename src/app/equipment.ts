// don't know why, but npm build ci fails in the pipeline if this stays in the models folder
// I hate that this ruins what little order this app has, but we are slaves to the pipeline
export interface Equipment {
  name: string;
  description: string;
  equipmentId: number;
  difficulty: number;
  price: number;
  type: string;
  playerEquipmentId: number;
  modifier: number;
}
